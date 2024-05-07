import React from 'react';
import './Div.css';


export const Div = ({className,content}) => {
  return (
    <div className={className}>
        <img src="src\components\Layouts\Header\img\logoSena2.png" alt="" /> 
        {content}
        </div>)
}
