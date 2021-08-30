import Header from "./Header"
import {withRouter} from 'react-router-dom'
import React, { useState, useEffect } from "react"

function UpdateProduct(product)
{
    const [data, setData] = useState([]);
    console.warn("product",product.match.params.id)
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/singleProduct/"+product.match.params.id);
        result = await result.json();
        setData(result)
    }, [])
    
    return(
        <div>
            <Header />

            <h1>UpdateProduct Page</h1>
            <input className="col-sm-6" type="text" defaultValue={data.name}/><br/><br/>
            <input className="col-sm-6" type="text" defaultValue={data.price}/><br/><br/>
            <input style = {{height:100}} className="col-sm-6" type="text" defaultValue={data.description}/><br/><br/>
            <input type="file" defaultValue={data.filepath}/><br/><br/>
            <img style={{width:100}} src={"http://localhost:8000/"+data.filepath} /><br/><br/>
            <button>Update Product</button>
        </div>
    )
}

export default withRouter(UpdateProduct)