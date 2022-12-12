import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './css/Yogaform.css';


const slots = [
    {
        value: '6am-7am',
        label: '6am-7am',
    },
    {
        value: '7am-8am',
        label:'7am-8am',
    },
    {
        value: '8am-9am',
        label: '8am-9am',
    },
    {
        value: '5pm-6pm',
        label:'5pm-6pm',
    },
]

const genderOptions = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value:'Female',
        label: 'Female',
    },
    {
        value: 'Others',
        label: 'Others',
    },
]

function Yogaform(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [dob,setDOB] = useState();
    const [gender,setGender] = useState();
    const [slot,setSlot] = useState();
    const [response,setResponse] = useState("");

    const sendDetails = async () => {
        const res = await fetch('http://localhost:8001/yoga/insert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name:name,
                email:email,
                phoneNumber:phoneNumber,
                dob:dob,
                gender:gender,
                slot:slot,
            })
        })
        var body = await res.json();
        setResponse(body.message);
    }

    return(
        <div className='Yogaform'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <div>

                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                />
                <br/>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                />
                <br/>
                <TextField
                    required
                    id="outlined-required"
                    label="Mobile Number"
                    defaultValue=""
                    value={phoneNumber}
                    onChange={(e)=>{
                        setPhoneNumber(e.target.value);
                    }}
                />

                <br/>
                <TextField
                    required
                    id="outlined-number"
                    label="DOB"
                    type="Date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={dob}
                    onChange={(e)=>{
                        setDOB(e.target.value);
                    }}
                />
                <br/>
                <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="Gender"
                    value={gender}
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}
                >
                    {genderOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br/>
                <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="Slots Available"
                    value={slot}
                    onChange={(e)=>{
                        setSlot(e.target.value);
                    }}
                >
                    {slots.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br/>
                <TextField
                    disabled
                    required
                    id="outlined-required"
                    label="Amount"
                    defaultValue="500"
                />
                <br/><br/>
                <Button 
                    variant="contained"
                    onClick={async ()=>{
                        await sendDetails();
                    }}
                >
                    Submit
                </Button>
                <br/><br/>
                {response}
            </div>
            </Box>
        </div>
    );
}

export default Yogaform;