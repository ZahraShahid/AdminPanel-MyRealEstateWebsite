// Responsible for displaying a single Team Member 
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TeamMemberTableRow = (props) => {
const { _id, image, name, role, facebook, twitter, instagram, linkedin } = props.obj;

const deleteTeamMember = () => {
	axios
	.delete(
"http://localhost:4000/teamMembers/delete-teamMember/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Team Member successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
    <td>{image}</td>
	<td>{name}</td>
	<td>{role}</td>
	<td>{facebook}</td>
    <td>{twitter}</td>
    <td>{instagram}</td>
    <td>{linkedin}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-teamMember/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteTeamMember}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TeamMemberTableRow;
