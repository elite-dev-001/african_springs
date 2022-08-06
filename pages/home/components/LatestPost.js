import React from 'react'
// import a from 'next/a'

function LatestPost(props) {
    const { category, postId, thumb, author, date, title } = props
  return (
    <div className='item' style={{width: '226px'}}  >
        <div className='article__entry'>
            <div className='article__image'>
                <a href={`/posts/${postId}?category=${category}`}>
                    <img src={thumb} alt='' className='img-fluid' />
                </a>
            </div>
            <div className='article__content'>
                <ul className='list-inline'>
                    <li className='list-inline-item'>
                        <span className='text-primary'>
                            By {author}
                        </span>
                    </li>
                    <li className='list-inline-item'>
                        <span>
                            {date}
                        </span>
                    </li>
                </ul>
                <h5>
                <a href={`/posts/${postId}?category=${category}`}>
                        {title}
                    </a>
                </h5>
            </div>
        </div>
    </div>
  )
}

export default LatestPost