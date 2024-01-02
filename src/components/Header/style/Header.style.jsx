import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
`;
export const nav = styled.nav`
    color:transparent;
`

export const Logo = styled(Link)`
    flex-shrink: 0;
    margin-right: 20px;
`;

export const Img = styled.img`
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    background-color: transparent;
`;

export const SubmitBtn = styled.button`
    border: none;
    outline: none;
    font-size: 24px;
    background-color: transparent;
    color: grey;
`;

export const SearchInput = styled.input`
    font-size: 20px;
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    &::placeholder {
        font-weight: bold;
    }
`;

export const Menu = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    margin-right: 30px;
`;

export const MenuBtn = styled.button`
    font-weight: bold;
    background-color: transparent;
    border: none;
    font-size: 22px;
    flex-shrink: 0;
    &:nth-of-type(2) {
        margin: 0 30px;
    }
    &:hover {
        color: var(--color-accent);
    }
`;

export const Test = styled.div`
    display: flex;
    align-items: center;
`;
  
