import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading'
import BreadCrumb from './components/BreadCrumb'
import Detail from './components/ArticleDetail/Detail'
import Profile from './components/Profile'
import Head from 'next/head'
import { useRouter } from 'next/router'


export default function SinglePosts({post}) {
  const router = useRouter()
  const {category} = router.query

    // console.log(router.asPath)
    const host = 'https://www.africansprings.org';
    const url = `${host}${router.asPath}`
    // console.log(url)
  return (
    <>
      <Head>
        {/* <title> {data['title']} </title> */}
        <title>{post?.title}</title>
        <meta name="description" content={post?.news.slice(0, 40)} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={post?.title} />
        <meta itemProp="description" content={post?.news.slice(0,40)} />
        <meta itemProp="image" content={post?.thumbnail} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.news.slice(0,40)} />
        <meta property="og:image" content={post?.thumbnail} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.news.slice(0,40)} />
        <meta name="twitter:image" content={post?.thumbnail} />

      </Head>
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
    </>
  )
}

export async function getStaticPaths() {
  // const context = useContext()
  // const pid = context.params.pid
  const res = await fetch(`https://vast-ruby-cheetah-cape.cyclic.app/api/post/get/all/news`)
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
  const res = await fetch(`https://vast-ruby-cheetah-cape.cyclic.app/api/post/get/single/post/${params['pid']}`)
  const post = await res.json()
  // console.log('post',post)

  // console.log(articles)

  return {
    props: {post: post[0]}
  }
}