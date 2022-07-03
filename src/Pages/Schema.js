import React from 'react'

//styled components imported
import styled from 'styled-components';

//react-icons imported
import * as FcIcons from 'react-icons/fc'

const Schema = () => {
  return (
    <Container>
        <Heading> Schema </Heading>
        <Description>
            " A database schema is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied on the data.<br></br>
            A database schema defines its entities and the relationship among them. It contains a descriptive detail of the database, which can be depicted by means of schema diagrams. "
        </Description>
        <Icon><FcIcons.FcAddDatabase/></Icon>
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

export default Schema;