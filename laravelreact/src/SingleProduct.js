import Header from "./Header"
import { withRouter } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap"

function SingleProduct(product) {
    const [item, setData] = useState([]);
    console.warn("product", product.match.params.id)
    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/singleProduct/" + product.match.params.id);
        result = await result.json();
        setData(result)
    }, [])

    return (
        <div>
            <Header />

            <h1>Product Detail</h1>
            <br /><br />
            <Table style={{ width: 900 }}  className="col-sm-6 offset-sm-2">
                <tr className="borderTable">
                    <td style={{ width: 600 }}>
                        <img style={{ width: 500 }} style={{ height: 300 }} src={"http://localhost:8000/" + item.filepath} /></td>
                    <td style={{ width: 300 }}><h5>Model: {item.name}<br />
                        Product Id: {item.id}<br />
                        Price: {item.price}</h5><br /></td>
                        
                </tr>
                </Table><br/>
                        <Table style={{ width: 900 }}  className="col-sm-6 offset-sm-2">
                <tr  className="borderTable">
                <td style={{ width: 900 }}><h5>Description:</h5><br/><br/> {item.description}<br /></td>
                </tr>
            </Table>
        </div>
    )
}

export default withRouter(SingleProduct)