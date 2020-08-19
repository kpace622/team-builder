import React, { useState } from "react";

const TeamMemberForm = ({ addNewTeamMember})=> {
    const [teamMember, setTeamMember] = useState({
        name: '', 
        role: '',
        email: '',
    });

    const handleChanges = event => {
        setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
       
        addNewTeamMember(teamMember); 
        console.log(teamMember)
        setTeamMember({ name: '', role: '', email: ''})
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='memberName'>Name: </label>
            <input 
            id='memberName' 
            type='text' 
            placeholder='Enter name' 
            name='name' 
            value={teamMember.name}
            onChange={handleChanges}
            />
            <label htmlFor='memberRole'>Role: </label>
            <input 
            id='memberRole' 
            type='text' 
            placeholder='Enter role' 
            name='role' 
            value={teamMember.role}
            onChange={handleChanges}
            />
            <label htmlFor='memberEmail'>Email: </label>
            <input 
            id='memberEmail' 
            type='email' 
            placeholder='Enter email' 
            name='email' 
            value={teamMember.email}
            onChange={handleChanges}
            />
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default TeamMemberForm