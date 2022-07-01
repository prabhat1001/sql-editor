import React,{UseState} from 'react'
import styled from 'styled-components'
import db from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 

const QueryOutput = () => {

//   const [allDocs, setAllDocs] = UseState([]);

//   const [singleDoc,setSingleDoc] = UseState({});

//   //function for fetching all docs 
//   function fetchAll(e){
//     e.preventDefault();
//     db.collection("categories")
//     .get()
//     .then((snapshot)=>{
//         if(snapshot.docs.length>0){
//           snapshot.docs.forEach((doc)=>{
//             setAllDocs((prevState)=>[...prevState,doc.data()]);
//           })
//         }

//     });

  //   console.log(allDocs);
  // }

  return (
    <Output>
      {/* <button onClick={fetchAll}>fetch all docs</button> */}
    </Output>
  )
}
const Output = styled.div`
 background-color: #fff;
 width: 100%;
 height: 100%;
`;

export default QueryOutput