"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Loader from '../Loader/Loader';


const API = "https://ihl5xv97x3.execute-api.us-west-1.amazonaws.com/upload_project"
const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('password is required'),
    title1: Yup.string().required('Title is required'),
    subtitle1: Yup.string().required('Subtitle is required'),
    body1: Yup.string().required('Body content is required'),
});

export default function CommitDialog(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading,setLoading] = useState(false);
  const { bg, text, border } = alertColors['error'];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDelete = async (index) => {
    try {
      setLoading(true)
      const response = await axios.delete(API, {index})
      if (response) {
          if (response.status === 200){
            setSuccess('Delete: successfull.')
          }
      }
    }
    catch(error) {
        setError({title: 'Error found', body: 'Unable to process request at the moment.'})
    }
    finally {
      setLoading(false);
      props.onClose();
    }
  }


  const handleSubmit = async (formData) => {
    try {
        setLoading(true)
        if ('index' in formData && formData.index !== null) {
          const response = await axios.put(API, formData)
          if (response) {
              if (response.status === 200){
                setSuccess('Success: upload successfull.')
              }
          }
        }
        else {
          const response = await axios.post(API, formData)
          if (response) {
              if (response.status === 200){
                setSuccess('Success: upload successfull.')
              }
          }
        }
        
    }
    catch(error) {
        setError({title: 'Error found', body: 'Unable to process request at the moment.'})
    }
    finally {
      setLoading(false);
      props.onClose();
    }
  };

  const closeError = () => {
    setError(null)
  }

  const initialValues = {
    index: props.index ? props.index : null,
    email: '',
    password: '',
    title1: props.title1 ? props.title1 : '',
    subtitle1: props.subtitle1 ? props.subtitle1 : '',
    body1: props.body1 ? props.body1 : ''
  }

  return (
    <>
    {props.open && ( 
        <div style={styles.backdrop}>
        <div style={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.title}>Commit</h2>
            {error && 
            <div>
            <div className={`p-4 mb-4 border rounded-lg ${bg} ${text} ${border}`}
                role="alert"
                >
                <div className="flex justify-between items-center">
                    <h3 className="font-bold">{error && error.title}</h3>
                    {closeError && (
                    <button 
                        onClick={closeError}
                        className="ml-auto text-lg font-semibold hover:opacity-70"
                        aria-label="Close alert"
                    >
                        &times;
                    </button>
                    )}
                </div>
                <p style={alertColors.error}>{error && error.body}</p>
                </div>
            </div>}
            {success && 
            <div>
            <div className={`p-4 mb-4 border rounded-lg ${bg} ${text} ${border}`}
                role="alert"
                >
                <div className="flex justify-between items-center">
                    <h3 style={alertColors.success}>{success && success.title}</h3>
                    {closeError && (
                    <button 
                        onClick={closeError}
                        className="ml-auto text-lg font-semibold hover:opacity-70"
                        aria-label="Close alert"
                    >
                        &times;
                    </button>
                    )}
                </div>
                </div>
            </div>}
            {
              loading && <Loader />
            }
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                const formData = {
                ...values,
                imageBase64: preview
                };
                handleSubmit(formData);
                setSubmitting(false);
            }}
            >
            {({ isSubmitting, values }) => (
                <Form>
                <div className="p-6 space-y-6">
                    <div style={styles.list}>
                        <div>
                            <label htmlFor="title1" className="block text-sm font-medium text-white mb-1">
                            Email
                            </label>
                            <Field
                            name="email"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label htmlFor="title1" className="block text-sm font-medium text-white mb-1">
                            Password
                            </label>
                            <Field
                            name="password"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Title Field */}
                        <div>
                            <label htmlFor="title1" className="block text-sm font-medium text-white mb-1">
                            Title
                            </label>
                            <Field
                            name="title1"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="title1" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Subtitle Field */}
                        <div>
                            <label htmlFor="subtitle1" className="block text-sm font-medium text-white mb-1">
                            Subtitle
                            </label>
                            <Field
                            name="subtitle1"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="subtitle1" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Body Content */}
                        <div>
                            <label htmlFor="body1" className="block text-sm font-medium text-white mb-1">
                            Body Content
                            </label>
                            <Field
                            name="body1"
                            as="textarea"
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage name="body1" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Image Upload */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center py-2">
                            <label htmlFor="image-upload" className="cursor-pointer">
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <svg className="text-gray-400 h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="text-gray-600">
                                {selectedFile ? selectedFile.name : 'Click to upload an image'}
                                </p>
                                <button
                                type="button"
                                onClick={() => document.getElementById('image-upload').click()}
                                className="mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-white hover:bg-gray-50"
                                >
                                Choose File
                                </button>
                            </div>
                            </label>
                            {preview && (
                            <div className="mt-4 flex justify-center">
                                <img 
                                src={preview} 
                                alt="Preview" 
                                className="max-h-40 rounded-md object-cover"
                                />
                            </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className='flex gap-2 items-center m-2'>
                    <button
                    type="button"
                    onClick={props.onClose}
                    style={styles.closeButton}
                    >
                    Cancel
                    </button>
                               
                    <button
                    type="submit"
                    style={styles.submitButton}
                    disabled={isSubmitting}
                    >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    
                    {
                      values.index && 
                      <button
                      type="button"
                      style={styles.deleteButton}
                      disabled={isSubmitting}
                      >
                      Delete
                      </button>
                    }
                   
                </div>

                </Form>
            )}
            </Formik>
        </div>
        </div>
        )
    }
    </>
  );
}

const alertColors = {
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-300',
    },
    success: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      border: 'border-green-300',
    },
    warning: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
      border: 'border-yellow-300',
    },
    error: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-300',
    },
  };

const styles = {
    openButton: {
      background: 'transparent',
      color: 'white',
      border: '1px solid white',
      padding: '0.5rem 1rem',
      borderRadius: '999px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    dialog: {
      background: 'rgba(20, 20, 20, 0.9)', // darker dialog
      padding: '2rem',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '400px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      textAlign: 'left',
      color: '#f1f1f1',
    },
    
    list: {
      listStyle: 'none',
      padding: 0,
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      color: '#ddd', // lighter text for dark bg
    },
    title: {
      marginTop: 0,
      marginBottom: '1rem',
      fontSize: '1.5rem',
    },
    closeButton: {
      background: '#555',
      color: '#fff',
      border: 'none',
      padding: '0.5rem 1.25rem',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    submitButton: {
        background: '#555',
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1.25rem',
        borderRadius: '8px',
        cursor: 'pointer',
      },
    deleteButton: {
        background: '#e53935',       // Red color for delete
        color: '#fff',
        border: 'none',
        padding: '0.5rem 1.25rem',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        hover: {
          background: '#c62828',     // Darker red on hover
        }
      }
      
};