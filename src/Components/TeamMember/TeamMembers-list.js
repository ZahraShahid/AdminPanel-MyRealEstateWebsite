//Responsible for display all Team Members
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TeamMemberTableRow from "./TeamMemberTableRow";

const TeamMembersList = () => {
const [teamMembers, setTeamMembers] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/teamMembers/")
	.then(({ data }) => {
		setTeamMembers(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return teamMembers.map((res, i) => {
	return <TeamMemberTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
            <th>Image</th>
			<th>Name</th>
			<th>Role</th>
			<th>Facebook</th>
			<th>Twitter</th>
            <th>Instagram</th>
            <th>LinkedIn</th>
            <th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default TeamMembersList;

