import React from 'react'
import './Card.css'


export const Card = ({className, img}) => {
  return (
    <div className={className}>
            <div>
                  <img src={img} alt="" />
            </div>
            <div>
                  <h2>Title</h2>
                  <h3>Descripción</h3>
                  <h4>Ir al proyecto</h4>
            </div>


    </div>
  )
}
