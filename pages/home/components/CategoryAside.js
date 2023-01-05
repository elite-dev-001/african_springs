import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAsync } from 'react-use'
// import a from 'next/a'


function CategoryAside() {
  const [categories, setCategories] = useState([])


  const [sports, setSports] = useState([])
  const [health, setHealth] = useState([])
  const [lifeStyle, setLifeStyle] = useState([])
  const [travel, setTravel] = useState([])
  const [business, setBusiness] = useState([])
  const [food, setFood] = useState([])
  const [entertainment, setEntertainment] = useState([])
  const [article, setArticle] = useState([])
  const [politic, setPolitic] = useState([])
  const [living, setLiving] = useState([])
  const [newsUpdate, setNewsUpdate] = useState([])

    const myCategories = [
      {category:'sport', function: setSports},
      {category:'health', function: setHealth},
      {category:'lifeStyle', function: setLifeStyle},
      {category:'business', function: setBusiness},
      {category:'living', function: setLiving},
      {category:'entertainment', function: setEntertainment},
      {category:'politics', function: setPolitic},
      {category:'article', function: setArticle},
      {category:'travel', function: setTravel,},
      {category:'food', function: setFood},
      {category:'news Update', function: setNewsUpdate},
    ]

    useAsync(async() => {
      myCategories.forEach((data) => {
        axios.get(`https://african-springs-api.vercel.app/api/post/get/all/news?category=${data.category}`).then((res) => {
            const allPost = Array.from(res.data['results'])
            data.function(allPost)
        }).catch((err) => {
            console.log(err)
        })
    },)
    })


  useEffect(() => {
    setCategories([{name: "sport", category: sports}, {name: "health", category: health}, {name: "lifestyle", category: lifeStyle}, {name: "business", category: business}, {name: "healthy living", category: living}, {name: "entertainment", category: entertainment}, {name: "politics", category: politic}, {name: "article", category: article}, {name: "travel", category: travel}, {name: "food", category: food}, {name: "news update", category: newsUpdate}])

    
}, [sports, health, lifeStyle, business, living, entertainment, politic, article, travel, food, newsUpdate])


  return (
    <aside className='wrapper__list__article'>
        <h4 className='border_section'>category</h4>
        <div className='widget widget__category'>
            <ul className='list-unstyled'>
                {
                    categories.map((obj, index) => <li key={index}>
                        <a href={`/categories/${obj.name}`}>
                            {obj.name}
                            <span className='badge' > {obj.category.length} </span>
                        </a>
                    </li>)
                }
            </ul>
        </div>
    </aside>
  )
}

export default CategoryAside