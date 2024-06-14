import BestSelling from '@/components/bestselling'
import Catagorries from '@/components/catasgories'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'
import React from 'react'

const HomePage = () => {
  
  return (
    <div className=' h-[80vh]'>
      <Hero/>
      <Services/>
      <Promotion/>
      <Catagorries/>
      <BestSelling/>
      <Footer/>
    </div>
  )
}

export default HomePage