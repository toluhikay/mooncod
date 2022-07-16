import React, { Fragment } from 'react'
import SMS from "../../assets/sms.png";


const Help =()=> {
    return(
        <Fragment>

            <a href='support@mooncod.com' className='block bg-gradient-to-tr from-[#008AED] to-[#54F0D1] px-8 py-4 rounded-full text-white flex items-center justify-between fixed bottom-24 left-[57%] md:left-[85%] z-10'>
              <img src={SMS} alt='appStore icon' className='mr-2' />
              {""}
              Help
            </a>
        </Fragment>
    )
}


export default Help;