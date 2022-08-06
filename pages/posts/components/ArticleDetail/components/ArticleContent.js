import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { RWebShare } from 'react-web-share'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import { Helmet } from 'react-helmet'
// import { FacebookIcon, FacebookShareButton } from 'react-share'
// import { SuperSEO } from 'react-super-seo'

function ArticleContent(props) {
    const {link, title, data, news} = props
    const [update, setUpdate] = useState('')
    // const [curr, setNews] = useState(`${news.trim()}`)
    const router = useRouter()
    console.log(router.asPath)
    const host = 'https://willowy-faun-ad3006.netlify.app';
    const url = `${host}${router.asPath}`
    console.log(url)

    useEffect(() => {
        if(news !== undefined){
            setUpdate(news)
        }
    }, [news])
  return (
    <div className="wrap__article-detail-content">
        <div className="total-views">
            <div>
                {/* <SuperSEO title={`Wilson’s son, Uzodinma suggests Nigeria’s dissolution months to 2023 elections`} description={news.slice(0, 40)} /> */}
                <Head>
                    {/* <title> {data['title']} </title> */}
                    <title>{title}</title>
                    <meta name="description" content={news} />

                    {/* <!-- Google / Search Engine Tags --> */}
                    <meta itemProp="name" content={title} />
                    <meta itemProp="description" content={update.slice(0,40)} />
                    <meta itemProp="image" content={data?.thumbnail} />

                    {/* <!-- Facebook Meta Tags --> */}
                    <meta property="og:url" content={router.asPath} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={update.slice(0,40)} />
                    <meta property="og:image" content={data?.thumbnail} />

                    {/* <!-- Twitter Meta Tags --> */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={update.slice(0,40)} />
                    <meta name="twitter:image" content={data?.thumbnail} />

                </Head>
                
            {/* <div> */}
                    <RWebShare
                        data={{
                        // text: "Like humans, flamingos make friends for life",
                        url: router.asPath,
                        title: title,
                        }}
                        onClick={() => console.log("shared successfully!")} >
                        <button>Share 🔗</button>
                    </RWebShare>
                {/* </div> */}
            </div>
            <ul className="list-inline">
                {/* <!-- <span className="share">share on:</span> --> */}
                <li className="list-inline-item">
                    <a className="btn btn-social-o facebook" href="https://www.facebook.com/AfricanSprings-103535282385150" rel='noreferrer' target="_blank">
                        <i className="fa fa-facebook-f"></i>
                        <span>facebook</span>
                    </a>

                </li>
                <li className="list-inline-item">
                    <a className="btn btn-social-o twitter" href="https://twitter.com/AfricanSprings?s=20&t=bsAqPM8aS33s7EV1E8YhEg" rel='noreferrer' target="_blank">
                        <i className="fa fa-twitter"></i>
                        <span>twitter</span>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn btn-social-o whatsapp" href="https://twitter.com/AfricanSprings?s=20&t=bsAqPM8aS33s7EV1E8YhEg">
                        <i className="fa fa-whatsapp"></i>
                        <span>whatsapp</span>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a className="btn btn-social-o telegram" href='https://twitter.com/AfricanSprings?s=20&t=bsAqPM8aS33s7EV1E8YhEg' >
                        <i className="fa fa-telegram"></i>
                        <span>telegram</span>
                    </a>
                </li>


            </ul>
        </div>
         <div>
            {link ? <ReactPlayer style={{marginBottom: '6em'}} width='100%' height='200px' url={link} controls={true} /> : null}
            <a href={link}> {link} </a>
         </div>
        <p className="has-drop-cap-fluid" style={{ whiteSpace: 'pre-wrap' }}> {news} </p>
    </div>
  )
}

export default ArticleContent