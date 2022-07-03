import React,{useState, useEffect} from 'react'
import style from './Table.css';
import db from '../firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore';

function Table2(){

     const [allDocs,setAllDocs] = useState([]);
     // here i have used "[]" because we're getting data in an array of objects when we fetch all documents
    


    useEffect(() => {
        onSnapshot(collection(db,'regions'), (snapshot) => { 
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
        return a.regionID - b.regionID;
    })

  return (
    <div>
    <h2> Query Output </h2>
    <table className='Table'>
        <thead>
            <tr>
                <th>regionID</th>
                <th>regionDescription</th>
            </tr>
        </thead>
        <tbody>
            { 
                allDocs.map((doc,index)=>{
                    return(<tr key={index}>
                    {/* just checking the format */}
                    <td>{doc.regionID}</td>
                    <td>{doc.regionDescription}</td>
                </tr>
                )
                })  
            }
        </tbody>
    </table>
    </div>
  )
}



export default Table2;