import styled from 'styled-components';

const Button = styled.button`
width: 100%;
    border: none;
    font-size: 18px;
    outline: none;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    background-color: #3DC19D;
    margin-top: 10px;
    cursor: pointer;
    transition: color .15s;
  &:hover{
    background-color: rgba(61, 193, 157,.9);
  }
  `;

export default Button

