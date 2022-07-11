import React, { Fragment } from 'react'

const Input = () => {
  return (
    <Fragment>
        <div className=' flex justify-between'>
            <div>
                <input type="text" placeholder='amount' className=' bg-inherit border-none outline-none ' />
            </div>
            <div className=' flex'>
                <img src="" alt="" />
                <select name="" id="">
                    <option value="USD">USD</option>
                </select>
            </div>
        </div>
    </Fragment>
  )
}

export default Input