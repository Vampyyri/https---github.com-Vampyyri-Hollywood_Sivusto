import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Grid from '@mui/material/Unstable_Grid2';
import Grid from '@mui/material/Grid'; // Grid version 1

//import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

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
                    console.log("datanoudettu: ", dataNoudettu)

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
        let film = nimi.split(' ').join('_')
        let poster = '/posters/{film}.jpg'
        return poster;
    }

    function premiera(aika) {
        let päivä = aika.slice(8, 10)
        let kuukausi = aika.slice(5, 7)
        let vuosi = aika.slice(0, 4)
        let päivämäärä = päivä + '.' + kuukausi + '.' + vuosi
        console.log(päivämäärä)
        return päivämäärä;
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    //<img src={kuvan_etsiminen(i)} />


    return (


        <div>{(dataNoudettu == true) && <div>{leffat.map((i, index) =>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs='5%'>
                        <Item><img width='100%' src='img/bringing_up_baby.jpg' /></Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>{i.name}</Item>
                    </Grid>
                    <Grid item xs>
                        <Item>{premiera(i.date)}</Item>
                    </Grid>
                </Grid>
            </Box>




        )}</div>}</div>
    )

}

export default Films;

/*
<Button key={i.id} style={{
            borderRadius: "5px", maxWidth: '170px', maxHeight: '25px', minWidth: '100px', minHeight: '25px',
            backgroundColor: "white", color: "#12a086", fontWeight: "bold", marginLeft: "15px", marginTop: "15px"
        }}
            variant="contained" onClick={() => { }}>
            {i.Name}</Button>
            */