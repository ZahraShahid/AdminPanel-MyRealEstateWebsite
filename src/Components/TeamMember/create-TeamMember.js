//Responsible for creating a new Team Member 
import React, { useState } from "react";
import axios from 'axios';
import TeamMemberForm from "./TeamMemberForm";

// CreateTeamMember Component
const CreateTeamMember = () => {
const [formValues, setFormValues] =
	useState({image: '', name: '', role: '', facebook: '', twitter: '', instagram: '', linkedin: ''});
// onSubmit handler
const onSubmit = teamMemberObject => {
	axios.post(
'http://localhost:4000/teamMembers/create-teamMember',
	teamMemberObject)
	.then(res => {
		if (res.status === 200)
		alert('Team Member successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return team member form
return(
	<TeamMemberForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Team Member
	</ TeamMemberForm>
    )
}

// Export CreateTeamMember Component
export default CreateTeamMember
