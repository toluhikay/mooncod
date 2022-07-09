import React, { Fragment } from 'react'
import BuyDirectory from './buy.component'
import HeroLand from './heroland.component'
import Secure from './secure.component'
import Data from './data.component'
import Steps from './steps.component'
import Manage from './manage.component'

const DirectoryLand = () => {
  return (
    <Fragment>
        <HeroLand/>
        <Secure />
        <BuyDirectory/>
        <Data/>
        <Steps/>
        <Manage/>
    </Fragment>
  )
}

export default DirectoryLand