//Responsible for display all Team Members
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import GalleryTableRow from "./GalleryTableRow";

const GallerysList = () => {
const [gallerys, setGallerys] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/gallerys/")
	.then(({ data }) => {
		setGallerys(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return gallerys.map((res, i) => {
	return <GalleryTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
            <th>Image</th>
			
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default GallerysList;

