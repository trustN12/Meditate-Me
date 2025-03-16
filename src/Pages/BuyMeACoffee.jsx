
import DonationForm from '@/Components/Main/DonationForm'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const BuyMeACoffee = () => {
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
     <DonationForm />
    </div>
  )
}

export default BuyMeACoffee