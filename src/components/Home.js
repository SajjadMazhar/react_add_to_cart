import React from 'react'
import list from '../data'
import Card from './Card'
import './home.css'

const Amazon = ({handleClick}) => {

  return (
    <section>
        {
            list.map(item=>{
               return (
                   <Card key={item.id} item = {item} handleClick = {handleClick}/>
               ) 
            })
        }
    </section>
  )
}

export default Amazon
