// Responsible for displaying About page
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AboutTableRow = (props) => {
const { _id, title1, title2,
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
	ClientPosition2} = props.obj;

const deleteAboutUs = () => {
	axios
	.delete(
"http://localhost:4000/about/delete-about/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("About us successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
    <td>{title1}</td>
	<td>{title2}</td>
	<td>{description}</td>
	<td>{list1}</td>
    <td>{list2}</td>
    <td>{list3}</td>
    <td>{list4}</td>
	<td>{list5}</td>
	<td>{list6}</td>
	<td>{list7}</td>
	<td>{SellProperty}</td>
    <td>{DailyApartment}</td>
    <td>{FamilyHouse}</td>
    <td>{testimonial}</td>
	<td>{ClientSay}</td>
	<td>{line1}</td>
	<td>{say1}</td>
	<td>{say2}</td>
    <td>{ClientName1}</td>
    <td>{ClientName2}</td>
    <td>{ClientPosition1}</td>
	<td>{ClientPosition2}</td>
	<td>
		<Link className="edit-link"
		to={"edit-About/" + _id}>
		Edit
		</Link>
		
	</td>
	</tr>
);
};

export default AboutTableRow;