import React, { useEffect, useState } from 'react'
import '../../../css/styles3875.css'
import ModalBody from './components/ModalBody'
import Search from './components/Search'

function Sidebar(props) {
  // const { show, display} = props

  const [shows, setShows] = useState(props.show)
  const [displays, setDisplay] = useState(props.display)

  useEffect(() => {
    setShows(props.show)
    setDisplay(props.display)
    console.log('testing')
  }, [props.show, props.display])

  const closeNav = () => {
      setShows('')
      setDisplay('none')
      window.localStorage.setItem('display', 'none')
      window.localStorage.setItem('show', '')
  }

  return (
    <div className={`modal fixed-left fade ${shows} `} id='modal_aside_right' style={{display: `${displays}`}} tabIndex='-1' aria-modal="true" role='dialog' >
        <div className='modal-dialog modal-dialog-aside' role='document' >
            <div className='modal-content'>
                <Search closeNav= { closeNav } />
                <ModalBody />
            </div>
        </div>
    </div>
  )
}

export default Sidebar