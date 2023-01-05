import React, { useEffect, useState } from 'react'
// import a  from 'next/a'
// import logo from '../../images/banner1.jpg'
// import banner6 from '../../images/banner6.jpg'
// import '../../css/styles3875.css'
import axios from 'axios'
import Article from '../components/trending/Article'
import Slider from "react-slick";
import Featured from '../components/Featured'
import LatestPost from '../components/LatestPost'
import CatNews from '../components/CatNews'
import Sports from '../components/Sports'
import Health from '../components/Health'
import CategoryAside from '../components/CategoryAside'
// import Loading from '../../Loading'
// import featured from './featured'

function Popular() {
    // const [loading, setLoading] = useState(false)
    const [trend, setTrend] = useState([])
    const [politics, setPolitics] = useState([])
    const [latestPost, setLatestPost] = useState([])


    const [health, setHealth] = useState([])
    const [travel, setTravel] = useState([])

    useEffect(() => {
        axios.get('https://african-springs-api.vercel.app/api/post/get/all/news?trend=true').then((res) => {
            const allPost = Array.from(res.data['results'])
            setTrend(allPost)
        }).catch((err) => {
            console.log(err)
        })

        axios.get('https://african-springs-api.vercel.app/api/post/get/all/news?limit=10').then((res) => {
            const allPost = Array.from(res.data['results'])
            setLatestPost(allPost)
        }).catch((err) => {
            console.log(err)
        })

        axios.get('https://african-springs-api.vercel.app/api/post/get/all/news?category=politics&limit=10').then((res) => {
            const allPost = Array.from(res.data['results'])
            setPolitics(allPost)
        }).catch((err) => {
            console.log(err)
        })

        
        axios.get('https://african-springs-api.vercel.app/api/post/get/all/news?category=news%20update&limit=5').then((res) => {
            const allPost = Array.from(res.data['results'])
            setHealth(allPost)
        }).catch((err) => {
            console.log(err)
        })

        axios.get('https://african-springs-api.vercel.app/api/post/get/all/news?category=travel&limit=5').then((res) => {
            const allPost = Array.from(res.data['results'])
            setTravel(allPost)
        }).catch((err) => {
            console.log(err)
        })

        
    },[])
    

    const setting = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const setting2 = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
    };

  return (
    <section className='bg-content' >
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='card__post-carousel slick-initialized slick-slider'>
                        <div className='slick-list draggable'>
                            <div className='slick-track'>
                                 <Slider {...setting} >
                                    {
                                        trend.map((post, index) => <Article key={index} category={post['category']} postId={post['_id']} thumb={post['thumbnail']} author={post['author']} date={post['date']}  title={post['title']} />)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <figure className='mt-4 mb-4'>
                        <a href=''>
                            <img src='/images/banner1.jpg' alt='/' className='img-fluid' />
                        </a>
                    </figure>
                    <div className='wrapper__list__article'>
                        <h4 className='border_section'>featured</h4>
                        <Featured />
                    </div>
                    <div className='wrapper__list__article'>
                        <h4 className='border_section'>latest post</h4>
                        <div className='row'>
                            <div className='col-lg-12 pd-0'>
                                <div className='article__entry-carousel-three slick-initialized slick-slider'>
                                    {/* <div className='slick-list draggable'> */}
                                        {/* <div className='slick-track'> */}
                                        <Slider  {...setting2}>
                                                {
                                                    latestPost.map((post, index) => <LatestPost key={index} category={post['category']} postId={post['_id']} thumb={post['thumbnail']} author={post['author']} date={post['date']}  title={post['title'].slice(0, 40)} />)
                                                }
                                            </Slider>
                                        {/* </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper__list__article'>
                        <h4 className='border_section'> Politics </h4>
                        <div className='wrapp__list__article-responsive'>
                            {
                                politics.map((post, index) => <CatNews key={index} category={post['category']} postId={post['_id']} thumb={post['thumbnail']} author={post['author']} date={post['date']} news={post['news']}  title={post['title']} />)
                            }
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <aside className='wrapper__list__article'>
                        <Sports />
                    </aside>
                    <aside className='wrapper__list__article'>
                        <h4 className='border_section'>stay connected</h4>
                        <div className='wrap__social__media'>
                            <a href="https://www.facebook.com/AfricanSprings-103535282385150" rel='noreferrer' target="_blank">
                                <div className="social__media__widget facebook">
                                    <span className="social__media__widget-icon">
                                        <i className="fa fa-facebook"></i>
                                    </span>
                                    <span className="social__media__widget-counter">
                                        19,243 fans
                                    </span>
                                    <span className="social__media__widget-name">
                                        like
                                    </span>
                                </div>
                            </a>
                            <a href="https://twitter.com/AfricanSprings?s=20&t=bsAqPM8aS33s7EV1E8YhEg" rel='noreferrer' target="_blank">
                                <div className="social__media__widget twitter">
                                    <span className="social__media__widget-icon">
                                        <i className="fa fa-twitter"></i>
                                    </span>
                                    <span className="social__media__widget-counter">
                                        2.076 followers
                                    </span>
                                    <span className="social__media__widget-name">
                                        follow
                                    </span>
                                </div>
                            </a>
                            <a href="https://www.youtube.com" rel='noreferrer' target="_blank">
                                <div className="social__media__widget youtube">
                                    <span className="social__media__widget-icon">
                                        <i className="fa fa-youtube"></i>
                                    </span>
                                    <span className="social__media__widget-counter">
                                        15,200 followers
                                    </span>
                                    <span className="social__media__widget-name">
                                        subscribe
                                    </span>
                                </div>
                            </a>
                        </div>
                    </aside>
                    <aside className='wrapper__list__article'>
                        <h4 className='border_section'>newsletter</h4>
                        <div className='widget__form-subscribe bg__card-shadow'>
                            <h6>
                                The most important world news and events of the day.
                            </h6>
                            <p><small>Get AfricanSprings daily newsletter on your inbox</small></p>
                            <div className='input-group'>
                                <input type='text' className='form-control' placeholder='Youe email address'/>
                                <div className='input-group-append' >
                                    <button className='btn btn-primary' type='button' >sign up</button>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className='sidebar-section'>
                        <aside className='wrapper__list__article'>
                            <h4>news update</h4>
                            {
                                health.map((post, index) => <Health key={index} category={post['category']} postId={post['_id']} author={post['author']} date={post['date']}  title={post['title'].slice(0, 65)} />)
                            }
                        </aside>
                        <aside className='wrapper__list__article'>
                            <h4>travel</h4>
                            {
                                travel.map((post, index) => <Health key={index} category={post['category']} postId={post['_id']} author={post['author']} date={post['date']}  title={post['title'].slice(0, 65)} />)
                            }
                        </aside>
                        <CategoryAside />
                        <aside className='wrapper__list__article'>
                            <h4 className='border_section'>Advertise</h4>
                            <figure className='mt-4 mb-4'>
                                <a href=''>
                                    <img src='/images/banner6.jpg' alt='' />
                                </a>
                            </figure>
                        </aside>
                    </div>
                </div>
                {/* <div className='mx-auto'></div> */}
                <div className='clearfix'></div>
            </div>
        </div>
    </section>
  )
}

export default Popular

