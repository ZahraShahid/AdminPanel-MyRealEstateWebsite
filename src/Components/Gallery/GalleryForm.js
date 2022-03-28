// Reusable TeamMember form

import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";

const GalleryForm = (props) => {
// const validationSchema = Yup.object().shape({
//     image: Yup.string().required("Image is required"),
// 	name: Yup.string().required("Rquired"),
//     role: Yup.string().required("Required"),
//     facebook: Yup.string().required("Required"),
//     twitter: Yup.string().required("Required"),
//     instagram: Yup.string().required("Required"),
//     linkedin: Yup.string().required("Required"),
// });
// console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} 
	// validationSchema={validationSchema}
	>
		<Form>
		<FormLabel> Image Link</FormLabel>
        <FormGroup>
			<Field name="image" type="text"
				className="form-control" />
			<ErrorMessage
			name="image"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		
		
		<div className="btn-width-set">
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</div>
		</Form>
	</Formik>
	</div>
);
};

export default GalleryForm;