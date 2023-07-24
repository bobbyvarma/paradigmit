import React from 'react'

const  footer=[{title:"Services"},{title:"Locations - India"},{title:"Locations - USA"},{title:"Connect with us"} ]

const Footer = () => {
  return (
  <div>

{
    footer.map((e)=>{
        <h1>{e.title}</h1>
        
    })
}

  </div>
  )
}

export default Footer