import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Sidebar = () => {

  const [sidebar, setSidebar] = React.useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <Nav>
        <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
            {/* <NavIcon to='#'>
                <AiIcons.AiOutlineArrowLeft onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
                return <SubMenu item={item} key ={index} />;
            })}
        </SidebarWrap>
    </SidebarNav>
    </>
  )
}

const Nav = styled.div`
    background: #15171c;
    height: 70px;
    width: 100px;
    display: flex;
    margin-left: -30px;
    justify-content: flex-start;
    align-items: center;
    
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 1.5rem;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 70px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    /* z-index: 10; */

`;

const SidebarWrap = styled.div`
    width: 100%;
`;

export default Sidebar;