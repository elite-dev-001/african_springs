import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SpinnerRoundFilled } from 'spinners-react';
import axios from 'axios'
import parse from 'html-react-parser'


export default function Comment(props) {
    const [isLoggedIn, setLogin] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [profile, setProfile] = useState('')
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)

    const comments = props.comment;
    console.log(comments)
    const id = props.id;


    const {
        register,
        handleSubmit,
    } = useForm();


    useEffect(() => {
        const loginState = localStorage.getItem('loginState')
        setLogin(loginState)
        console.log(loginState)
    
        if(isLoggedIn) {
            const userData = JSON.parse(localStorage.getItem('userData'))
            setName(`${userData['firstName']} ${userData['lastName']}`)
            setEmail(userData['email'])
            setProfile(userData['profile'])
            console.log('Logged In')
        }
      }, [isLoggedIn])

      const onSubmit = (data) => {
        
        if(isLoggedIn){
            setLoading(true)

            data.name = name;
            data.email = email;
            data.profile = profile;
            data.date = new Date().toUTCString();
            data.replys = [];
            console.log(data)
            
            axios.patch(`https://africansprings-api.onrender.com/api/post/update/comments/${id}`, {reply: false, message: data}).then((res) => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
                setErr('Could not comment. Something went wrong')
                setLoading(false)
            })
        } else {
            window.alert('Login to your account to be able to comment')
        }
        
      }


  return (
    <div id="comments" className="comments-area">
        <h3 className="comments-title">{comments?.length} Comments:</h3>

        <ol className="comment-list">
            {
                comments?.length === 0 ? <h3 style={{marginBottom: '1em'}} className="comment-reply-title">No Comments Yet. Be the first to comment</h3> : Array.from(comments).map((comment, index) => <Comments key={index} profile={comment['profile']} name={comment['name']} date={comment['date']} text={comment['text']} email={comment['email']} replies={comment['replys']} index={index} id={id} />)
            }
        </ol>

        <div className="comment-respond">
            <h3 className="comment-reply-title">Leave a Comment</h3>

            <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
                <p className="comment-notes">
                    <span id="email-notes">Your email address will not be published.</span>
                    Required fields are marked
                    <span className="required">*</span>
                </p>
                <p className="comment-form-comment">
                    <label htnlFor="comment">Comment</label>
                    <textarea {...register('text')} cols="45" rows="5" maxLength="65525"
                        required="required" />
                </p>
                <p className="comment-form-author">
                    <label>Name <span className="required">*</span></label>
                    <input value={isLoggedIn ? name : ''} type="text" id="author" name="name"/>
                </p>
                <p className="comment-form-email">
                    <label htnlFor="email">Email <span className="required">*</span></label>
                    <input value={isLoggedIn ? email : ''} type="email" id="email" name="email"/>
                </p>
                {loading ? <SpinnerRoundFilled color='red' enabled={loading} /> : <p className="form-submit">
                    <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                </p>}
                <p style={{color: 'red', textAlign: 'center', textTransform: 'capitalize'}}> {err} </p>
            </form>
        </div>
    </div>
  )
}

function Comments(props) {
    const {profile, name, date, text, email, index, replies, id} = props;
    const {
        register,
        handleSubmit,
    } = useForm();
    const replyIndex = index;

    const [isLoggedIn, setLogin] = useState(false)
    const [replyName, setName] = useState('')
    const [replyEmail, setEmail] = useState('')
    const [replyProfile, setProfile] = useState('')

    useEffect(() => {
        const loginState = localStorage.getItem('loginState')
        setLogin(loginState)
        console.log(loginState)

        if(isLoggedIn) {
            const userData = JSON.parse(localStorage.getItem('userData'))
            setName(`${userData['firstName']} ${userData['lastName']}`)
            setEmail(userData['email'])
            setProfile(userData['profile'])
            console.log('Logged In')
        }
      }, [isLoggedIn])

    const [myIndex, setMyIndex] = useState(null)
    const onReply = (index) => {
        setMyIndex(index === myIndex ? null : index)
    }

    const myReply = (data) => {
        if(isLoggedIn){
            // setLoading(true)

            data.name = replyName;
            data.email = replyEmail;
            data.profile = replyProfile;
            data.date = new Date().toUTCString();
            data.replys = [];
            data.text = `<b>${name}</b> ${data.text}`;
            console.log(data)
            
            axios.patch(`https://africansprings-api.onrender.com/api/post/update/comments/${id}`, {reply: true, message: data, index: myIndex}).then((res) => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
                // setErr('Could not comment. Something went wrong')
                // setLoading(false)
            })
        } else {
            window.alert('Login to your account to be able to comment')
        }
    }

    
    return <li className="comment">
        <aside className="comment-body">
            <div className="comment-meta">
                <div className="comment-author vcard">
                    <img src={profile} className="avatar" alt="image" />
                    <b className="fn">{name}</b>
                    <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                    <a href="#">
                        <span>{date}</span>
                    </a>
                </div>
            </div>

            <div className="comment-content">
                <p>{parse(text)}</p>
            </div>

            <div style={{cursor: 'pointer', marginBottom: '1em'}} className="reply" onClick={() => onReply(index)}>
                <a className="comment-reply-link">Reply</a>
            </div>

            {myIndex === index ? <form onSubmit={handleSubmit(myReply)}>
                <input {...register('text')} classNameName="form-control" placeholder="Reply" required/>
                <div style={{cursor: 'pointer', marginBottom: '1em'}} className="reply">
                <input type="submit" id="submit" className="submit" value="Submit" />
            </div>
            </form>
                    : null} 
        </aside>
        {
            Array.from(replies)?.length === 0 ? null : Array.from(replies).map((reply, index) => <Replies key={index} profile={reply['profile']} name={reply['name']} date={reply['date']} text={reply['text']} email={reply['email']} index={index} replyIndex={replyIndex} id={id} />)
        }
    </li>
}


function Replies(props) {
    const [myIndex, setMyIndex] = useState(null)
    const {profile, name, date, text, email, index, id, replyIndex} = props;

    const {
        register,
        handleSubmit,
    } = useForm();

    const onReply = (index) => {
        setMyIndex(index === myIndex ? null : index)
    }

    const [isLoggedIn, setLogin] = useState(false)
    const [replyName, setName] = useState('')
    const [replyEmail, setEmail] = useState('')
    const [replyProfile, setProfile] = useState('')

    useEffect(() => {
        const loginState = localStorage.getItem('loginState')
        setLogin(loginState)
        console.log(loginState)

        if(isLoggedIn) {
            const userData = JSON.parse(localStorage.getItem('userData'))
            setName(`${userData['firstName']} ${userData['lastName']}`)
            setEmail(userData['email'])
            setProfile(userData['profile'])
            console.log('Logged In')
        }
      }, [isLoggedIn])

    const myReply = (data) => {
        if(isLoggedIn){
            // setLoading(true)

            data.name = replyName;
            data.email = replyEmail;
            data.profile = replyProfile;
            data.date = new Date().toUTCString();
            data.replys = [];
            data.text = `<b>${name}</b> ${data.text}`;
            console.log(data)
            console.log(name)
            
            axios.patch(`https://africansprings-api.onrender.com/api/post/update/comments/${id}`, {reply: true, message: data, index: replyIndex}).then((res) => {
                window.location.reload()
            }).catch((err) => {
                console.log(err)
                // setErr('Could not comment. Something went wrong')
                // setLoading(false)
            })
        } else {
            window.alert('Login to your account to be able to comment')
        }
    }

    return <ol className="children">
    <li className="comment">
        <aside className="comment-body">
            <div className="comment-meta">
                <div className="comment-author vcard">
                    <img src={profile} className="avatar" alt="image" />
                    <b className="fn">{name}</b>
                    <span className="says">says:</span>
                </div>

                <div className="comment-metadata">
                    <a href="#">
                        <span>{date}</span>
                    </a>
                </div>
            </div>

            <div className="comment-content">
                <p>{parse(text)}</p>
            </div>

            <div style={{cursor: 'pointer', marginBottom: '1em'}} className="reply" onClick={() => onReply(index)}>
                <a className="comment-reply-link">Reply</a>
            </div>

            {myIndex === index ? <form onSubmit={handleSubmit(myReply)}>
                <input {...register('text')} classNameName="form-control" placeholder="Reply" required/>
                <div style={{cursor: 'pointer', marginBottom: '1em'}} className="reply">
                <input type="submit" id="submit" className="submit" value="Submit" />
            </div>
            </form>
                    : null} 
        </aside>
    </li>
</ol>
}



