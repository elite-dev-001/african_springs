import React from 'react'

function ArticleImage(props) {
  return (
    <div className='card__post-carousel'>
        <div className="wrap__article-detail-image mt-4 card__post">
            <div className='card__post__body'>
                <figure>
                    <img src={props.img} alt="" className="img-fluid"/>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default ArticleImage