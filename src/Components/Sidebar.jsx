import React from "react";
import styled from 'styled-components';
import { Book, Dashboard, Info, User } from "../Assets/Icons";
import { Svg } from "./index";

const Aside = styled.aside`
    position: fixed;
    top: 80px;
    width:256px;
    height: 100%;
    background: var(--primary);
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding-top: 44px;
    padding-left: 34px;
`;

const Item = styled.li`
    display: flex;
`;

const Text = styled.a`
    font-weight: 700;
    color: var(--light-gray);
    cursor: pointer;
`;


const Sidebar = () => {

    return (
        <Aside>
            <List>
                <Item>
                    <Svg src={Dashboard} />
                    <Text className="ml-18">Dashboard</Text>
                </Item>
                <Item className="mt-40">
                    <Text>Training</Text>
                </Item>
                <Item className="mt-16 active">
                    <Svg src={User} />
                    <Text className="ml-18">Courses</Text>
                </Item>
                <Item className="mt-16">
                    <Svg src={Book} />
                    <Text className="ml-18">Library</Text>
                </Item>
                <Item className="mt-40">
                    <Text>Need help?</Text>
                </Item>
                <Item className="mt-16">
                    <Svg src={Info} />
                    <Text className="ml-18">Support</Text>
                </Item>
            </List>
        </Aside>
    )
};

export default Sidebar;