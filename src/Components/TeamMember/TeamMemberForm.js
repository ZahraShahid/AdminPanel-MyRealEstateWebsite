// Reusable TeamMember form

import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";

const TeamMemberForm = (props) => {
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
		<FormLabel>Profile Image Link</FormLabel>
        <FormGroup>
			<Field name="image" type="text"
				className="form-control" />
			<ErrorMessage
			name="image"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Name</FormLabel>
		<FormGroup>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Role</FormLabel>
		<FormGroup>
			<Field name="role" type="text"
				className="form-control" />
			<ErrorMessage
			name="role"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Facebook Link</FormLabel>
        <FormGroup>
			<Field name="facebook" type="text"
				className="form-control" />
			<ErrorMessage
			name="facebook"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Twitter Link</FormLabel>
        <FormGroup>
			<Field name="twitter" type="text"
				className="form-control" />
			<ErrorMessage
			name="twitter"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Instagram Link</FormLabel>
        <FormGroup>
			<Field name="instagram" type="text"
				className="form-control" />
			<ErrorMessage
			name="instagram"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>LinkedIn Link</FormLabel>
        <FormGroup>
			<Field name="linkedin" type="text"
				className="form-control" />
			<ErrorMessage
			name="linkedin"
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

export default TeamMemberForm;
