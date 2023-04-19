import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import CustomInput from '../../components/input/CustomInput';
import { forgotPassword } from '../../utils/api-call/forgotPassword';


const ForgotPassword = () => {

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    });

    return (
        <div className='containedLogin'>
            <h2 className='loginTitle'>Mot de passe oublié ? Entrer votre adresse mail</h2>
            <ToastContainer />
            <Formik
                initialValues={initialValues} //transforme en state
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    resetForm()
                    forgotPassword(values)
                        .then(response => {
                            toast.success('Un email de réinitialisation a été envoyé', {
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
                            if (error.response.data.message === "Aucun utilisateur avec cet e-mail n'a été trouvé") {
                                toast.error('Aucun utilisateur avec cet e-mail n\'a été trouvé', {
                                    position: "top-right",
                                    autoClose: 4000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            } else {
                                toast.error('Erreur lors de l\'envoi, veuillez verifier votre email', {
                                    position: "top-right",
                                    autoClose: 4000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                            }
                            setSubmitting(false);
                        });
                }}
            >
                {({ values, handleChange, errors, touched, isSubmitting }) => {
                    return (
                        <Form className='formLogin'>
                            <CustomInput
                                name='email'
                                label='Email'
                                type='email'
                                value={values.email}
                                onChange={handleChange}
                                errors={touched.email && errors.email}
                                variant='outlined'
                            />
                            <ErrorMessage name='email' />
                            <LoadingButton type='submit' loading={isSubmitting}>Envoyer</LoadingButton>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default ForgotPassword;

