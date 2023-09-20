import React, {useState} from "react";
import ItemForm from "./ItemForm";
import { Link } from "react-router-dom";
import './Add.css'

function Add() {
    const [data, setData] = useState("")

    if (data) {
        return (
            <div>
            <p>{data.name} added!</p>
            <p>Note: Please allow infinite time to have the {data.item} added as we currently have no actual database.</p>
            <Link to="/">Go Home</Link>
            </div>
            )
    }
    return <ItemForm setData={setData}/>
    
}

export default Add;