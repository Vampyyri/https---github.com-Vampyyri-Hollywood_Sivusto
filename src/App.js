//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import backphoto from './BG.png';
import ImageList from '@mui/material/Box';
import Container from '@mui/material/Container';
import Films from './Films';
import axios from 'axios'


function App() {

    const [alkutila, setAlkutila] = useState(0)

    function klikattu(variant) {
        console.log("klikattu: ", variant)
        setAlkutila(variant)
        console.log("alkutila: ", alkutila)
    }

    const pages = {
        films: 'films',
        persons: 'persons',
        game: 'game',

    }
    /*
        useEffect(() => {
            if (alkutila != 1) {
                pages.films
            }
            
            switch (match.params.type) {
                case pages.films:
                    return (
                        <div> < Films /></div >
                    )
                //break
                case pages.persons:
                    //getDailyData()
                    break
                case pages.game:
                    //getDailyData()
                    break
                default:
                    break
            }
            
        })
    */
    const buttons = [
        <Button key="one" href="films" /*onClick={() => { klikattu(1) }}*/>Films</Button>,
        <Button key="two" onClick={() => { klikattu(2) }}>Persons</Button>,
        <Button key="three">Game</Button>,
    ];

    useEffect(() => {
        console.log("window.location.pathname: ", window.location.pathname)
        if (window.location.pathname == '/films') {
            console.log("films")
            setAlkutila(1)
            console.log("alkutila: ", alkutila)
        }
    })


    if (alkutila === 0) {
        return (<div>
            <React.Fragment>
                <Container class='backphoto'>
                    <Box sx={{ height: '900px' }} />
                    <div /*style={{ minHeight: `100%`, backgroundImage: `url(${backphoto})` }}*/ >
                        <Box
                            sx={{
                                display: 'flex',
                                '& > *': {
                                    m: 1,
                                },
                            }}
                        >
                            <ButtonGroup style={{ margin: '1%' }}
                                orientation="vertical"
                                aria-label="vertical contained button group"
                                variant="text"

                            >
                                {buttons}
                            </ButtonGroup>
                        </Box>


                    </div >
                </Container>

            </React.Fragment></div>

        )
    } else if (alkutila === 1) {
        return (
            <Films />
        )

    }
}
export default App;

/*
        <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        */

/*
<div>
    <Box
        sx={{
            margin: '25px',
            display: 'flex',
            '& > *': {
                m: 1,
            },
        }}
    >

        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
        >
            {buttons}
        </ButtonGroup>
    </Box>
</div>
*/