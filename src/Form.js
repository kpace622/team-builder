import React from 'react';

const TeamMembers = props => {
    return (
        <div>
            {props.teamMembers.map(teamMember => (
                <div>
                    <h2>{teamMember.name}</h2>
                    <h2>{teamMember.role}</h2>
                    <h3>{teamMember.email}</h3>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers