import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth, provider, handleAuth} from "../firebase";
import {selectUserName,selectUserPhoto, setSignOutState, setUserLoginDetails} from "../features/user/userSlice"
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import Sidebar from "./Sidebar";
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


const Header = (props)=>{

    const dispatch = useDispatch();
    // here (navigate => history)
    const history = useNavigate(); 
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
  
    // this function only runs when the variable userName is updated
    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          history("/home");
        }
      });
    }, [userName]);

  const handleAuth = ()=>{
    if(!userName){
      signInWithPopup(auth,provider).then((result)=>{
        setUser(result.user);
      })
      .catch((error)=>{
        alert(error.message);
      });
    }else if(userName){
      auth.signOut().then(()=>{
        dispatch(setSignOutState())
        history('/')
      }).catch((err)=> alert(err.message));
    }
  }; 


  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


    return(
    <Nav>
      {
        !userName ?
        null
        :
        <Sidebar />
      }

      <Logo>
        <img src="/images/beanstalk-sql.png" alt="logo" />
      </Logo>       

      {
          !userName ?
          <Login onClick={handleAuth}>Login</Login> 
          :
          
          <NavContainer>
            <NavMenu>
               
                <a  href="/feedback">
                    <RiIcons.RiFeedbackFill />
                    <span> FEEDBACK</span>
                </a>

                < a href="/help">
                    <IoIcons.IoMdHelpCircle />
                    <span> HELP</span>
                </a>

                

            </NavMenu>

            <SignOut>
                <UserImg src={userPhoto} alt ={userName} />
                <DropDown>
                    <span onClick={handleAuth}>Sign out</span>
                </DropDown>
            </SignOut>

          </NavContainer>
      }
    </Nav>
  );
}



//=========================================== 
//                  STYLING
//===========================================  

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  /* background-color: rgba(0,102,45,255); */
  background-color: #15171c;
  box-shadow: 0px 5px 10px rgba(0,0,0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 20;
`;

const Logo = styled.a`
  padding: 0;
  width: 150px;
  margin-top: 20px;
  height: 70px;
  /* background-color: aliceblue; */
  max-height: 100px;
  min-height: 100px;
  font-size: 0;
  display: inline-block;
  margin-right: auto;
  img {
    cursor: pointer; 
    display: block;
    width: 100%;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items:center;
  /* background-color: aqua; */
  height: 70px;
  width: auto;

`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  right: 0;
  left: 0;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin-right: 5px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      margin-right: 2px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      margin-left: 5px;
      position: relative;
      &:before {
        background-color: #00ff00;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.div`
    cursor: pointer;
    background-color: rgba(10,198,69, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    /* border: 1px solid #f9f9f9; */
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #00CC00;
        color: fff;
        border-color: transparent;
    }
`;


const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 0.8s;
    }
  }
`;

export default Header;