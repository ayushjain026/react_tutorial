import React, { useState } from 'react'
import CrudServices from "../Services/crudServices"


const Services = new CrudServices();

export default function Crud() {

    const [countryName, setcountryName] = useState('')
    const [countryCode, setcountryCode] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(countryName)
        console.log(countryCode)
        
        // Send data to API
        if (countryName === null && countryCode ===null)
        {
            console.log("Invalid");
            return;
        }
        console.log("Data : ", event);

        const data ={
            countryName: countryName,
            countryCode: countryCode 
        }
        Services.CreateRecord(data).then((data) => {
            console.log(data);
        }).catch((error) =>{
            console.log(error);
        })
    }

    return (
        <>
            <form className='container my-5' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Country Name</label>
                    <input type="text" className="form-control" onChange={(e) => setcountryName(e.target.value)}  id="countryName" name='countryName' placeholder="Enter Country Name" />
                </div>
                <div className="form-group">
                    <label>Country Code</label>
                    <input type="text" className="form-control" onChange={(e) => setcountryCode(e.target.value)} id="countryCode" name='countryCode' placeholder="Enter Country code" />
                </div>
                {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
