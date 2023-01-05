import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


function ColMd8() {
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);

  useEffect(() => {
    axios.get('https://african-springs-api.vercel.app/api/post/get/all/news?category=general').then((res) => {
      console.log(res.data['results'])
      const general = Array.from(res.data['results']);
      // const general = results.filter((result) => result['category'].toLowerCase() === '')
      // const half = Math.floor(general.length / 2)
      setCol1(general)
      // setCol2(general.filter((res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className='col-md-8'>
      <aside className='wrapper__list__article'>
        <h4 className='border_section'>General News</h4>
        <div className='row'>
          <div className='col-md-6'>
            {
              col1.map((gen, index) => <ArticleEntry key={index} img={gen['thumbnail']} category={gen['category']} author={gen['author']} date={gen['date']} title={gen['title']} news={gen['news']} id={gen['_id']} />)
            }
          </div>
          <div className='col-md-6'>
            {
              col2.map((gen, index) => <ArticleEntry key={index} img={gen['thumbnail']} category={gen['category']} author={gen['author']} date={gen['date']} title={gen['title']} news={gen['news']} id={gen['_id']} />)
            }
          </div>
        </div>
      </aside>
    </div>
  )
}

export default ColMd8

function ArticleEntry(props) {
  const {img, category, author, date, title, news, id} = props
  return (
    <div className="article__entry">
      <div className="article__image">
          <a href={`/posts/${id}?category=${category} `}>
              <img src={img} alt="" className="img-fluid" />
          </a>
      </div>
      <div className="article__content">
          <div className="article__category">
              {category}
          </div>
          <ul className="list-inline">
              <li className="list-inline-item">
                  <span className="text-primary">
                      {author}
                  </span>
              </li>
              <li className="list-inline-item">
                  <span className="text-dark text-capitalize">
                      {date}
                  </span>
              </li>

          </ul>
          <h5>
              <a href={`/posts/${id}?category=${category} `}>
                  {title}
              </a>
          </h5>
          <p>
              {news.slice(0, 100)}
          </p>
          <a href={`/posts/${id}?category=${category} `} className="btn btn-outline-primary mb-4 text-capitalize"> read more</a>
      </div>
  </div>
  );
}