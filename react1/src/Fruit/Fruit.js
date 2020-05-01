import React from 'react';
import './Fruit.css'

const fruit = (props) => {
    return ( <
        tbody >
        <
        tr >
        <
        td className = 'all' > {
            props.name
        } </td> <
        td className = 'all' > {
            props.quantity
        } </td> <
        td className = 'all'
        onClick = {
            props.click
        } > delete </td> </tr> 
        </tbody>
    )

}

export default fruit;