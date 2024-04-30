import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validation = Yup.object().shape({
  name: Yup.string().required('Your name is required'),
  email: Yup.string().email('Invalid email address').required('Your email is required'),
  phone: Yup.string()
    .matches(/^(\+?\d{1,2}[\s-]?)?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/, 'Invalid phone number')
    .required('Your phone number is required'),
  numPeople: Yup.number().min(1, 'Number of people must be at least 1').required('Number of people is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
});

const Reservation = ({ show, handleClose, handleShow }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Make a Reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            numPeople: 1,
            date: '',
            time: '',
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log(values);
            handleClose();
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
              <Form.Label htmlFor="name">Name</Form.Label>
                <Field type="text" className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`} id="name" name="name" />
                <ErrorMessage name="name" component="div" className="invalid-feedback" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label htmlFor="email">Email Address</Form.Label>
                <Field type="email" className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`} id="email" name="email" />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label htmlFor="phone">Phone Number</Form.Label>
                <Field type="tel" className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`} id="phone" name="phone" />
                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNumPeople">
              <Form.Label htmlFor="numPeople">Number of People</Form.Label>
                <Field type="number" min="1" className={`form-control ${touched.numPeople && errors.numPeople ? 'is-invalid' : ''}`} id="numPeople" name="numPeople" />
                <ErrorMessage name="numPeople" component="div" className="invalid-feedback" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDate">
              <Form.Label htmlFor="date">Select Date</Form.Label>
                <Field type="date" className={`form-control ${touched.date && errors.date ? 'is-invalid' : ''}`} id="date" name="date" />
                <ErrorMessage name="date" component="div" className="invalid-feedback" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTime">
                <Form.Label htmlFor="time">Select Time</Form.Label>
                <Field type="time" className={`form-control ${touched.time && errors.time ? 'is-invalid' : ''}`} id="time" name="time" />
                <ErrorMessage name="time" component="div" className="invalid-feedback" />
              </Form.Group>
              <Button variant="warning" className="rounded-pill" type="submit">Make Reservation</Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default Reservation;