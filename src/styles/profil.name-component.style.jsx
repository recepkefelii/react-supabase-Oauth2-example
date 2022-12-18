import styled from "styled-components";

const ProfilName = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: #3DC19D;
    text-decoration: none;
    transition: color .15s;
    &:hover{
        color: rgba(61, 193, 157,.9);
    }
    @media screen {
        font-size: 15px;
    }
`;

export default ProfilName;