import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/20/solid'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetils = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div >
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
             <AdressCard />
        </div>
        <div className='py-20' >
            <OrderTracker activeStep={3} />
        </div>
        <Grid container className='space-y-5'>
            {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between',}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70' alt='' />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold '>Men slim shirt</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: pink</span><span>Size:M</span></p>
                                <p>Seller: linaria </p>
                                <p>₹1099</p>

                        </div>
                    </div>
                </Grid>
                <Grid item >
                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 ' />
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>)}
           
        </Grid>
    
    </div>
  )
}

export default OrderDetils
