import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import WorkIcon from '@material-ui/icons/Work';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import Swal from 'sweetalert2';


const useStyles = makeStyles((theme) => ({

    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },

  }));

const index = () => {

    const classes = useStyles();

    const experienceTemp = {organizationName:"",organizationNature:"",jobTitle:"",position:"",duration:""}
    const [experiences,setExperiences] = useState([experienceTemp]);
    const addExperience = () => {
        setExperiences([...experiences, experienceTemp])
    }

    // const handleTrainingChange = (e, index) => {
    //     const updatedTrainings = trainings.map((training, i) => index == i ? 
    //     Object.assign(training, {[e.target.name]:e.target.value})
    //     : training
    //     );
    //     setUsers(updatedtrainings);
    // }

    const handleDeleteExperience = (index) => {
        const filteredExperiences = [...experiences];
        filteredExperiences.splice(index, 1);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setExperiences(filteredExperiences);
              Swal.fire(
                'Deleted!',
                'Form has been deleted.',
                'success'
              )
            }
        })
    }

 
    const [duration, setDuration] = useState('');

    const handleDurationChange = (event) => {
      setDuration(event.target.value);
    };

    
    const [position, setPosition] = useState('');

    const handlePositionChange = (event) => {
      setPosition(event.target.value);
    };



    return (
        <>
            <Grid item xs={12} style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
                <Avatar className={classes.avatar}>
                     <WorkIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" gutterBottom >
                     Work Experience
                </Typography>
            </Grid>

                        {
                            experiences.map((experience, index) => (
                                <>
                                    <Grid item xs={12}  style={{display:'flex'}}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="h6" style={{marginTop:20}} color='textSecondary'> 
                                                Organization Name *
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>  
                                            <TextField
                                                    autoComplete="Oname"
                                                    name="organizationName"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="organizationName"
                                                    autoFocus
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}  style={{display:'flex'}}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="h6" style={{marginTop:20}} color='textSecondary'> 
                                                Nature of Organization *
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>  
                                            <TextField
                                                    autoComplete="Nname"
                                                    name="organizationNature"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="organizationNature"
                                                    autoFocus
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}  style={{display:'flex'}}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="h6" style={{marginTop:20}} color='textSecondary'> 
                                                Job Title *
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8}>  
                                            <TextField
                                                    autoComplete="Jtitle"
                                                    name="jobTitle"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="jobTitle"
                                                    autoFocus
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}  style={{display:'flex'}}>
                                        <Grid item xs={12} sm={4}>
                                            <Typography variant="h6" style={{marginTop:20}} color='textSecondary'> 
                                                Job Level *
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={8} >  
                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">Level</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={position}
                                                    onChange={handlePositionChange}
                                                    label="Position "
                                                    name="position"
                                                    >
                                                <MenuItem value="">
                                                    <em>----</em>
                                                </MenuItem>
                                                    <MenuItem value={0}>Top Level</MenuItem>
                                                    <MenuItem value={1}>Senior Level</MenuItem>
                                                    <MenuItem value={2}>Mid Level</MenuItem>
                                                    <MenuItem value={3}>Entry Level</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}  style={{display:'flex'}}>
                                        <Grid item xs={12} sm={4} style={{marginTop:20}}>
                                            <Typography variant="h6" color='textSecondary'>
                                                Duration *
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12} sm={8} style={{display:'flex',justifyContent:'space-evenly'}}>  
                                            <Grid item xs={12}>
                                                <TextField
                                                    name="duration"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="duration"
                                                    type="number"
                                                    // label="Training Name"
                                                    autoFocus
                                                    
                                                />
                                            </Grid>
                                                    &nbsp;&nbsp;&nbsp;
                                            <Grid item xs ={12}>
                                                <FormControl variant="outlined" fullWidth>
                                                    <InputLabel id="demo-simple-select-outlined-label">Duration</InputLabel>
                                                        <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={duration}
                                                                onChange={handleDurationChange}
                                                                label="Duration"
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={7}>week</MenuItem>
                                                            <MenuItem value={30}>Month</MenuItem>
                                                            <MenuItem value={365}>Year</MenuItem>
                                                        </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <IconButton  onClick={() => handleDeleteExperience(index)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </>

                        ))}

                        <Grid item xs={12} style={{marginTop:20}}>
                                <Button variant="contained" color="secondary" onClick={addExperience}>
                                    Add Another Experience
                                </Button>
                                </Grid>
        </>
    )
}

export default index
