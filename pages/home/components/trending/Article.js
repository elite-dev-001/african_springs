import React from 'react'
// import a from 'next/a'


function Article(props) {
    const { category, postId, thumb, author, date, title } = props
  return (
    <div className='item'>
        <div className='card__post'>
            <div className='card__post__body'>
                <a href={`/posts/${postId}?category=${category}`} >
                    <img src={thumb} alt='' className='img-fluid' />
                </a>
                <div className='card__post__content bg__post-cover'>
                    <div className='card__post__category'>
                        {category}
                    </div>
                    <div className='card__post__title'>
                        <h2>
                            <a href={`/posts/${postId}?category=${category}`} >
                                {title}
                            </a>
                        </h2>
                    </div>
                    <div className='card__post__author-info'>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <span>
                                    {`By ${author}`}
                                </span>
                            </li>
                            <li className='list-inline-item'>
                                <span> {date} </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article

