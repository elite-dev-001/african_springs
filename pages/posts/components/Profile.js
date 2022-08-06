import React from 'react'

function Profile(props) {
    const { img, author} = props
  return (
    <div className="wrap__profile">
        <div className="wrap__profile-author">
            <figure>
                <img src={img} alt="" style={{width: '100px', height: '100px', borderRadius: '50px'}} className='img-fluid' />
            </figure>
            <div className="wrap__profile-author-detail" style={{marginLeft: '2em'}}>
                <div className="wrap__profile-author-detail-name">author</div>
                <h4> {author} </h4>
                <p>Organized Niche from the heart of africa, with an extraordinary stories across the world, with the heart of humanity, for enlightenment, entertainment and information.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o facebook ">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o twitter ">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o instagram ">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o telegram ">
                            <i className="fa fa-telegram"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o linkedin ">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile