import React from 'react'
// import a from 'next/a'

function CatNews(props) {
    const { category, postId, thumb, author, date, title, news } = props
  return (
    <div className="card__post card__post-list card__post__transition mt-30">
        <div className="row ">
            <div className="col-md-5">
                <div className="card__post__transition">
                <a href={`/posts/${postId}?category=${category}`}>
                        <img src={thumb} className="img-fluid w-100" alt="" />
                    </a>
                </div>
            </div>
            <div className="col-md-7 my-auto pl-0">
                <div className="card__post__body ">
                    <div className="card__post__content  ">
                        <div className="card__post__category ">
                            {category}
                        </div>
                        <div className="card__post__author-info mb-2">
                            <ul className="list-inline">
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
                            <p className="d-none d-lg-block d-xl-block mb-0">
                                {news}
                            </p>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CatNews