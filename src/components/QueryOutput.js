import React,{UseState} from 'react'

//styled components imported
import styled from 'styled-components'

//Area where queries are displayed
const QueryOutput = (props) => {

  return (
    <Output>
      {props.children}
    </Output>
  )
}

//=====================================
//    Styling of the Components
//=====================================

const Output = styled.div`
 background-color: #fff;
 width: 100%;
 height: 100%;
 overflow: scroll;
`;

export default QueryOutput