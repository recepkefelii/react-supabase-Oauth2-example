import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px salmon #333;
  }
`;

export default Input



