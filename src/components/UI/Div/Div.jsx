import React from 'react';
import './Div.css';
import logoSena2 from '../../Layouts/Header/img/logoSena2.png'


export const Div = ({className,content}) => {
  return (
    <div className={className}>
        <img src={logoSena2} alt="" /> 
        {content}
        </div>)
}
