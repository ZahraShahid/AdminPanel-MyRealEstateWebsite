// Responsible for displaying a single Team Member 
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const GalleryTableRow = (props) => {
const { _id, image } = props.obj;

const deleteGallery = () => {
	axios
	.delete(
"http://localhost:4000/gallerys/delete-gallery/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Image successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
    <td>{image}</td>
	
	<td>
		<Link className="edit-link"
		to={"edit-gallery/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteGallery}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default GalleryTableRow;