import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Joi from "@hapi/joi";
import { useForm } from '../../components/useForm';
import Controls from "../controls/Controls";


const useStyles = makeStyles((theme) => ({

    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
 
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));


  const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


const index = () => {
    const classes = useStyles()


    const [value, setValue] = useState('female');
    
    const handleChange = (event) => {
      setValue(event.target.value);
    };


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."

        if ('middleName' in fieldValues)
            temp.middleName = fieldValues.middleName ? "" : "This field is required."

        
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."

        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."

        if ('address' in fieldValues)
            temp.address = fieldValues.address ? "" : "This field is required."    

        if ('phone' in fieldValues)
            temp.phone = fieldValues.phone.length > 9 ? "" : "Minimum 10 numbers required."

        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })


        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);



    return (
        <>
            <Grid item xs={12} sm={4}>
                <Controls.Input
                    name="firstName"
                    label="FirstName"
                    value={values.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Controls.Input
                    name="middleName"
                    label="MiddleName"
                    value={values.middleName}
                    onChange={handleInputChange}
                    error={errors.middleName}
                    fullWidth
                    required
                />             
            </Grid>          
            <Grid item xs={12} sm={4}>
                <Controls.Input
                    name="lastName"
                    label="LastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    fullWidth
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Controls.Input
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                    fullWidth
                    required
                 />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Controls.Input
                    label="Address"
                    name="address"
                    value={values.address}
                    onChange={handleInputChange}
                    error={errors.address}
                    fullWidth
                    required
                 />                           
            </Grid>          
            <Grid item xs={12} sm={6}>
                <Controls.Input
                    label="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    type="number"
                    fullWidth
                    required
                />
            </Grid>   

                    
            <Grid item xs={12} sm={6}>
                <Controls.Input
                    label="CitizenShip Number"
                    name="citizenshipno"
                    value={values.citizenshipno}
                    onChange={handleInputChange}
                    error={errors.citizenshipno}
                    fullWidth
                    required
                />
            </Grid>   

            <Grid item xs={12} sm={6} style={{marginBottom:20}}>
                <Controls.DatePicker
                    name="birthday"
                    label="Birthday"
                    fullWidth
                    value={values.birthday}
                    onChange={handleInputChange}
                    required
                />   
            </Grid>        

            <Grid item xs={12} sm={6} >
                        {/* <FormControl>
                            <FormLabel>Gender </FormLabel>
                                <RadioGroup row 
                                    name="gender"
                                    value={value} 
                                    onChange={handleChange}
                                    >
                                    <FormControlLabel value="female" control={<Radio />} label="Female"  />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl> */}
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
            </Grid> 
            
        </>
    )
}

export default index
