'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { object, string } from 'yup';

const validationSchema = object().shape({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  comment: string().required('Comment is required'),
});

export default function CommentForm() {
  const handleCommentSubmit = (values: any, { resetForm }: any) => {
    // Handle saving the comment to your backend or storage here

    // Clear the comment form fields
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleCommentSubmit}
    >
      <Form className="my-4">
        <div className="flex flex-col gap-2">
          <Field
            className="border p-2 rounded"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <ErrorMessage component="div" name="name" className="text-red-500" />
          <Field
            className="border p-2 rounded"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <ErrorMessage component="div" name="email" className="text-red-500" />
          <Field
            className="border p-2 rounded"
            as="textarea"
            name="comment"
            placeholder="Your Comment"
            rows={4}
            required
          />
          <ErrorMessage
            component="div"
            name="comment"
            className="text-red-500"
          />
          <button
            className="border p-2 bg-green-500 text-black-100 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}
