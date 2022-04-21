import React from 'react';
import './ExcutionPage.css'
import Grid from '@mui/material/Grid'
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const text = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
const photo = 'https://i.ibb.co/bvXYV7y/image-12.png'
const servicesList = [
    {
        serviceTitle: 'Тематичні лекції',
        serviceDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        serviceTitle: 'Майстер-класи',
        serviceDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        serviceTitle: 'Фото-, відеозйомка в експозиції та на території Музею',
        serviceDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        serviceTitle: 'Експозиційний відділ',
        serviceDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
]

function Excurtion() {
  return (
      <div className="mainContainer">
        <Grid container spacing={1}>
          <Grid container xs={12}>
              <Grid xs={12}>
                <div className="excurtionTitle">Екскурсії</div>
            </Grid>
            <Grid xs={12}>
                <img src={photo} alt="not found"className="excurtionPhoto"/>
            </Grid>
            <Grid xs={12}>
                <div className="excurtionDescription">
                  {text}
                </div>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <div className="servicesTitle">Наші послуги</div>
            {servicesList.map((service, i) => {
              return(
              <Accordion className="servicesObjects" sx={{
                boxShadow: 'none',
                borderBottom: '2px solid #C5C5C5'
              }}
              key={i}
              >
                <AccordionSummary
                  expandIcon={<AddIcon/>}
                  className="departmentTitle">
                    {service.serviceTitle}
                </AccordionSummary>
                <AccordionDetails>
                    {service.serviceDescription}
                </AccordionDetails>
              </Accordion>
              )
            })}
          </Grid>
        </Grid>
      </div>
  );
}

export default Excurtion;