import React from 'react'

function Loading() {
  return (
    <div className="loading-container">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <ul className="list-unstyled">
                {/* <li>
                    <img src="images/loading.png" alt="Alternate Text" height="100" />

                </li> */}
                <li>

                    <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>

                    </div>

                </li>
                <li>
                    <p>Loading</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Loading