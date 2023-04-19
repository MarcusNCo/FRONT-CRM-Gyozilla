import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import CustomInput from '../../components/input/CustomInput';
import { resetPassword } from '../../utils/api-call/resetPassword';
import { Navigate } from 'react-router-dom';

const ResetPassword = () => {
    const [token, setToken] = useState('');
    const [isReseted, setIsReseted] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const token = query.get('token');
        setToken(token);
    }, []);

    const initialValues = {
        password: '',
    };

    const validationSchema = Yup.object().shape({
        password: Yup.string().min(8, 'Il faut 8 caractères minimum').required('Mot de passe obligatoire'),
    });

    return (
        <div className='containedLogin'>
            <h2 className='loginTitle'>Réinitialiser votre mot de passe</h2>
            <ToastContainer />
            <Formik
                initialValues={initialValues} //transforme en state
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    resetForm()
                    values.token = token;
                    resetPassword(values)
                        .then(response => {
                            setIsReseted(true)
                            toast.success('Votre mot de passe a été réinitialisé', {
                                position: "top-right",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                            setSubmitting(false);
                        })
                        .catch(error => {
                            console.error(error);
                            toast.error('Erreur lors de la réinitialisation', {
                                position: "top-right",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            });
                            setSubmitting(false);
                        });
                }}
            >
                {({ values, handleChange, errors, touched, isSubmitting }) => {
                    if (isReseted) {
                        return (
                            <Navigate
                                to={{
                                    pathname: '/login'
                                }}
                            />
                        )
                    }
                    return (
                        <Form className='formLogin'>
                            <CustomInput
                                name='password'
                                label='Mot de passe'
                                type='password'
                                value={values.password}
                                onChange={handleChange}
                                errors={touched.password && errors.password}
                                variant='outlined'
                                secure='true'
                            />
                            <ErrorMessage name='password' />
                            <LoadingButton type='submit' loading={isSubmitting}>Réinitialiser</LoadingButton>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default ResetPassword
