import React from 'react'
import './Form.css'
import { FaPlus } from 'react-icons/fa'

export default function Form(props) {
    return(
        <form action="#" onSubmit={props.handleSubmit} className="form">
            <input onChange={props.handleChange} value={props.newTask} type="text" />
            <button type="submit"><FaPlus /></button>
        </form>
    )
}