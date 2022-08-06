import React from 'react'
import GeneralNews from './components/GeneralNews'
import Link from 'next/link'

function General() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <!-- Breadcrumb --> */}
                    <ul className="breadcrumbs bg-light mb-4">
                        <li className="breadcrumbs__item">
                            <Link href="/" className="breadcrumbs__url"><><i className="fa fa-home"></i> Home</></Link>
                        </li>
                        <li className="breadcrumbs__item">
                            <Link href="/" className="breadcrumbs__url">News</Link>
                        </li>
                        <li className="breadcrumbs__item breadcrumbs__item--current">
                            General
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <GeneralNews />
    </section>
  )
}

export default General 