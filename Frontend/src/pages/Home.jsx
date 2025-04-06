import React from 'react'
import MainBanner from '../components/MainBanner'
import  Categories  from '../components/Categories'
import BestSellers from '../components/BestSellers'
import BottomBaner from '../components/BottomBaner'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottomBaner />
    </div>
  )
}

export default Home