import React from 'react'

function ArticleInfo(props) {
    const {thumb, author, date, category} = props
  return (
    <div className="wrap__article-detail-info">
        <ul className="list-inline">
            <li className="list-inline-item">
                <figure className="image-profile">
                    <img src={thumb} alt="" style={{height: '30px', width: '30px'}} />
                </figure>
            </li>
            <li className="list-inline-item">
                <span>
                    by <a href=''>{author}</a>
                </span>
            </li>
            <li className="list-inline-item">
                <span className="text-dark text-capitalize ml-1">
                    {date} 
                </span>
            </li>
            <li className="list-inline-item">
                <span className="text-dark text-capitalize" style={{paddingLeft: '5px'}}>
                    in <a href=''>{category }</a>
                </span>
                


            </li>
        </ul>
    </div>
  )
}

export default ArticleInfo