import React,{useState, useEffect} from 'react'
import style from './Table.css';
import db from '../firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore';

function Table1(){

     const [allDocs,setAllDocs] = useState([]);
     // here i have used "[]" because we're getting data in an array of objects when we fetch all documents
    


    useEffect(() => {
        onSnapshot(collection(db,'categories'), (snapshot) => { 
            let temp = [];
            snapshot.docs.forEach((doc) => {
                temp.push(doc.data());
                // console.log(doc.data());
            }); 
            setAllDocs(temp)
        });
    }, []);

    console.log(allDocs);  

    //to sort the content fetched from firestore
    allDocs.sort((a,b)=>{
        return a.categoryID - b.categoryID;
    })

  return (
    <div>
    <h2> Query Output </h2>
    <table className='Table'>
        <thead>
            <tr>
                <th>categoryID</th>
                <th>categoryName</th>
                <th>description</th>
                <th>picture</th>
            </tr>
        </thead>
        <tbody>
            { 
                allDocs.map((doc,index)=>{
                    return(<tr key={index}>
                    {/* just checking the format */}
                    <td>{doc.categoryID}</td>
                    <td>{doc.categoryName}</td>
                    <td>{doc.description}</td>
                    <td>{doc.picture}</td>
                </tr>
                )
                })  
            }
        </tbody>
    </table>
    </div>
  )
}



export default Table1;