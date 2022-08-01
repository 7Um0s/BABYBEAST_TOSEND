import React, {useState, useEffect} from 'react'
import FirstAvatar from '../assets/avatars2/Barley Bae.png';
import SecondAvatar from '../assets/avatars2/Brad BB.png';
import ThirdAvatar from '../assets/avatars2/BabySitters - Hunnyxxboo.png';
import FourthAvatar from '../assets/avatars2/BabySitters - Onyx.png';
import FifthAvatar from '../assets/avatars2/Exasperated Bruce.png';

import './Avatars.css';

const Avatars = () => {
  const [webPixels, setPixels] = useState(1690);

  const [lscrolled, setScrolled] = useState(0);
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
    if(scrolled > webPixels){
      setScrolled(2100 - scrolled)
    }
    else{
      setScrolled(0)
    }
  });

  const showPixels = () => {
    if(window.innerWidth < 1000){
      setPixels(1140);
    }
    else if(window.innerWidth === 1024){
      setPixels(1281)
    }
    else if(window.innerHeight === 2400){
      setPixels(3000)
    }
    else{
      setPixels(1690)
    }
  }

  useEffect(() => {
    showPixels();
  }, [])

  window.addEventListener('resize', showPixels);
  return (
    <>
      <div className='avatar-section'>
        <div className='headings'>
            <h1 id='back-head'>BABYBEAST</h1>
            <h1 id='front-head'>YOU CAN'T TAME THE WILD</h1>
        </div>
        <div className='avatar-container'>
          <div className='avatars' style={{willChange: 'transform', transform: `translate3d(${lscrolled}px, 0px, 0px)`, transformStyle: 'preserve-3d'}}>
            <div className='avatar-one'>
              <div className='avatar'>
                    <img src={FirstAvatar} alt="Barley Bae" />
                </div>
                <div className='avatar'>
                    <img src={SecondAvatar} alt="Brad BB" />
                </div>
                <div className='avatar'>
                    <img src={ThirdAvatar} alt="AppleSpice" />
                </div>
                <div className='avatar'>
                    <img src={FourthAvatar} alt="Onyx" />
                </div>
                <div className='avatar'>
                    <img src={FifthAvatar} alt="Buck BB" />
                </div>
            </div>
            <div className='avatar-two'>
              <div className='avatar'>
                    <img src={FirstAvatar} alt="Barley Bae" />
                </div>
                <div className='avatar'>
                    <img src={SecondAvatar} alt="Brad BB" />
                </div>
                <div className='avatar'>
                    <img src={ThirdAvatar} alt="AppleSpice" />
                </div>
                <div className='avatar'>
                    <img src={FourthAvatar} alt="Onyx" />
                </div>
                <div className='avatar'>
                    <img src={FifthAvatar} alt="Buck BB" />
                </div>
            </div>
            <div className='avatar-two'>
              <div className='avatar'>
                    <img src={FirstAvatar} alt="Barley Bae" />
                </div>
                <div className='avatar'>
                    <img src={SecondAvatar} alt="Brad BB" />
                </div>
                <div className='avatar'>
                    <img src={ThirdAvatar} alt="AppleSpice" />
                </div>
                <div className='avatar'>
                    <img src={FourthAvatar} alt="Onyx" />
                </div>
                <div className='avatar'>
                    <img src={FifthAvatar} alt="Buck BB" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Avatars
