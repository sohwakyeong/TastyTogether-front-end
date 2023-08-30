import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh; // 페이지 높이를 100vh로 설정하여 스크롤을 내려야 footer가 보이게 설정
    margin-top: 100px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;

export const Search = styled.div`
    width: 1440px;
    height: auto;
    background-color: transparent;
    margin: 140px auto 40px;
    border-radius: 10px;
    position: relative;
`;
export const Nav = styled.div`
    width: 320px;
    height: 600px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 140px;
    left: 70px;
    border-radius: 10px;
`;

export const ResultDiv = styled.div`
    position: absolute;
    top: 0;
    left: 360px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

export const MyFilterTitle = styled.div`
    font-size: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;
export const Square = styled.div`
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border: 5px solid var(--color-accent);
    transition: all 250ms ease-out;
    border-radius: 100%;
    &:hover {
        background-color: var(--color-accent);
        color: #f0f0f0;
    }
`;
export const MyFilterContent = styled.div`
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
        &:hover {
            cursor: pointer;
        }
        img {
            width: 20px;
            margin-right: 10px;
        }
        h3 {
            font-size: 1.1rem;
            &:hover {
                background-color: var(--color-accent);
                color: white;
                border-radius: 3px;
            }
        }
    }
`;

export const ResultStores = styled.div``;
export const Pagination = styled.div``;
export const Result = styled.div``;
