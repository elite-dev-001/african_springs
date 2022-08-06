import React from 'react'

function Title(props) {
  return (
    <div className="wrap__article-detail-title">
        <h1>
            {props.title}
        </h1>
    </div>
  )
}

export default Title