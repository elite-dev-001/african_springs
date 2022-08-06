import React from 'react'
import '../../../../css/styles3875.css'

function Search(props) {
    const {closeNav} = props
  return (
    <div className='modal-header'>
        <div className='widget__form-search-bar'>
            <div className='row no-gutters'>
                <div className='col'>
                    <input className='form-control border-secondary border-right-0 rounded-0' placeholder='Search' />
                </div>
                <div className='col-auto'>
                    <button className='btn btn-outline-secondary border-left-0 rounded-0 rounded-right'>
                        <i className='fa fa-search'></i>
                    </button>
                </div>
            </div>
        </div>
        <button onClick={() => closeNav()} type='button' className='close' data-dismiss='modal' aria-label='Close' >
            <span style={{color: 'black'}} aria-hidden='true'>&times;</span>
        </button>
    </div>
  )
}

export default Search