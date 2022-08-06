import React from 'react'
import Link from 'next/link'

function BreadCrumb(props) {
    const {category} = props
  return (
    <div className="col-md-12">
        <ul className="breadcrumbs bg-light mb-4">
            <li className="breadcrumbs__item">
                <Link href='/' className="breadcrumbs__url"><><i className="fa fa-home"></i> Home</></Link>
            </li>
            <li className="breadcrumbs__item">
                <Link href='/' className="breadcrumbs__url">News</Link>
            </li>
            <li className="breadcrumbs__item breadcrumbs__item--current">
                {category}
            </li>
        </ul>
    </div>
  )
}

export default BreadCrumb