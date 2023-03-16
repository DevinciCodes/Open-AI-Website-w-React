import React from 'react'
import{Navbar, Brand, CTA} from './components'
import{Footer, Possibility, Features, WhatGPT3, Header, Blogg} from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
     
    <div className='gradient_bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blogg />
      <Footer />
      
    </div>
  )
}

export default App