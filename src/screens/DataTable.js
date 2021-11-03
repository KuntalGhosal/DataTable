import { Button } from '@material-ui/core';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GET_DATA } from '../actions/UserAction';
import { CustomizeToast } from '../components/CommonLogic';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";

export default function DataTable() {
    const history = useHistory();
    const dispatch = useDispatch()
    const store = useSelector((state) => state);
    const deleteData =(item,i) =>{
        var filterArr = store?.user?.dataListArray.filter((item,index)=>{
            return index !== i;
        })
        dispatch({type:GET_DATA, payload:filterArr});
        CustomizeToast("Deleted Successfully")
    }
    return (
        <div>
            <Button  onClick={()=>history.push('/')}>Add Data</Button>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Dob</td>
                    <td>Gender</td>
                    <td>Delete</td>
                </thead>
                {Array.isArray(store?.user?.dataListArray) && store?.user?.dataListArray?.map((item, i) => {
                    return <tbody key={i}>
                            <td >{item?.name}</td>
                            <td >{item?.age}</td>
                            <td >{item?.date}</td>
                            <td >{item?.gender}</td>
                            <td><Button key={i}  onClick={()=>deleteData(item,i)}>Delete <ToastContainer key={i} /></Button></td>
                        </tbody>
                })
                }
            </table>
        </div>
    )
}
