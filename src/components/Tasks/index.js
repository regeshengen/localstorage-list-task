import React from 'react'
import './Tasks.css'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
export default function Tasks(props) {
    return (
        <ul className="tasks">
            { props.tasks.map( (task, index) => (
                <li key={task}>{task}
                    <span>
                        <FaEdit
                            onClick={(e) => props.handleEdit(e, index)}
                                    className="edit" />
                        <FaWindowClose
                            onClick={(e) => props.handleDelete(e, index)}
                            className="delete" />
                    </span>
                </li>
            ))}
        </ul>
    )
}