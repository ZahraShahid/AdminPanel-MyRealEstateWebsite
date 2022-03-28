//Responsible for displaying About
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AboutTableRow from "./AboutTableRow";

const AboutList = () => {
const [abouts, setAbout] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/abouts/")
	.then(({ data }) => {
		setAbout(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return abouts.map((res, i) => {
	return <AboutTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
            <th>title1</th>
			<th>title2</th>
			<th>description</th>
			<th>list1</th>
			<th>list2</th>
            <th>list3</th>
            <th>list4</th>
            <th>list5</th>
            <th>list6</th>
			<th>list7</th>
			<th>sellProperty</th>
			<th>DailyApartment</th>
			<th>FamilyHouse</th>
            <th>testimonial</th>
            <th>ClientSay</th>
            <th>line1</th>
            <th>say1</th>
			<th>say2</th>
			<th>ClientName1</th>
			<th>ClientName2</th>
			<th>ClientPosition1</th>
            <th>ClientPosition2</th>
           
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default AboutList;