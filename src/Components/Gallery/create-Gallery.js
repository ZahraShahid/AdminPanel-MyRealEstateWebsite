//Responsible for creating a new Team Member 
import React, { useState } from "react";
import axios from 'axios';
import GalleryForm from "./GalleryForm";

import Sidebar from "../TeamMember/Sidebar";

// CreateTeamMember Component
const CreateGallery = () => {
const [formValues, setFormValues] =
	useState({image: ''});
// onSubmit handler
const onSubmit = GalleryObject => {
	axios.post(
'http://localhost:4000/gallerys/create-gallery',
	GalleryObject)
	.then(res => {
		if (res.status === 200)
		alert('Gallery successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return team member form
return(
	<GalleryForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Gallery
	</ GalleryForm>
    )
}

// Export CreateTeamMember Component
export default CreateGallery;