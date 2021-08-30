import Header from "./Header"
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
function Protected(props) {
    let Cmp = props.Cmp
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push("/Register")
        }
    }, [])
    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected