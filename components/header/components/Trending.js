import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link  from 'next/link'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Article from './trending/Article'

function Trending() {
    
    const [trending, setTrending] = useState([])

    useEffect(() => {
        axios.get('https://africanspringsapi.herokuapp.com/api/post/get/all/news?trend=true').then((res) => {
            const allPost = Array.from(res.data['results'])
            setTrending(allPost)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const setting = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
    };


  return (
    <div className='bg-white'>
        <div className='trending-news pt-4 border-training'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='trending-news-inner'>
                            <div className='title'>
                                <i className='fa fa-bolt'></i>
                                <strong>trending news</strong>
                            </div>
                            <div className='trending-news-slider slick-initialized slick-slider'>
                                <div className='slick-list draggable'>
                                    <div className='slick-track'>
                                    <Slider {...setting} >
                                    {
                                    trending?.map((post, index) => <div className='slick-slide slick-cloned item-single' key={index}>
                                        <a href={`/posts/${post['_id']}?category=${post['category']}`}> {post['title']} </a>
                                    </div>)
                                    }
                                    </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Trending
