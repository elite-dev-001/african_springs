import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios'
import LatestPost from '../../home/components/LatestPost'


function RelatedPost(props) {
    const {category} = props;
    // console.log(category.toLowerCase())

    const [latestPost, setLatestPost] = useState([])
    // const [cat, setCat] = useState(category.toLowerCase())

    useEffect(() => {
        // setCat(category.toLowerCase())
        axios.get(`https://africansprings-api.onrender.com/api/post/get/all/news?category=${category}&limit=10`).then((res) => {
            const allPost = Array.from(res.data['results'])
            setLatestPost(allPost)
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
    <div className="related-article">
        <h4>
            you may also like
        </h4>

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
  )
}

export default RelatedPost