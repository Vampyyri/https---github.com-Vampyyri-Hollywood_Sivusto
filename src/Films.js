import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

function Films() {

    const [leffat, setLeffat] = useState();
    const [dataNoudettu, setDataNoudettu] = useState(false);
    console.log("Films functiossa ollan")

    useEffect(() => {
        if (!dataNoudettu) {
            const elokuvat = async () => {
                try {
                    console.log("Ku-ku")
                    let films_luettelo = await axios.get('http://localhost:443/films')
                    console.log(films_luettelo.data)
                    setLeffat(films_luettelo.data)
                    setDataNoudettu(true)

                } catch (err) {
                    console.log(err)
                }
            }
            elokuvat()
            /*let kino = 'Bringing_Up_Baby'.split('_').join(' ')
            console.log(kino)*/
        }

    })

    function kuvan_etsiminen(nimi) {
        let film = nimi.split(' ', join('_'))
        '/posters/{film}.jpg'
    }




    return (



        <div>{(dataNoudettu == true) && <div>{leffat.map((i, index) => 
            <Grid container spacing={3}>
                <Grid xs="auto">
                    <Item><img src={kuvan_etsiminen(i)} /></Item>
                </Grid>
                <Grid xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid xs>
                    <Item>xs</Item>
                </Grid>
            </Grid>
        
        <Button key={i.id} style={{
            borderRadius: "5px", maxWidth: '170px', maxHeight: '25px', minWidth: '100px', minHeight: '25px',
            backgroundColor: "white", color: "#12a086", fontWeight: "bold", marginLeft: "15px", marginTop: "15px"
        }}
            variant="contained" onClick={() => { }}>
            {i.Name}</Button>)}</div>}</div>
    )

}

export default Films;