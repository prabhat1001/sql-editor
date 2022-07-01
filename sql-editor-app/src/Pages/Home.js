import React from 'react'
import styled from 'styled-components';
import AceEditor from "react-ace";
import QueryOutput from '../components/QueryOutput';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

import * as BsIcons from 'react-icons/bs'


function onChange(newValue) {
  console.log("change", newValue);
}

const Home = () => {
  return (
    <Wrap>
    <Leaves src="/images/leaves-transparent.png" alt="leaves" />
    <Container>
      <Nav>
        <Run>
          <Icon><BsIcons.BsFillPlayFill /></Icon>
          <Text>Run</Text>
        </Run>
        <Save>
          <Icon> <BsIcons.BsFillSaveFill /></Icon>
          <Text>Save</Text>
        </Save>
      </Nav>

      {/* SQL Query Editor */}
      <EditorWrap>
          <AceEditor 
          placeholder="Write query here ..."      
          name="editor"
          width="100%"
          height="100%"
          onLoad={editor => {
            editor.once("change", function() {
                editor.session.getUndoManager().reset();
            });
        }}
          onChange={onChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={false}
          value={`select * 
    from <Table Name>`}
          setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: false,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 5,
          }}></AceEditor>
      </EditorWrap>

      {/* Query Output */}
      <OutputArea>
         <QueryOutput />
      </OutputArea>

    </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
`;

const Container = styled.div`
  display: block;
  margin-left: 0;
  margin-top: 70px;
  width: 75%;
  height: 80vh;
  /* background-color: rgb(50,80,20); */
  
`;

const EditorWrap = styled.div`
  margin-left: 3%;
  margin-top: 10px;
  width: 94%;
  height: 30vh;
  background-color: aliceblue;
  border: 5px solid #12012020;
  border-radius: 10px;
`;

const Leaves = styled.img`
  width: 300px;
  height: 60vh;
  margin-top: 70px;
`;

const Nav = styled.nav`
  top: 70px;
  left: 0;
  right: 0;
  height: 70px;
  /* background-color: rgba(0,102,45,255); */
  /* background-color: #f9f9f9;
  box-shadow: 0px 5px 10px rgba(0,0,0, 0.1); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  
`;


const Run = styled.div`
    cursor: pointer;
    width: 100px;
    /* margin-left: 50%; */
    margin-right: 5px;
    align-items: center;
    display: flex;
    font-size: 18px;
    background-color: rgba(10,198,69, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    margin-top: 0px;
    transition: all 0.2s ease 0s;
    
    &:hover {
        background-color: #00CC00;
        color: #ffff;
        border-color: transparent;
    }
`;

const Save = styled.div`
    cursor: pointer;
    width: 100px;
    align-items: center;
    display: flex;
    font-size: 16px;
    background-color: #f6f6f6;
    color: #408270;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    margin-top: 0px;
    transition: all 0.2s ease 0s;
    
    &:hover {
        background-color: #D4EDE6;
        color: fff;
        /* border-color: transparent; */
    }
`;

const Icon = styled.div`
  font-size: 16px;
`;

const Text = styled.span`
 font-size: 16px;
 margin-left: 10px;
`;

const OutputArea = styled.div`
  margin-left: 3%;
  margin-top: 1rem;
  width: 94%;
  height: 43vh;
  background-color: aliceblue;
  border: 5px solid #12012020;
  border-radius: 10px;
`;



export default Home;