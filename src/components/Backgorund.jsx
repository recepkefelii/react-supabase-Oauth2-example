import styled  from "styled-components";

const Background = styled.div`
    padding: 70px 100px 100px 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 7px;

    @media (max-width: 768px) {
        padding: 90px 100px 90px 100px;
    }

    @media (max-width: 425px) {
        padding: 70px 60px 100px 60px;
    }

    @media (max-width: 375px) {
        padding: 70px 5px 100px 5px;
    }
`;

export default Background