import Header from "./Header"
import React, { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        getdata();
    }, [])

    async function deleteOperation(id) {
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: 'delete'
        });
        result = await result.json();
        console.warn(result)
        getdata();
        alert("id " + id + " has been deleted")
    }
    async function getdata() {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result)

    }
    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <br /><br />
            <Table >
                <tr className="borderTable">
                    <td style={{ width: 250 }}><h4>Operation</h4></td>
                    <td style={{ width: 250 }}><h4>Image</h4></td>
                    <td style={{ width: 250 }}><h4>Info</h4></td>
                </tr>
                {
                    data.map((item) =>
                        <tr className="borderTable">
                            <td><tr className="borderNeglect"><td style={{ width: 100 }}><span onClick={() => deleteOperation(item.id)} className="delete">Delete</span></td></tr><br />
                                <tr className="borderNeglect"><td style={{ width: 500 }} className="alignEnd">
                                    <Link to={"UpdateProduct/"+item.id}>
                                    <Button>Update</Button></Link></td></tr>
                                <tr className="borderNeglect"><td style={{ width: 500 }} className="alignEnd">
                                <Link to={"SingleProduct/"+item.id}>
                                    <Button>See Detail</Button></Link></td></tr></td>
                            <td style={{ width: 200 }}>
                                <img style={{ width: 200 }} style={{ height: 150 }} src={"http://localhost:8000/" + item.filepath} /></td>
                            <td style={{ width: 300 }}><h5>Model: {item.name}<br />
                                Product Id: {item.id}<br />
                                Price: {item.price}</h5><br /></td>
                        </tr>
                    )
                }
            </Table>
        </div>
    )
}

export default ProductList;