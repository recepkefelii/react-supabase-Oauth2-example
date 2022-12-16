import styled from "styled-components";

const Grid = styled.div`
    background-color: #fff;
    border: 1px solid #dadada;
    border-radius: 5px;
    margin: 0;
    padding: 5px 20px 5px 20px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    transition: box-shadow .15s;
    &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,.2);
    }
`;

export default Grid;