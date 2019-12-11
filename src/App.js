import React, { useState} from 'react';
import './App.css';
import TeamMemberForm from './MemberForm';
import TeamMembers from './Form';

function App() {
  
  const [teamMembers, setTeamMembers] = useState([
    {
    name: 'Kyle',
    role: 'Web Dev',
    email: 'kpace2296@gmail.com'
    }
  ]);
  console.log(teamMembers);

  const addNewTeamMember = teamMember => {
    const newMember = {
      name: teamMember.title,
      role: teamMember.role,
      email: teamMember.email
    };

    const NewTeamMembersCollection = [ ...teamMembers, newMember];
    setTeamMembers(NewTeamMembersCollection);
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamMemberForm addNewTeamMember={addNewTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
