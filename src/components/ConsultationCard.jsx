import React from 'react'
import {GradientContainer , FillButton , OutlineButton} from './index'
import logo from '../assets/logo-1.png'

const ConsultationCard = () => {
  return (
    
    <GradientContainer className='h-fit px-20 py-10 container rounded-2xl my-10'>
      <div className='absolute top-8 right-3 opacity-40'>
        <img src={logo} alt="Logo" width={300} />
      </div>
      <div className='w-[50%]'>
        <h1 className='gradient-text text-3xl font-semibold mb-10 w-[80%] tracking-wider leading-relaxed'>Ready to Transform Your Business ?</h1>
        <FillButton className='mr-5 rounded '>
          Get a Free Consulatation
        </FillButton>
        <OutlineButton className='px-6 py-2 rounded'>
          Contact Us Today
        </OutlineButton>
      </div>
    </GradientContainer>
  )
}

export default ConsultationCard