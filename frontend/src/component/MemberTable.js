import * as React from 'react';
import { useState, useEffect } from 'react';
import { Table, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './MemberTable.css'

export default function TableRowColumnSpan() {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState({ id: null, role: '' });

    useEffect(() => {
        fetch('http://localhost:8080/member/allUser')
            .then(res => res.json())
            .then(result => {
                setMembers(result);
            });
    }, []);

    const handleRoleChange = (memberId, newRole) => {
        // Update the role in the frontend display
        setMembers(prevMembers =>
            prevMembers.map(member =>
                member.id === memberId ? { ...member, role: newRole } : member
            )
        );

        // Send the role change request to the backend
        fetch(`http://localhost:8080/member/changeRole/${memberId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: newRole }),
        });
    };

    const styles = {
        scrollableEmail: {
            maxWidth: '100px', // Adjust this value to your preference
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
        },
    };

    return (
        <Table borderAxis="both">
            <thead>
                <tr>
                    <th rowSpan={2}>Name</th>
                    <th rowSpan={2}>Aged</th>
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
                {members.map(member => (
                    <tr key={member.id}>
                        <th scope="row">{member.name}</th>
                        <td>{member.age}</td>
                        <td className='scrollable-email' style={styles.scrollableEmail}>{member.mail}</td>
                        <td>{member.code}</td>
                        <td>{member.accountNonExpired ? 'True' : 'False'}</td>
                        <td>{member.accountNonLocked ? 'True' : 'False'}</td>
                        <td>
                            <IconButton
                                aria-label="more"
                                aria-controls="role-menu"
                                aria-haspopup="true"
                                onClick={() =>
                                    setSelectedMember({ id: member.id, role: member.role })
                                }
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <RoleMenu member={selectedMember} onSelectRole={handleRoleChange} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}


function RoleMenu({ member, onSelectRole }) {
    const handleRoleChange = newRole => {
        onSelectRole(member.id, newRole);
    };

    return (
        <Menu
            anchorEl={document.getElementById(`role-menu-${member.id}`)}
            open={Boolean(member.id)}
            onClose={() => onSelectRole(null, '')}
        >
            <MenuItem onClick={() => handleRoleChange('Admin')}>Change to Admin</MenuItem>
            <MenuItem onClick={() => handleRoleChange('SubAdmin')}>Change to SubAdmin</MenuItem>
        </Menu>
    );
}
