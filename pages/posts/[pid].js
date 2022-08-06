import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading'
import BreadCrumb from './components/BreadCrumb'
import Detail from './components/ArticleDetail/Detail'
import Profile from './components/Profile'
import { useRouter } from 'next/router'


export default function SinglePosts({post}) {
  const router = useRouter()
  const {category} = router.query
  // const [loading, setLoading] = useState(false)
  // const [post, setPost] = useState({})

  // useEffect(() => {
  //   setLoading(true)
  //   axios.get(`https://africanspringsapi.herokuapp.com/api/post/get/single/post/${pid}`).then((res) => {
  //     console.log(res)
  //     setPost(res.data[0])

  //     setLoading(false)
  //   }).catch((err) => {
  //     console.log(err)
  //     setLoading(false)
  //   })
  // }, [pid])
  return (
    <section className='pb-80'>
      <div className='container'>
        <div className='row'>
          <BreadCrumb category={category} />
          <div className='col-md-8'>
            <Detail data={post} />
            <Profile img={post['posterImage']} author={post['author']} />
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticPaths() {
  // const context = useContext()
  // const pid = context.params.pid
  const res = await fetch(`https://africanspringsapi.herokuapp.com/api/post/get/all/news`)
  const data = await res.json()
  // const data = datas

  // console.log(data)


  const paths = data['results'].map(post => {
    return {
      params: {pid: post._id.toString()}
    }
  })

  // const params = [{params: {pid: '62a4c841ee2730ebc3fd0e7c'}}]

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // console.log('params', params)
  const res = await fetch(`https://africanspringsapi.herokuapp.com/api/post/get/single/post/${params['pid']}`)
  const post = await res.json()
  // console.log('post',post)

  // console.log(articles)

  return {
    props: {post: post[0]}
  }
}