import { Link } from 'react-router-dom'
import './homePage.css'
import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'

const HomePage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  

  return(
    <div className='homepage'>
     

      <div className='right'>
        <div className='imgContainer'>
          <div className='bgContainer'>
            <div className='bg'></div>
          </div>
          <img src="/bot.png" alt='' className='bot'/>
          <div className='chat'>
          <img src={typingStatus == "human1" ? "/human1.jpeg" : typingStatus=="human2" ? "/human2.jpeg" : "bot.png"} alt='' />
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We help you connect with AI effortlessly',
        2000, () =>{
            setTypingStatus("bot");
        },
        'Chat with cutting-edge AI models',
        2000, () =>{
          setTypingStatus("human2");
      },
        'Get answers instantly with AI-powered chatbots',
        2000, () =>{
          setTypingStatus("bot");
      },
        'Enhance productivity with seamless AI interactions',
        2000, () =>{
          setTypingStatus("human1");
      },
      ]}
      wrapper="span"
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
    />

          </div>
        </div>

      </div>

      <div className='left'>
        <h1>AI Verse</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>Experience seamless AI conversations, instant answers, and smarter solutions.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>

      <div className='terms'>
        <img src='/logo.png' alt=''/>
        <div className='links'>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>

    </div>
  )
}

export default HomePage