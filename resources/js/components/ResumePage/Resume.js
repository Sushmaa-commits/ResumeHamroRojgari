import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonalInformation from "../PersonalInformationPage/index";
import Training from "../TrainingPage/index";
import AcademicQualification from "../AcademicPage/index";
import WorkExperience from "../WorkExperiencePage/index";
import { Form } from '../../components/useForm';

// import "./ResumeData";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  }));

const Resume = ( ) => {
    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert('testing');
    
    }
  
    return (
        <Container component="main" maxWidth="md" >
            <CssBaseline />
            <div className={classes.paper} >
                <Avatar className={classes.avatar} >
                    <ContactsOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" gutterBottom style={{marginBottom:30}}>
                    Personal Information
                </Typography>
                
                <Form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    
                        <PersonalInformation />
                        <AcademicQualification />
                        <Training/>
                        <WorkExperience />
               
                    </Grid>

                    <Grid item xs={12}  style={{marginTop:20,display:'flex'}}>
                        {/* <Grid item ={6}> */}
                            <Button 
                                type="submit"
                                // fullWidth
                                variant="contained"
                                color="primary"
                            
                            >
                                Submit
                            </Button>
{/* 
                            <Button
                                type="submit"
                                    // fullWidth
                                    variant="contained"
                                    onClick={reset}
                                    color="primary" 
                                    >
                                        Reset
                            </Button> */}
                    </Grid>
                </Form>
            </div>
    </Container>
    )
}

export default Resume
