import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { verifyUser } from '../../utils/api-call/verifyUser';
import { CircularProgress } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";

const Verify = () => {

    const { token } = useParams()
    const navigate = useNavigate()

    const [isVerified, setIsVerified] = useState(false)

    useEffect(() => {

        verifyUser(token)
            .then((response) => {
                if (response.data.message === "Votre compte a été vérifié avec succès.") {
                    setIsVerified(true)
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(
                    "Erreur lors de la verification",
                    {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }
                );
            });
    }, [token]);

    if (isVerified) {
        navigate("/login", {
            state: {
                successMessage: "Votre compte a été vérifié !",
            }
        })
    }

    return (
        <>
            <ToastContainer />
            <div>
                <h1>Vérification de votre compte</h1>
                <p>Veuillez patienter pendant que nous vérifions votre compte...</p>
                <CircularProgress />
            </div>
        </>

    )
}

export default Verify
