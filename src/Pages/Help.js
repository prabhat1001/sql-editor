import React from 'react'

//styled components imported
import styled from 'styled-components';

//react-icons imported
import * as FcIcons from 'react-icons/fc'

//Help section of beanstack SQL
const Help = () => {
  return (
    <Container>
        <Heading> Help ! </Heading>
        <Description>
            " Inorder to use this application, you need to login first, then only you can use the application to practice your SQL skills.<br></br>
            Go to the SQL Worksheet tab then start writing your SQL Query for the given Schemas and hit Run button for the results.<br></br>
            Then the results of your query will be displayed in the SQL query output section. "
        </Description>
        <Icon><FcIcons.FcAcceptDatabase/></Icon>
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

export default Help;