import React from 'react'
import hero from '../assets/avatars/Rainbow.png';
import footerimg from '../assets/logos/BABYBEAST.png';
import logo from '../assets/logos/BB.png';
import './Hero.css';

const Hero = () => {
  return (
    <>
       <div className='hero-section'>
          <img src={hero} alt="Rainbow" className='hero-avatar'/>
          <h1 className='heading' id='title'>BABYBEAST</h1>
          <h5 className='sub-heading' id='sub-title'>NFT. STREETWEAR.</h5>
          <p className="low-heading" id='cc'>REPRESENTING THE DISTINCTIVE AND MAGNIFICENT BEASTS IN THE MULTI-VERSE WE PRESENT A
          COLLECTION FUTURISTIC EVOLUTIONARY NFT STREETWEAR ARTWORK BABY BEAST</p>
          <h5 className='sub-heading'>MINT INFO</h5>
          <p className='low-heading' id='ccc'>[APR-MAY]
          ETH [XXX]</p>
            <div className='footer'>
              <div className="marquee">
                <div className="track">
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change' />
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change' />
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>
                  <img src={logo} alt="" className="logo" id='logo-change'/>
                  <img src={footerimg} alt="" className="logo-name"/>

                </div>
              </div>
            </div>
              
        </div>
    </>
  )
}

export default Hero
