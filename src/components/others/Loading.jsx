import { BarLoader } from 'react-spinners'
import React from 'react';


const Loading = ({ size, color }) => {

    const spinnerColor = color ? color : "#36D7B7"

    return <BarLoader size={size} color={spinnerColor} />

}


export default Loading