import React,{UseState} from 'react'
import styled from 'styled-components'

const QueryOutput = (props) => {

  return (
    <Output>
      {props.children}
    </Output>
  )
}
const Output = styled.div`
 background-color: #fff;
 width: 100%;
 height: 100%;
 overflow: scroll;
`;

export default QueryOutput