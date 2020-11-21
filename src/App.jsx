import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Routes from './routes'


const App = () => {

    return (
        <BrowserRouter>
            <>
                <Navbar />
                <Routes />
            </>
        </BrowserRouter>
    )

}


export default App