//Responsible for updating About data
import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutForm from "./AboutForm";
import Sidebar from "../TeamMember/Sidebar";

// EditAbout Component
const EditAbout = (props) => {
const [formValues, setFormValues] = useState({
    title1: "",
        
    title2: "",
    description: "",
    list1: "",
    list2: "",
    list3: "",
    list4: "",
    list5: "",
    list6: "",
    list7: "",

    SellProperty: "",
    DailyApartment: "",
    FamilyHouse: "",

    testimonial: "",
    ClientSay: "",
    line1: "",
    say1:"",
    say2: "",

    ClientName1:"",
    ClientName2: "",
    ClientPosition1:"",
    ClientPosition2: "",

   
});
	
//onSubmit handler
const onSubmit = (AboutObject) => {
	axios
	.put(
		"http://localhost:4000/abouts/edit-about/" +
		props.match.params.id,
		AboutObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("About page successfully updated");
		props.history.push("/About-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize Team Member form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/abouts/edit-about/"
		+ props.match.params.id
	)
	.then((res) => {
		const {   title1, title2,
		description,
		list1,
		list2,
		list3,
		list4,
		list5,
		list6,
		list7,
	
		SellProperty,
		DailyApartment,
		FamilyHouse,
	
		testimonial,
		ClientSay,
		line1,
		say1,
		say2,
	
		ClientName1,
		ClientName2,
		ClientPosition1,
		ClientPosition2 } = res.data;
		setFormValues({ title1, title2,
			description,
			list1,
			list2,
			list3,
			list4,
			list5,
			list6,
			list7,
		
			SellProperty,
			DailyApartment,
			FamilyHouse,
		
			testimonial,
			ClientSay,
			line1,
			say1,
			say2,
		
			ClientName1,
			ClientName2,
			ClientPosition1,
			ClientPosition2});
	})
	.catch((err) => console.log(err));
}, [props.match.params.id]);

// Return Team Member form
return (
	<AboutForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Team Member
	</AboutForm>
);
};

// Export EditTeamMember Component
export default EditAbout;