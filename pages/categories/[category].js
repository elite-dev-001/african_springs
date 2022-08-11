import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



function Category() {
    const router = useRouter()
  const [categories, setCategories] = useState([])
  const {category} = router.query

  console.log(category)

  useEffect(() => {
    // console.log(category.replace(/\s+/g, ''))
    if(category !== undefined) {
        const x = category.replace(/\s+/g, '');
    console.log(category)
    axios.get(`https://africanspringsapi.herokuapp.com/api/post/get/all/news?category=${category}&limit=10`).then((res) => {
      const data = Array.from(res.data['results'])

      setCategories(data.filter((cat) => cat['category'].replace(/\s+/g, '').toLowerCase() === category.replace(/\s+/g, '').toLowerCase()))
    }).catch((err) => {
      console.log(err)
    })
    }
  }, [category])
  return (
    <section className='wrap__section bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='container'>
              <div className='title-head'>
                <div className='row justify-content-center'>
                  <div className='col-md-6 col-sm-12 text-center'>
                    <h3>
                      {category}
                    </h3>
                  </div>
                </div>
              </div>
              <div className='row'>
                {
                  categories.map((post, index) => <ColLg4 key={index} category={post['category']} postId={post['_id']} img={post['thumbnail']} title={post['title']} author={post['author']} date={post['date']} />)
                }
                <div className='clearfix'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ColLg4(props) {
  const {category, title, author, date, img, postId} = props
  return (
    <div className="col-lg-4">
      
      <div className="article__entry-new">
          <div className="article__category">
              {category}
          </div>
          <div className="article__image articel__image__transition">
              <Link href={`/posts/${postId}?category=${category}`}>
              <div className='card__post-carousels'>
              <div className="card__posts">
                  <div className='card__post__bodys'>
                      <figure>
                          <img src={img} alt="" className="img-fluid"/>
                      </figure>
                  </div>
              </div>
    </div>
              </Link>
          </div>
          <div className="articel__content">

              <div className="article__post__title">
                  <h5><Link href={`/posts/${postId}?category=${category}`}>
                          {title}
                      </Link>
                  </h5>
                  <ul className="list-inline article__post__author">
                      <li className="list-inline-item">
                          <span> {author} </span>
                      </li>
                      <li className="list-inline-item">
                          <span> {date} </span>
                      </li>
                  </ul>

              </div>
          </div>

      </div>
  </div>
  )
}

export default Category

// export async function getStaticPaths() {
//     const res = await fetch('')
// }