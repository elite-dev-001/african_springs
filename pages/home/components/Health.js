import React from 'react'

function Health(props) {

  const { category, postId, author, date, title } = props

  return (
    <div className="card__post__content p-3 card__post__body-border-all w-100">
        <div className="card__post__category text-capitalize">
            {category}
        </div>
        <div className="card__post__author-info mb-2">
            <ul className="list-inline mb-0">
                <li className="list-inline-item">
                    <span className="text-primary">
                        by {author}
                    </span>
                </li>
                <li className="list-inline-item">
                    <span className="text-dark text-capitalize">
                        {date}
                    </span>
                </li>

            </ul>
        </div>
        <div className="card__post__title">
            <h5>
                <a href={`/posts/${postId}?category=${category}`}>
                    {title}
                </a>
            </h5>
            
        </div>
    </div>
  )
}

export default Health