import * as React from 'react';
import Table from '@mui/joy/Table';
import {useEffect, useState} from "react";

export default function TableRowColumnSpan() {
    const[members, setMembers]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/member/allUser")
            .then(res=>res.json())
            .then((result)=>{
                setMembers(result);
            }
        )
    },[])
    return (
        <Table borderAxis="both">
            <thead>
            <tr>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>Age</th>
                <th rowSpan={2}>Mail</th>
                <th rowSpan={2}>Code</th>
                <th colSpan={2} style={{ textAlign: 'center' }}>
                    Status
                </th>
                <th rowSpan={2}>Role</th>
            </tr>
            <tr>
                <th>Expiration</th>
                <th style={{ borderRightWidth: 0 }}>Lock</th>
            </tr>
            </thead>
            <tbody>
            {members.map(member=>(
                <tr>
                    <th scope="row"> {member.name}</th>
                    <td>{member.age}</td>
                    <td>{member.mail}</td>
                    <td>{member.code}</td>
                    <td>{member.accountNonExpired ? 'True' : 'False'}</td>
                    <td>{member.accountNonLocked ? 'True' : 'False'}</td>
                    <td>{member.role}</td>
                </tr>
                )
            )}
            </tbody>
        </Table>
    );
}
