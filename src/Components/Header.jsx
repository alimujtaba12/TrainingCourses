import React from "react";
import styled from 'styled-components';
import { Account, Logout, Search } from "../Assets/Icons";
import logo from '../Assets/images/logo.png';
import { Svg } from "./index";

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 80px;
    width: 100%;
    padding: 16px 24px;
    background: var(--white);
    color: var(--secondary);
    box-shadow: 0px 8px 24px -10px rgba(0, 0, 0, 0.24);
    z-index: 2;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left:0;
`;

const InputContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--secondary-light);
    border-radius: 4px;
    padding: 4px 4px 4px 16px; 
    height: 48px;
    width: 50%; 
    box-sizing: border-box;
`;

const InputField = styled.input`
    border: none;
    outline: none;
    width: 95%;
    color: var(--secondary);

    ::placeholder { 
        color: var(--secondary);
    }
`;

const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 4px;
    background: var(--primary);
    cursor: pointer;
`;

const RightPanel = styled.div`
    display: flex;
    gap: 26px;
    cursor: pointer;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Link = styled.a`
    text-decoration: none;
    margin-left: 10px;
    font-size: 16px;
`;

const Header = () => {

    return (
        <Navbar>
            <img src={logo} alt="logo" />
            <InputContainer>
                <InputField type="text" placeholder="Search by keyword..." />
                <SearchIcon> <Svg src={Search} /> </SearchIcon>
            </InputContainer>
            <RightPanel>
                <ImageContainer>
                    <Svg src={Account} />
                    <Link>My Account</Link>
                </ImageContainer>
                <ImageContainer>
                    <Svg src={Logout} />
                    <Link>Logout</Link>
                </ImageContainer>
            </RightPanel>
        </Navbar>
    )
};

export default Header;
