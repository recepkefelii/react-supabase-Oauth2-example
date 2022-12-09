import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 40px;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:#F4F4F5;
  padding: 5px 10px;
  margin-top: 5px;
  &:focus {
    border: 2px solid #3DC19D;
  }
  transition: color .15s;
  `;

export default Input



