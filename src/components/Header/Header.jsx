import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import UserInfo from '../UserInfo/UserInfo';
import * as S from './style/Header.style';
import useAuth from '../../hooks/useAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const { auth } = useAuth();
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/stores/search', { state: { keyword: text } });
    };

    return (
        <S.Container fluid>
            <Navbar expand="md" className="bg-body-tertiary">
                <Navbar.Brand>
                    <S.Logo className="navbar-brand" to="/">
                        <S.Img src="/imgs/logo1.png" alt="logo" />
                    </S.Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/post">혼밥 메이트</Nav.Link>
                        <Nav.Link href="/stores/register">음식점 등록</Nav.Link>
                        <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
                            <NavDropdown.Item href={`/mypage/${auth.userId}`}>
                                마이페이지
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <UserInfo />
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <S.Form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <S.SubmitBtn>
                            <FiSearch />
                        </S.SubmitBtn>
                        <S.SearchInput
                            className="form-control me-2"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="지역,식당 또는 음식"
                            value={text}
                            onChange={handleChange}
                        />
                    </S.Form>
                </Navbar.Collapse>
            </Navbar>
        </S.Container>
    );
}
