import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import { IconButton } from '@material-ui/core';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));


  const top100Works = [
    { title: "Php" },
    { title: "React"},
    { title: "JavaScript"},
    { title: "Laravel" },
    { title: "Python" },
    { title: "React Native" },
    { title: "Ruby on Rails" },
    { title: "Photoshop"},
    { title: 'Communication'},
    { title: 'Maketing'},
    { title: 'Wordpress' },
    { title: 'Git'},
    { title: 'Management'},
    { title: 'Android' },
    { title: 'Accounting'},
    { title: "Asp.Net"},
    { title: 'Taxation'},
    { title: 'Interpersonal' },
    { title: 'Ui/Ux'},
    { title: 'Writing'},
    { title: 'Administration'},
    { title: 'Data Analysis'},
    { title: 'Structural Analysis'},
    { title: "Html" },
    { title: 'Css' },
    { title: 'Vue js' },
    { title: 'Redux' },
    { title: 'Animation' },
    { title: 'Data Manipulation'},
    { title: 'Data Entry'},
    { title: 'Data Visualization'},
    { title: 'Database Management '},
    { title: 'Data Mining'},
    { title: 'Travel coordination'},
    { title: 'Maintenance'},
    { title: 'Photography'},
    { title: 'Illustrator'},
    { title: 'Market Research'},
    { title: 'Video Editor'},
    { title: 'Digital Illustrations'},
    { title: 'Welding'},
    { title: 'Digital Painting'},
    { title: 'Film Editing'},
    { title: 'Videography'},
    { title: 'Video Production'},
    { title: 'Vendor Management'},
    { title: 'Vector Illustration'},
    { title: 'Event Management'},
    { title: 'Book Keeping'},
    { title: 'Broadcasting' },
    { title: 'Brand Management'},
    { title: 'Mobile Application Development'},
    { title: 'Fashion Designing'},
    { title: 'Cinematography'},
    { title: 'Information Management'},
    { title: 'Facility Management'},
    { title: 'JQuery'},
    { title: 'Node js'},
    { title: 'Ajax'},
    { title: 'Django Framework'},
    { title: 'Retail Banking'},
    { title: 'Art and Sketching'},
    { title: 'Laboratory'},
    { title: 'Loan Management'},
    { title: 'Software Installation'},
    { title: 'Network Architecture' },
    { title: 'News Reporting'},
    { title: 'Operation Management'},
    { title: 'Project Management'},
    { title: 'Quality Assurance'},
    { title: 'Sass' },
  ];

const index = () => {

    const classes = useStyles();

    const userTemp = {level:"",educationProgram:"",educationalBoard:"",instituteName:"",securedMarks:"",marks:"",graduationYear:"",month:"",skills:""};
    const [users,setUsers] = useState([userTemp]);
    const addUser = () => {
        setUsers([...users, userTemp])
    }

    const onChange = (e, index) => {
        const updatedUsers = users.map((user, i) => index == i ? 
        Object.assign(user, {[e.target.name]:e.target.value})
        : user
        );
        setUsers(updatedUsers);
    }

    const removeUser = (index) => {
        const filteredUsers = [...users];
        filteredUsers.splice(index, 1);
        
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
                setUsers(filteredUsers);
              Swal.fire(
                'Deleted!',
                'Your form has been deleted.',
                'success'
              )
            }
          })
    }

    const [level, setLevel] = useState('');

    const handleLevelChange = (event) => {
      setLevel(event.target.value);
    };


    const [securedMark, setSecuredMark] = useState('');

    const handleSecuredMarkChange = (event) => {
      setSecuredMark(event.target.value);
    };

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <>
            
            <Grid item xs={12} style={{display: 'flex',flexDirection: 'column', alignItems: 'center',}}>
                            <Avatar className={classes.avatar}>
                                <LocalLibraryOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5" gutterBottom style={{marginBottom:20}}>
                                Academic Qualifications
                            </Typography>
                        </Grid>
                      
                            { 
                                users.map((user, index)=> (
                                <>
                                 <Grid item xs={12} sm={6} key={index} >
                                    <FormControl variant="outlined" fullWidth >
                                        <InputLabel id="demo-simple-select-outlined-label">Level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={level}
                                                onChange={handleLevelChange}
                                                label="Level"
                                                name="level"
                                            >
                                            <MenuItem value="">
                                            </MenuItem>
                                            <MenuItem value={0}>Masters</MenuItem>
                                            <MenuItem value={1}>Bachelors</MenuItem>     
                                            <MenuItem value={1}>Intermediate(+2)</MenuItem>
                                            <MenuItem value={3}>SLC(10th)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
    
                                <Grid item xs={12} sm={6} >
                                    <TextField
                                        autoComplete="eProgram"
                                        name="educationProgram"
                                        value={user.educationProgram}
                                        onChange={e => onChange(e, index)}
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="educationProgram"
                                        label="Education Program"
                                        autoFocus
                                    />
                                </Grid>
                            
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    autoComplete="eBoard"
                                    name="educationalBoard"
                                    value={user.educationalBoard}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="educationalBoard"
                                    label="Educational Board"
                                    autoFocus
                                />
                            </Grid>
                            
    
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    autoComplete="nInstitute"
                                    name="instituteName"
                                    value={user.instituteName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="instituteName"
                                    label="Name of the Institute"
                                    autoFocus
                                />
                            </Grid>
    
                            <Grid item xs={12}  style={{display:'flex'}}>
                                <Grid item xs={12} sm={3} style={{marginTop:20}}>
                                    <Typography  color='textSecondary'>
                                        Marks Secured In
                                    </Typography>
                                </Grid>
    
                                <Grid item xs={12} sm={9} style={{display:'flex',justifyContent:'space-evenly'}}>  
                                    <Grid item xs ={12}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel id="demo-simple-select-outlined-label">%/GPA</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={user.securedMark}
                                                    onChange={handleSecuredMarkChange}
                                                    label="SecuredMarksIn"
                                                    name="securedMarks"
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Percentage</MenuItem>
                                                <MenuItem value={2}>GPA</MenuItem>
                                                </Select>
                                        </FormControl>
                                    </Grid>    
                                        &nbsp;&nbsp;&nbsp;
    
                                    <Grid item xs={12}>
                                        <TextField
                                            name="marks"
                                            value={user.marks}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="marks"
                                            label="Marks Secured"
                                             autoFocus
                                            />
                                        </Grid>
                                   
                                </Grid>
                            </Grid>
    
                            <Grid item xs={12}  style={{display:'flex'}}>
                                <Grid item xs={12} sm={3} style={{marginTop:20}}>
                                    <Typography  color='textSecondary'>
                                        Graduation Year
                                    </Typography>
                                </Grid>
    
                                <Grid item xs={12} sm={9} style={{display:'flex',justifyContent:'space-evenly'}}>  
                                    <Grid item xs={12} >
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DatePicker 
                                            inputVariant="outlined"
                                            fullWidth
                                            value={selectedDate} 
                                            label="Year"
                                            name="graduationYear"
                                            onChange={handleDateChange} 
                                            views={['year']}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
    
                                        &nbsp;&nbsp;&nbsp;
    
                                    <Grid item xs={12}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils} fullWidth>
                                            <DatePicker 
                                                inputVariant="outlined"
                                                fullWidth
                                                value={selectedDate} 
                                                label="Month"
                                                name="month"
                                                onChange={handleDateChange} 
                                                views={['month']}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </Grid>
                                   
                                </Grid>
                            </Grid>
    
                      
                            <Grid item xs ={12}>
                                <Autocomplete
                                    multiple
                                    id="tags-standard"
                                    options={top100Works}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Skills"
                                        placeholder="Skills"
                                        name="skills"
                                    />
                                    )}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <IconButton  onClick={() => removeUser(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                          
                         </>
                        ))}
             
                     <Grid item xs={12} style={{marginTop:20,justifyContent:'center',alignItems:'center'}}>
                        <Button variant="contained" color="secondary" onClick={addUser}>
                            Add Another Education
                        </Button>
                     </Grid>
        </>
    )
}

export default index
