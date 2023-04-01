import React from 'react'
import MainLayout from '../layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import audio from '../spencer.mp3'
import '../script.js'

function PodcastPage() {
  return (
    <MainLayout>
        <span>
          Check out my amazing podcasts  
          <a className='link' href="https://baconsale.com/" alt ="podcast website"> here!</a>
        </span>
        <button id="play-audio">Play Audio</button>
        <audio id="audio-player" src={audio}></audio>


    </MainLayout>

  )
}

export default PodcastPage