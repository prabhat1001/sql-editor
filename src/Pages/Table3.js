import React,{useState, useEffect} from 'react'
import style from './Table.css';
import db from '../firebase'
import { collection, doc, onSnapshot } from 'firebase/firestore';

function Table3(){

     const [allDocs,setAllDocs] = useState([]);
     // here i have used "[]" because we're getting data in an array of objects when we fetch all documents
    


    useEffect(() => {
        onSnapshot(collection(db,'employees'), (snapshot) => { 
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
        return a.employeeID - b.employeeID;
    })

  return (
    <div>
    <h2> Query Output </h2>
    <table className='Table'>
        <thead>
            <tr>
                <th>employeeID</th>
                <th>lastName</th>
                <th>firstName</th>
                <th>title</th>
                <th>titleOfCourtesy</th>
                <th>birthDate</th>
                <th>hireDate</th>
                <th>address</th>
                <th>city</th>
                <th>region</th>
                <th>postalCode</th>
                <th>country</th>
                <th>homePhone</th>
                <th>extension</th>
                <th>photo</th>
                <th>notes</th>
                <th>reportsTo</th>
                <th>photoPath</th>
            </tr>
        </thead>
        <tbody>
            { 
                allDocs.map((doc,index)=>{
                    return(<tr key={index}>
                    
                    <td>{doc.employeeID}</td>
                    <td>{doc.lastName}</td>
                    <td>{doc.firstName}</td>
                    <td>{doc.title}</td>
                    <td>{doc.titleOfCourtesy}</td>
                    <td>{doc.birthDate}</td>
                    <td>{doc.hireDate}</td>
                    <td>{doc.address}</td>
                    <td>{doc.city}</td>
                    <td>{doc.region}</td>
                    <td>{doc.postalCode}</td>
                    <td>{doc.country}</td>
                    <td>{doc.homePhone}</td>
                    <td>{doc.extension}</td>
                    <td>{doc.photo}</td>
                    <td>{doc.notes}</td>
                    <td>{doc.reportsTo}</td>
                    <td>{doc.photoPath}</td>
                    

                </tr>
                )
                })  
            }
        </tbody>
    </table>
    </div>
  )
}



export default Table3;