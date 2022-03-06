//Responsible for updating TeamMember data
import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamMemberForm from "./TeamMemberForm";

// EditTeamMember Component
const EditTeamMember = (props) => {
const [formValues, setFormValues] = useState({
    image: "",
	name: "",
	role: "",
	facebook: "",
    twitter: "",
	instagram: "",
	linkedin: "",
});
	
//onSubmit handler
const onSubmit = (teamMemberObject) => {
	axios
	.put(
		"http://localhost:4000/teamMembers/edit-teamMember/" +
		props.match.params.id,
		teamMemberObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Team Member successfully updated");
		props.history.push("/teamMember-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize Team Member form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/teamMembers/edit-teamMember/"
		+ props.match.params.id
	)
	.then((res) => {
		const { image, name, role, facebook, twitter, instagram, linkedin } = res.data;
		setFormValues({image, name, role, facebook, twitter, instagram, linkedin});
	})
	.catch((err) => console.log(err));
}, []);

// Return Team Member form
return (
	<TeamMemberForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Team Member
	</TeamMemberForm>
);
};

// Export EditTeamMember Component
export default EditTeamMember;
