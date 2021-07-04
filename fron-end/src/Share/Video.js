import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import ReactPlayer from 'react-player/youtube'

export default class Video extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
             {/* <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://drive.google.com/file/d/13X5DY1mx9J-ZMlzMYAphbf_85SVg_OIh/view'
          width='100%'
          height='100%'
        />
      </div> */}
      <video autoplay="autoplay" controls="controls"  width='100%'
          height='100%'>
	<source src="imgPNV/Heart2Heart Final Video.mpeg" type="video/mpeg" />
	
	Your browser does not support the video tag.</video>
            </div>
        )
    }
}
