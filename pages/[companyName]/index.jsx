import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Profile from '../../components/Profile'
import { getPortfolio } from '../../controllers/portfolio'


const Index = () => {
   const router= useRouter()
   const {companyName} = router.query
   const [portfolio, setPortfolio] = useState({})
   useEffect(async() => {
       const data = await getPortfolio(companyName)
       if(data && data.portfolio){
           setPortfolio(data.portfolio)
       }
   }, [companyName])   
   console.log(portfolio)
    return (
          <Profile profile={portfolio} />
    )
}

export default Index
