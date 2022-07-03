import React from 'react'

//styled components imported
import styled from 'styled-components'

//react-icons imported
import * as FcIcons from 'react-icons/fc'

//About section of beanstack SQL 
const About = () => {
  return (
    <Container>
        <Heading> About </Heading>
        <Description>
            " It's a web-based application capable of running SQL queries and displaying the results of said query.
            <br></br>
            By using beanstalk SQL you can practice your SQL skills
            it is very helpful for those who are new to SQL and want to learn about the SQL syntax.
            You can not only practice here but can improve yourself as well. <br></br>
            Wish you a good luck in your SQL journey. "
        </Description>
        <SubDesc>Go ahead and Enjoy !</SubDesc>
        <Icon><FcIcons.FcAbout/></Icon>
    </Container>
  )
}

//=====================================
//    Styling of the Components
//=====================================

const Container = styled.div`
 margin-top: 90px;
 margin-left: 20px;
 color:rgba(0,102,45,255);
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    text-transform: uppercase;
`;

const Description = styled.p`
    font-size: 1.3rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

const Icon = styled.div`
    margin-top: 50px;
    font-size: 10rem;
`;

const SubDesc = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
`;


export default About;