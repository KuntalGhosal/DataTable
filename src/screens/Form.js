import React, { useEffect, useState } from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'
import TextBox from '../components/TextBox'
import { CustomizeToast, CustomizeToastError } from '../components/CommonLogic';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";
import { GET_DATA } from '../actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
    container: {
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: '8%',
        borderRadius: 10,
        padding: 20,
        backgroundColor: "#e6e6ff",
        [theme.breakpoints.down("lg")]: {
            marginLeft: "10%",
            marginRight: "10%",
        }

    },
    btn: {
        backgroundColor: "#d9d9d9",
        margin:8,
        "&:hover": {
            backgroundColor: "#9D88B8",
            color: "white"
        }
    }
}));

export default function Form() {

    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const styles = useStyle()
    const [dob, setDob] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("")
    const [arr,setArr ] = useState([]);

    useEffect(()=>{
        setArr([]);
    },[history])

    const handleChangeDob = (event) => {
        setDob(event.target.value);

    };
    const handleChangeName = (event) => {
        setName(event.target.value);

    };
    const handleChangeAge = (event) => {
        setAge(event.target.value);

    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);

    };

    const Submit = () =>{
    if(name !== "" && age !== "" && dob !== "" && gender !== ""){
       try{ arr.push({name:name,age:age,date:dob,gender:gender});
       Array.prototype.push.apply(arr,store?.user?.dataListArray);
        dispatch({type:GET_DATA,payload:arr});
        CustomizeToast("Data saved successfully");}catch(e){
            console.log(e);
        }

        // We are converting array to string because local storage can store only string properly

        var stringArr = JSON.stringify(arr);

        // try and catch is a promise

        try{
            localStorage.setItem('dataArr',stringArr);
    
        }catch (e){
            console.log(e);
        }
    }else{
        CustomizeToastError("All fields are required");
        
    }
    }
    // We have TextBox component and we are re using that
    return (
        <Box className={styles.container} sx={{ border: '2px solid black' }}> 
            <TextBox handleChange={handleChangeName} value={name} type="text" required={true} label="Nmae" select={false} />
            <TextBox handleChange={handleChangeAge} value={age} type="number" required={true} label="Age" select={false} />
            <TextBox handleChange={handleChangeDob} value={dob} type="date" required={true} label="" select={false} />
            <TextBox handleChange={handleChangeGender} value={gender} required={true} label="Gender" select={true} />
            <Button className={styles.btn} onClick={() =>{Submit()}}>Submit<ToastContainer/></Button>
            <Button className={styles.btn} onClick={()=>history.push('/dataTable')}>DataTable</Button>
        </Box>
    )
}
