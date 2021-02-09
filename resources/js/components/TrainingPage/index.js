import React, { Fragment,useState } from 'react';
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
import ComputerIcon from '@material-ui/icons/Computer';
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

    const [duration, setDuration] = useState('');

    const handleDurationChange = (event) => {
      setDuration(event.target.value);
    };

    const trainingTemp = {trainingName:"",instituteName:"",duration:"",days:""}
    const [trainings,setTrainings] = useState([trainingTemp]);

    const addTraining = () => {
        setTrainings([...trainings, trainingTemp])
    }

    const handleTrainingChange = (e, index) => {
        const updatedTrainings = trainings.map((training, i) => index == i ? 
        Object.assign(training, {[e.target.name]:e.target.value})
        : training
        );
        setTrainings(updatedtrainings);
    }

    const handleDeleteTraining = (index) => {
        const filteredTrainings = [...trainings];
        filteredTrainings.splice(index, 1);

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
                setTrainings(filteredTrainings);
              Swal.fire(
                'Deleted!',
                'Your form has been deleted.',
                'success'
              )
            }
          })
    }
    
    return (
        <>
            <Grid item xs={12} style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
                <Avatar className={classes.avatar}>
                    <ComputerIcon/>
                </Avatar>
                <Typography component="h1" variant="h5" gutterBottom >
                    Training 
                </Typography>
            </Grid>
            {
                trainings.map((training, index) => (
                    <>
                        <Grid item xs={12}  style={{display:'flex'}} key={index}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h6" style={{marginTop:20}} color='textSecondary'>
                                    Name of the Training *
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>  
                                <TextField
                                    autoComplete="tname"
                                    name="trainingName"
                                    variant="outlined"
                                    onChange={e => handleTrainingChange(e, index)}
                                    required
                                    fullWidth
                                    id="trainingName"
                                                // label="Training Name"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                            <Grid item xs={12}  style={{display:'flex'}}>
                                <Grid item xs={12} sm={4} style={{marginTop:20}}>
                                    <Typography variant="h6" color='textSecondary'>
                                        Institute Name *
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>  
                                    <TextField
                                            autoComplete="iname"
                                            name="instituteName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="instituteName"
                                            // label="Training Name"
                                            autoFocus
                                    />
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
                                            name="days"
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
                            <IconButton  onClick={() => handleDeleteTraining(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </>
                          ))
                      }

                        <Grid item xs={12} style={{marginTop:20}}>
                                <Button variant="contained" color="secondary" onClick={addTraining}>
                                    Add Another Training
                                </Button>
                        </Grid>
            
            </>
    )
}

export default index
