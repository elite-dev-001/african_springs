import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import a from 'next/a'




function Sports() {

    const [sports, setSports] = useState([])

    useEffect(() => {
        axios.get('https://africansprings-api.onrender.com/api/post/get/all/news?category=sport&limit=4').then((res) => {
            const allPost = Array.from(res.data['results']).reverse()
            setSports(allPost)
        }).catch((err) => {
            console.log(err)
        })
    })

  return (
    sports.length === 0 ? <p>Loading...</p> : <div className='wrapper__list__article-small'>
        <div className='article__entry'>
            <div className='article__image'>
                <a href={`/posts/${sports[0]['_id']}?category=${sports[0]['category']}`}>
                    <img alt='' src={sports[0]['thumbnail']} className='img-fluid' />
                </a>
            </div>
            <div className='article__content'>
                <div className='article__category'> {sports[0]['category']} </div>
                <ul className='list-inline'>
                    <li className='list-inline-item'>
                        <span className='text-primary'> {`By ${sports[0]['author']}`} </span>
                    </li>
                    <li className='list-inline-item'>
                        <span className='text-dark text-capitalize'>
                            {sports[0]['date']}
                        </span>
                    </li>
                </ul>
                <h5>
                <a href={`/posts/${sports[0]['_id']}?category=${sports[0]['category']}`}> {sports[0]['title']} </a>
                </h5>
                <p> {sports[0]['news'].slice(0, 132)} </p>
                <a className='btn btn-outline-primary mb-4 text-capitalize' href={`/posts/${sports[0]['_id']}?category=${sports[0]['category']}`}> read more </a>
            </div>
        </div>
        <div className='mb-3'>
            <div className='card__post card__post-list'>
                <div className='image-sm'>
                <a href={`/posts/${sports[1]['_id']}?category=${sports[1]['category']}`}>
                        <img src={sports[1]['thumbnail']} alt='' className='img-fluid'  />
                    </a>
                </div>
                <div className='card__post__body'>
                    <div className='card__post__content'>
                        <div className='card__post__author-info mb-2'>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>
                                    <span className='text-primary'> By {sports[1]['author']} </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span className='text-dark-primary'> {sports[1]['date']} </span>
                                </li>
                            </ul>
                        </div>
                        <div className='card__post__title'>
                            <h6>
                            <a href={`/posts/${sports[1]['_id']}?category=${sports[1]['category']}`}>
                                    {sports[1]['title'].slice(0, 42)}
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-3'>
            <div className='card__post card__post-list'>
                <div className='image-sm'>
                <a href={`/posts/${sports[2]['_id']}?category=${sports[2]['category']}`}>
                        <img src={sports[2]['thumbnail']} alt='' className='img-fluid'  />
                    </a>
                </div>
                <div className='card__post__body'>
                    <div className='card__post__content'>
                        <div className='card__post__author-info mb-2'>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>
                                    <span className='text-primary'> By {sports[2]['author']} </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span className='text-dark-primary'> {sports[2]['date']} </span>
                                </li>
                            </ul>
                        </div>
                        <div className='card__post__title'>
                            <h6>
                            <a href={`/posts/${sports[2]['_id']}?category=${sports[2]['category']}`}>
                                    {sports[2]['title'].slice(0, 42)}
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-3'>
            <div className='card__post card__post-list'>
                <div className='image-sm'>
                <a href={`/posts/${sports[3]['_id']}?category=${sports[3]['category']}`}>
                        <img src={sports[3]['thumbnail']} alt='' className='img-fluid'  />
                    </a>
                </div>
                <div className='card__post__body'>
                    <div className='card__post__content'>
                        <div className='card__post__author-info mb-2'>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>
                                    <span className='text-primary'> By {sports[3]['author']} </span>
                                </li>
                                <li className='list-inline-item'>
                                    <span className='text-dark-primary'> {sports[3]['date']} </span>
                                </li>
                            </ul>
                        </div>
                        <div className='card__post__title'>
                            <h6>
                            <a href={`/posts/${sports[3]['_id']}?category=${sports[3]['category']}`}>
                                    {sports[3]['title'].slice(0, 42)}
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sports