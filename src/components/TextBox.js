import React, { useState } from 'react'
import { Box, TextField,makeStyles,MenuItem } from '@material-ui/core'
//This is the textbox component and we  controled this component using props
const useStyle = makeStyles((theme) => ({
    TextBox:{
        margin:20,
        width:"60%",
        backgroundColor:"white",
        borderRadius:10,
        
        // breakpoints are using for responsive design

        [theme.breakpoints.down("lg")]:{
            width:"80%"
        }
    }
}));

export default function TextBox(props) {
    const [gender , ] = useState([ {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
   ]);
    const styles = useStyle();

    return (
        <Box
            component="form"
            sx={{
                width: "100%",
                maxWidth: '100%',
              }}
            noValidate
            autoComplete="on"
        >
            <TextField
                id="outlined-basic"
                variant="outlined"
                value={props.value}
                onChange={props.handleChange}
                type={props.type}
                required={props.required}
                label={props.label}
                className={styles.TextBox}
                select={props.select}
            >
                {props.select === true && gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
        </Box>
    )
}
