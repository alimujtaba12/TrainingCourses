import React from "react";
import styled from 'styled-components';
import { Laptop, NavigationRightCircle, Setting, DesktopMonitor } from "../Assets/Icons";
import { Svg } from "./index";

const Container = styled.div`
    width: 100%;
    padding: 2.5rem;
    box-sizing: border-box;
`;

const Header = styled.h1`
    font-weight: 900;
    font-size: 24px;
    margin-bottom:24px;
    margin-top: 0;
`;

const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const CategoriesCard = styled.nav`
    height: 217px;
    width: 258px;
    border-radius: 8px;
    box-shadow: 0px 8px 24px -16px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--primary);
    background: var(--white);
    padding: 28px 16px 24px; 
    box-sizing: border-box;
    transition: all 0.3s ease;

    @media screen and (max-width: 430px) {
       width: 100%;
    }

    &:hover{
    transform: translateY(10px);
    }
`;

const Heading = styled.h2`
    font-size: 16px;
    font-weight: 700;
    margin: 19.87px 0 8px 0;
`;

const Footer = styled.div`
    margin-top: 24px;
    height: 24px;
    width: 58px;
    display: flex;
    cursor: pointer;
`;

const Button = styled.a`
    margin-right: 9.88px;
`;

const Card = () => {

    const icons = {
        Laptop,
        Setting,                   // Just stimulating in case icon name is comimg from Api how to deal with it. 
        DesktopMonitor
    };

    const data = [
        {
            headerIcon: icons['Laptop'],
            heading: 'CSS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btnText: 'View',
            buttonIcon: NavigationRightCircle
        },
        {
            headerIcon: icons['Setting'],
            heading: 'Web',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btnText: 'View',
            buttonIcon: NavigationRightCircle
        },
        {
            headerIcon: icons['DesktopMonitor'],
            heading: 'Miscellaneous',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            btnText: 'View',
            buttonIcon: NavigationRightCircle
        },
    ]

    return (
        <Container>
            <Header>Categories</Header>
            <Main>
                {
                    data && data?.map((item, index) => (
                        <CategoriesCard key={`${item?.heading}-${index}`}>
                            <Svg src={item?.headerIcon} />
                            <Heading>{item?.heading}</Heading>
                            <span>{item?.content}</span>
                            <Footer>
                                <Button>{item?.btnText}</Button>
                                <Svg src={item?.buttonIcon} />
                            </Footer>
                        </CategoriesCard>
                    ))
                }
            </Main>
        </Container>
    );
};

export default Card;