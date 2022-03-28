//Responsible for updating TeamMember data
import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryForm from "./GalleryForm";

import Sidebar from "../TeamMember/Sidebar";

// EditTeamMember Component
const EditGallery = (props) => {
const [formValues, setFormValues] = useState({
    image: "",
	
});
	
//onSubmit handler
const onSubmit = (galleryObject) => {
	axios
	.put(
		"http://localhost:4000/gallerys/edit-gallery/" +
		props.match.params.id,
		galleryObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Gallery successfully updated");
		props.history.push("/gallery-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize Team Member form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/gallerys/edit-gallery/"
		+ props.match.params.id
	)
	.then((res) => {
		const { image } = res.data;
		setFormValues({image});
	})
	.catch((err) => console.log(err));
}, [props.match.params.id]);

// Return Team Member form
return (
	<GalleryForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Team Member
	</GalleryForm>
);
};

// Export EditTeamMember Component
export default EditGallery;
