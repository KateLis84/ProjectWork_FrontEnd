import React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import './ArchivePage.css'
import '../fonts/fonts/Igrasans.ttf';
import arrow from '../../components/img/blackArrov.png';
import smallArrow from '../../components/img/comonArrow.png'
import { useState } from 'react'


const TempData=[
    {
        id: '1',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        date: '12 Червня 2021'
    },
    {
        id: '2',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        date: '12 Червня 2021'
    },
    {
        id: '3',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        date: '12 Червня 2021'
    },
    {
        id: '4',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Іван Франко у світі',
        date: '12 Червня 2021'
    },
    {
        id: '5',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Науковий Форум',
        date: '12 Червня 2021'
    },
    {
        id: '6',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Науковий театр',
        date: '12 Червня 2021'
    },
    {
        id: '7',
        photo: 'https://i.ibb.co/dtSbTjH/Rectangle-17.png',
        title: 'Легенда про вічне життя',
        date: '12 Червня 2021'
    },
    
]

function ArchivePage(){

    const [searchTerm, setSearchTerm] = useState('');

    return(
        <div className="archiveMainContainer">
            <span className="archiveTitle">Архів Подій</span>
            <span className="archiveNews">Актуальні новини <img src={arrow} alt="not found"/></span>
            <p><TextField className="archivesearch" 
                          id="standard-basic" 
                          label="Пошук" 
                          variant="standard"
                          onChange={event => {setSearchTerm(event.target.value)}} />
            </p>

            <Grid container spacing="3">
                {TempData.filter((val)=>{
                    if(searchTerm == ''){
                        return val;
                    } else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val;
                    }
                }).map((element)=>{
                    return(
                        <Grid item key={element.id} xs={4} className="archiveCard">
                            <img src={element.photo} className="archiveCardImg" alt="not found"/>
                            <div className="archiveCardTitle">{element.title} <img src={smallArrow} alt="not found"/></div>
                            <div className="archiveCardDate">{element.date}</div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default ArchivePage;