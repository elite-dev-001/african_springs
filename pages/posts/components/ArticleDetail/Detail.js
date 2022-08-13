import React from 'react'
import ArticleContent from './components/ArticleContent'
import ArticleImage from './components/ArticleImage'
import ArticleInfo from './components/ArticleInfo'
import Title from './components/Title'



function Detail(props) {
    const {data} = props
  return (
    <div className='wrap__article-detail'>
        <Title title = {data?.title} />
        <hr />
        <ArticleInfo thumb={data?.posterImage} author={data?.author} date={data?.date} category={data?.category}  />
        <ArticleImage img={data?.thumbnail} />
        <ArticleContent news={data?.news} data={data} videoLink={data?.videoLink} title={data?.title} link={data?.link} img={data?.thumbnail2} />
    </div>
  )
}

export default Detail