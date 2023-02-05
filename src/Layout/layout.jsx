import React from "react";
import { Header, Sidebar } from "../Components/index";
import styled from "styled-components";

const Content = styled.div`
  padding-left: 256px;
  margin-top: 80px;
  height: 100%;
  box-sizing: border-box;
`;

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <Sidebar />
            <Content>
                {children}
            </Content>
        </>
    )
};

export default Layout;