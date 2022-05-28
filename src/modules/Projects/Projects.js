import React from 'react';
import './Projects.css';
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'



function Projects() {

    const [projects, getProjects] = useState([]);
  
    useEffect(() => {
        (async () => {
            try {
              var response = await fetch('http://frankos-museum-backend.azurewebsites.net/projects');
              getProjects(await response.json())
            } catch (e) {
            }
        })();
    }, []);

    return (
        <div style={{margin: '3% 7% 7% 7%'}}>
            <div className="igraSans" style={{fontSize: '71px', lineHeight: '71px'}}>Проекти</div>
            <Divider color='black' sx={{borderBottomWidth: 4, marginBlock: '20px 30px'}}/>
            <Grid container spacing={3}>
                {projects.map(function(item) {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                        <a href={item.link} className="no_underlines">
                          <Card>
                            <CardActionArea>
                              <CardMedia component="img" image={'http://frankos-museum-backend.azurewebsites.net'+item.image}/>
                              <CardContent>
                                <Stack direction="row" spacing={1}>
                                  <Typography variant="body2" color="primary" style={{fontSize: '25px', textDecoration: 'none'}}>{item.title}</Typography>
                                  <ArrowForwardIcon style={{fontSize: '25px', marginTop: '10px', transform: 'rotate(-45deg)'}}/>
                                </Stack>
                                <Typography variant="body2" color="#a3a3a3">{item.subtitle}</Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </a>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Projects;