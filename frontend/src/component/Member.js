import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import {Button} from "@mui/material";

export default function Member() {
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[mail,setMail] = useState('')
    const[code,setCode] = useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const member={name,age,mail,code}
        console.log(member)
        fetch("http://localhost:8080/member/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(member)
        }).then(()=>{
            console.log("New Student added")
        })
    }

    return (
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
                    id="outlined-multiline-flexible"
                    placeholder="Nguyễn Văn A"
                    label="Name"
                    multiline
                    maxRows={4}
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    placeholder="18"
                    label="Age"
                    multiline
                    maxRows={4}
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    placeholder="SE199999"
                    label="Code"
                    multiline
                    maxRows={4}
                    value={code}
                    onChange={(e)=>setCode(e.target.value)}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    placeholder="anvse199999@fpt.edu.vn"
                    label="Mail"
                    multiline
                    maxRows={4}
                    value={mail}
                    onChange={(e)=>setMail(e.target.value)}
                />
            </div>
            <Button variant="contained" disableElevation onClick ={handleClick}>
                Submit
            </Button>
        </Box>
    );
}
