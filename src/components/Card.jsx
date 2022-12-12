import React from 'react'
import styled from 'styled-components';
import '../styles/card.css'

const Card = styled.div`
    height: 200px;
    background-color: #fff;
    border: 1px solid #c9c9c9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    transition: box-shadow .15s;
    &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,.2);
    }

    h2{
        font-size: 18px;
        margin-bottom: 10px;
    }
    p{
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
    }
    a{
        font-size: 14px;
        color: #3DC19D;
        text-decoration: none;
        transition: color .15s;
        &:hover{
            color: rgba(61, 193, 157,.9);
        }
    }
`;

export default function CardCompoenent() {

  return (
    <div className='card'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
