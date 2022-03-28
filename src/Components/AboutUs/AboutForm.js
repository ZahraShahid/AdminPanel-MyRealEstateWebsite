// Reusable Aboutform

import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormLabel, Button } from "react-bootstrap";

const AboutForm = (props) => {
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
		<FormLabel>Title1</FormLabel>
        <FormGroup>
			<Field name="title1" type="text"
				className="form-control" />
			<ErrorMessage
			name="title1"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Title2</FormLabel>
		<FormGroup>
			<Field name="title2" type="text"
				className="form-control" />
			<ErrorMessage
			name="title2"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Description</FormLabel>
		<FormGroup>
			<Field name="description" type="text"
				className="form-control" />
			<ErrorMessage
			name="description"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Link 1</FormLabel>
        <FormGroup>
			<Field name="link1" type="text"
				className="form-control" />
			<ErrorMessage
			name="link1"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Link 2</FormLabel>
        <FormGroup>
			<Field name="link2" type="text"
				className="form-control" />
			<ErrorMessage
			name="link2"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		<FormLabel>Link 3</FormLabel>
        <FormGroup>
			<Field name="link3" type="text"
				className="form-control" />
			<ErrorMessage
			name="link3"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Link 4</FormLabel>
        <FormGroup>
			<Field name="link4" type="text"
				className="form-control" />
			<ErrorMessage
			name="link4"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Link 5</FormLabel>
        <FormGroup>
			<Field name="link5" type="text"
				className="form-control" />
			<ErrorMessage
			name="link5"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Link 6</FormLabel>
        <FormGroup>
			<Field name="link6" type="text"
				className="form-control" />
			<ErrorMessage
			name="link6"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Link 7</FormLabel>
        <FormGroup>
			<Field name="link7" type="text"
				className="form-control" />
			<ErrorMessage
			name="link7"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Sell Property</FormLabel>
        <FormGroup>
			<Field name="SellProperty" type="text"
				className="form-control" />
			<ErrorMessage
			name="SellProperty"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Daily Apartment</FormLabel>
        <FormGroup>
			<Field name="DailyApartment" type="text"
				className="form-control" />
			<ErrorMessage
			name="DailyApartment"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<FormLabel>Family House</FormLabel>
        <FormGroup>
			<Field name="FamilyHouse" type="text"
				className="form-control" />
			<ErrorMessage
			name="FamilyHouse"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Testiminial</FormLabel>
        <FormGroup>
			<Field name="testimonial" type="text"
				className="form-control" />
			<ErrorMessage
			name="testimonial"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel>Client Say</FormLabel>
        <FormGroup>
			<Field name="ClientSay" type="text"
				className="form-control" />
			<ErrorMessage
			name="ClientSay"
			className="d-block invalid-feedback"
			component="span"
			/>
			</FormGroup>
			<FormLabel>Line 1</FormLabel>
        <FormGroup>
			<Field name="line1" type="text"
				className="form-control" />
			<ErrorMessage
			name="line1"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel> Say 1</FormLabel>
        <FormGroup>
			<Field name="say1" type="text"
				className="form-control" />
			<ErrorMessage
			name="say1"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormLabel> Say 2</FormLabel>
        <FormGroup>
			<Field name="say2" type="text"
				className="form-control" />
			<ErrorMessage
			name="say2"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
			<FormLabel>Client Name1</FormLabel>
        <FormGroup>
			<Field name="ClientName1" type="text"
				className="form-control" />
			<ErrorMessage
			name="ClientName1"
			className="d-block invalid-feedback"
			component="span"
			/>
			</FormGroup>
			<FormLabel>Client Name2</FormLabel>
        <FormGroup>
			<Field name="ClientName2" type="text"
				className="form-control" />
			<ErrorMessage
			name="ClientName2"
			className="d-block invalid-feedback"
			component="span"
			/>
			</FormGroup>
			
			<FormLabel>Client Position 1</FormLabel>
        <FormGroup>
			<Field name="ClientPosition1" type="text"
				className="form-control" />
			<ErrorMessage
			name="ClientPosition1"
			className="d-block invalid-feedback"
			component="span"
			/>
			</FormGroup>
			<FormLabel>Client Position 2</FormLabel>
        <FormGroup>
			<Field name="ClientPosition2" type="text"
				className="form-control" />
			<ErrorMessage
			name="ClientPosition2"
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


export default AboutForm;