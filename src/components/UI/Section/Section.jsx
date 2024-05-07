import React from 'react'
import './Section.css'

export const Section = ({children, className}) => {
  return (
    <section className={className}>{children}</section>
  )
}
