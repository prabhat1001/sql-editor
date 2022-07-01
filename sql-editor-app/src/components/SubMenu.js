import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const SubMenu = ({item}) => {

    const [subnav, setSubnav] = React.useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item,index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    );
}

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    border-left: 4px solid #15171c;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #00CC00;
        cursor: pointer;
    }
    
    
`;

const SidebarLabel = styled.span`
      margin-left: 16px;
      font-size: 16px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left:3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 16px;
    &:hover {
        background: #00CC00;
        cursor: pointer;
    }
`;

export default SubMenu;