import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    margin-top: 80px; // 헤더의 포지션이 fixed여서 margin-top 값을 Header 높이 만큼 설정
`;
export const MainWrapper = styled.div`
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
`;

export const FindText = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 600px;
    height: 44px;
    color: #000;
    font-family: Inter;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

export const BannerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    height: 200px;
    background-color: #ff914d;
    position: relative;
    & img {
        display: block;
        margin: auto;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    & button {
        margin-right: 20px;
        padding: 10px 30px;
        border-radius: 30px;
        background-color: transparent;
        color: #ffff;
        font-weight: 600;
        cursor: pointer;
        border: 2px solid #ffff;
        outline: none;
        font-size: 20px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: all 250ms ease-out;
        &:hover {
            background-color: #ffff;
            color: orange;
        }
    }
`;
export const SearchForm = styled.form`
    display: flex;
    margin-left: 300px;
    align-self: flex-start;
    border-radius: 0px;
    background-color: transparent;
    width: calc(100% - 300px);
    text-align: center;
    margin: 0 auto;
    height: 50px;
    margin-top: 20px;
`;
export const SubmitBtn = styled.button`
    border: none;
    outline: none;
    font-size: 24px;
    background-color: white;
    color: grey;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 0px 15px;
`;
export const SearchInput = styled.input`
    font-size: 20px;
    padding: 10px;
    width: 70%;
    border: none;
    outline: none;
    background-color: white;
    width: 300px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    &::placeholder {
        text-indent: 50px;
        font-weight: bold;
    }
`;

export const StyledBoxImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`;

export const StyledBoxImage = styled.img`
    width: 100%;
    height: 180px;
    transition: transform 0.3s ease-out;
`;

export const PostInfo = styled.div`
    width: 100%;
    height: 100px;
    padding: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    /* background-color:#ff914d; */
    color: white;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
`;

export const PostInfoText = styled.p`
    margin: 4px 0;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    width: calc(100% - 300px);
    border-bottom-right-radius: 30px; // 추가
    border-bottom-left-radius: 30px; // 추가
    padding-bottom: 20px; 
`;

export const PageNumber = styled.div`
    margin: 0 5px;
    padding: 5px 10px;
    background-color: ${({ selected }) => (selected ? '#FF914D' : '#FFF')};
    color: ${({ selected }) => (selected ? '#FFF' : '#000')};
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
`;

export const StyledBoxWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% - 300px);
    padding: 70px 0px 40px 70px ;
    height: auto;
    margin-top: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: white;
    gap: 40px;
    border-left-width: 40px;

`;
export const StyledBox = styled.div`
    width: 260px;
    height: 40%;
    display: center;
    border-radius: 30px;
`;
export const pageBtn = styled.div`
    border: none;
    width: 30px;
`;
export const SearchButton = styled.button`
    font-size: 20px;
    padding: 10px;
    border: none;
    outline: none;
    background-color: #ff914d;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
        background-color: #ff7335;
    }
    @media screen and (min-width: 600px) {
        display: none;
    }
`;
