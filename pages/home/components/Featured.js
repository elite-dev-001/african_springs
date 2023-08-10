import React, { useEffect, useState } from "react";
// import a from 'next/a'
import axios from "axios";

function Featured() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://africansprings-api.onrender.com/api/post/get/all/news?limit=10"
      )
      .then((res) => {
        // console.log(res.data['results'])
        const allPost = Array.from(res.data["results"]).reverse();
        setFeatured(allPost);
        // console.log(featured[0]['thumbnail'])
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return featured.length !== 0 ? (
    <div className="row">
      <div className="col-lg-6 pd-0">
        <div className="article__entry">
          <div className="article__image">
            <a
              href={`/posts/${featured[0]["_id"]}?category=${featured[0]["category"]}`}
            >
              <img
                alt=""
                src={featured[0]["thumbnail"]}
                className="img-fluid"
              />
            </a>
          </div>
          <div className="article__content">
            <div className="article__category"> {featured[0]["category"]} </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-primary">
                  {" "}
                  {`By ${featured[0]["author"]}`}{" "}
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-dark text-capitalize">
                  {featured[0]["date"]}
                </span>
              </li>
            </ul>
            <h5>
              <a
                href={`/posts/${featured[0]["_id"]}?category=${featured[0]["category"]}`}
              >
                {" "}
                {featured[0]["title"].slice(0, 40)}{" "}
              </a>
            </h5>
            <p> {featured[0]["news"].slice(0, 132)} </p>
            <a
              className="btn btn-outline-primary mb-4 text-capitalize"
              to={`/article/${featured[0]["category"]}/${featured[0]["_id"]}`}
            >
              {" "}
              read more{" "}
            </a>
          </div>
        </div>
        <div className="mb-3">
          <div className="card__post card__post-list">
            <div className="image-sm">
              <a
                href={`/posts/${featured[1]["_id"]}?category=${featured[1]["category"]}`}
              >
                <img
                  src={featured[1]["thumbnail"]}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="card__post__body">
              <div className="card__post__content">
                <div className="card__post__author-info mb-2">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span className="text-primary">
                        {" "}
                        By {featured[1]["author"]}{" "}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark-primary">
                        {" "}
                        {featured[1]["date"]}{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card__post__title">
                  <h6>
                    <a
                      href={`/posts/${featured[1]["_id"]}?category=${featured[1]["category"]}`}
                    >
                      {featured[1]["title"]}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="card__post card__post-list">
            <div className="image-sm">
              <a
                href={`/posts/${featured[2]["_id"]}?category=${featured[2]["category"]}`}
              >
                <img
                  src={featured[2]["thumbnail"]}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="card__post__body">
              <div className="card__post__content">
                <div className="card__post__author-info mb-2">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span className="text-primary">
                        {" "}
                        By {featured[2]["author"]}{" "}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark-primary">
                        {" "}
                        {featured[2]["date"]}{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card__post__title">
                  <h6>
                    <a
                      href={`/posts/${featured[2]["_id"]}?category=${featured[2]["category"]}`}
                    >
                      {featured[2]["title"]}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 pd-0">
        <div className="article__entry">
          <div className="article__image">
            <a
              href={`/posts/${featured[3]["_id"]}?category=${featured[3]["category"]}`}
            >
              <img
                alt=""
                src={featured[3]["thumbnail"]}
                className="img-fluid"
              />
            </a>
          </div>
          <div className="article__content">
            <div className="article__category"> {featured[3]["category"]} </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-primary">
                  {" "}
                  {`By ${featured[3]["author"]}`}{" "}
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-dark text-capitalize">
                  {featured[3]["date"]}
                </span>
              </li>
            </ul>
            <h5>
              <a
                href={`/posts/${featured[3]["_id"]}?category=${featured[3]["category"]}`}
              >
                {" "}
                {featured[3]["title"].slice(0, 40)}{" "}
              </a>
            </h5>
            <p> {featured[3]["news"].slice(0, 132)} </p>
            <a
              className="btn btn-outline-primary mb-4 text-capitalize"
              href={`/posts/${featured[3]["_id"]}?category=${featured[3]["category"]}`}
            >
              {" "}
              read more{" "}
            </a>
          </div>
        </div>
        <div className="mb-3">
          <div className="card__post card__post-list">
            <div className="image-sm">
              <a
                href={`/posts/${featured[4]["_id"]}?category=${featured[4]["category"]}`}
              >
                <img
                  src={featured[4]["thumbnail"]}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="card__post__body">
              <div className="card__post__content">
                <div className="card__post__author-info mb-2">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span className="text-primary">
                        {" "}
                        By {featured[4]["author"]}{" "}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark-primary">
                        {" "}
                        {featured[4]["date"]}{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card__post__title">
                  <h6>
                    <a
                      href={`/posts/${featured[4]["_id"]}?category=${featured[4]["category"]}`}
                    >
                      {featured[4]["title"]}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="card__post card__post-list">
            <div className="image-sm">
              <a
                href={`/posts/${featured[5]["_id"]}?category=${featured[5]["category"]}`}
              >
                <img
                  src={featured[5]["thumbnail"]}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="card__post__body">
              <div className="card__post__content">
                <div className="card__post__author-info mb-2">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <span className="text-primary">
                        {" "}
                        By {featured[5]["author"]}{" "}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark-primary">
                        {" "}
                        {featured[5]["date"]}{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card__post__title">
                  <h6>
                    <a
                      href={`/posts/${featured[5]["_id"]}?category=${featured[5]["category"]}`}
                    >
                      {featured[5]["title"]}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div> Loading...</div>
  );
}

export default Featured;
