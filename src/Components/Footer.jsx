import React from "react";
import styled from 'styled-components';

const WebFooter = styled.footer`
    width: 100%;
    display:flex;
    justify-content:flex-end;
    margin-top: 100px;
    padding: 0 40px 28px 0;
    box-sizing: border-box;
`;

const Link = styled.a`
    text-decoration-line: underline;
    color: var(--primary);
    cursor: pointer;
`;

const Footer = () => {

    return (
        <WebFooter>
            <Link>
                Terms and conditions
            </Link>
            <Link className="ml-30">
                Privacy policy
            </Link>
        </WebFooter>
    )
};

export default Footer;