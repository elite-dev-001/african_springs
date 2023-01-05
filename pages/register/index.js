import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SpinnerRoundFilled } from 'spinners-react';


function Register() {
    // const navigate = useNavigate()
    const altPic = "https://res.cloudinary.com/dhejdjq9l/image/upload/v1656278153/Group_2_1_spt4rf.png"
    const { register, handleSubmit } = useForm();
    const [countries, setCountries] = useState([])
    const [secureUrl, setSecureUrl] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {
        setLoading(true)
        secureUrl === '' ? data.profile = altPic : data.profile = secureUrl
        if(data['password'] === data['confirmPassword']){
            setError('')
            console.log(data)
            axios.post('https://african-springs-api.vercel.app/api/user/register', data).then((res) => {
                console.log(res.data)
                if(res.data['status'] === 'error'){
                    setError(res.data['error'])
                    setLoading(false)
                } else {
                    setLoading(false)
                    window.location.href = '/login'
                    // navigate('/login')
                }
            }).catch((err) => {
                console.log(err)
                setLoading(false)
                setError('Something went wrong, could not register')
            })
        } else {
            setError('Password does not match')
        }
        
    }

    const uploadImage = (file) => {
        setDisabled(true)
        setLoading(true)
        const data = new FormData();
        data.append('file', file[0])
        data.append('upload_preset', 't04ny6oh')
        axios.post('https://api.cloudinary.com/v1_1/dhejdjq9l/image/upload', data).then((res) => {
            console.log(res.data['secure_url'])
            setSecureUrl(res.data['secure_url'])
            setDisabled(false)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
            setDisabled(false)
        })
    }

    useEffect(() => {
        axios.get('https://countriesnow.space/api/v0.1/countries/capital').then((res) => {
            console.log(res.data['data'][0])
            const country = res.data['data']
            setCountries(country)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <section className="wrap__section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <!-- register -->
                    <!-- Form Register --> */}

                    <div className="card mx-auto" style={{maxWidth:'520px'}}>
                        <article className="card-body">
                            <header className="mb-4">
                                <h4 className="card-title">Sign up</h4>
                            </header>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                    <div className="col form-group">
                                        <label>First name</label>
                                        <input {...register('firstName')} required type="text" className="form-control" placeholder="" />
                                    </div> 
                                    <div className="col form-group">
                                        <label>Last name</label>
                                        <input {...register('lastName')} required type="text" className="form-control" placeholder="" />
                                    </div> 
                                </div> 
                                <div className="form-group">
                                    <label>Email</label>
                                    <input {...register('email')} required type="email" className="form-control" placeholder="" />
                                    <small className="form-text text-muted">We will never share your email with anyone
                                        else.</small>
                                </div> 
                                <div className="form-group">
                                    <label>Profile Picture</label>
                                    <input required onChange={(e) => uploadImage(e.target.files)} type="file" className="form-control" placeholder="" />
                                    <small className="form-text text-muted">Choose your profile in either JPEG, JPG or PNG format</small>
                                </div> 
                                <div className="form-group">
                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input {...register('gender')} required className="custom-control-input" type="radio" name="gender"
                                            value="male" />
                                        <span className="custom-control-label"> Male </span>
                                    </label>
                                    <label className="custom-control custom-radio custom-control-inline">
                                        <input {...register('gender')} required className="custom-control-input" type="radio" name="gender" value="female" />
                                        <span className="custom-control-label"> Female </span>
                                    </label>
                                </div> 
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>City</label>
                                        <input {...register('city')} required type="text" className="form-control" />
                                    </div> 
                                    <div className="form-group col-md-6">
                                        <label>Country</label>
                                        <select {...register('country')} required id="inputState" className="form-control">
                                            <option> Choose...</option>
                                            {
                                                countries.map((country, index) => <option key={index}> {country['name']} </option>)
                                            }
                                        </select>
                                    </div> 
                                </div> 
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Create password</label>
                                        <input {...register('password')} required className="form-control" type="password" />
                                    </div> 
                                    <div className="form-group col-md-6">
                                        <label>Repeat password</label>
                                        <input {...register('confirmPassword')} required className="form-control" type="password" />
                                    </div> 
                                </div>
                                <div className="form-group">
                                    <button disabled={disabled} type="submit" className="btn btn-primary btn-block"> {
                                        loading ? <SpinnerRoundFilled color='#ffffff' enabled={loading} /> : 'Register'
                                    } </button>
                                    <p style={{color: 'red', textAlign: 'center', paddingTop: '.5em'}}> {error} </p>
                                </div> 
                                <div className="form-group">
                                    <label className="custom-control custom-checkbox"> <input type="checkbox" required
                                            className="custom-control-input"  />
                                        <span className="custom-control-label"> I agree with <Link href="/terms">terms and
                                                contitions</Link> </span>
                                    </label>
                                </div> 
                            </form>
                        </article>
                    </div>
                    {/* <!-- end register --> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
