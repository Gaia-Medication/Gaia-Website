import axios, { AxiosError } from "axios";
import { useState } from "react";

const Contact = () => {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    const [formData, setFormData] = useState({
        senderEmail: "",
        senderName: "",
        recipientEmail: "contact@gaia-medication.com",
        recipientName: "gaia-medication",
        subject: "",
        htmlContent: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async () => {
        console.log(formData);
        try {
            const response = await axios.post(
                "https://api.brevo.com/v3/smtp/email",
                {
                    sender: {
                        email: formData.senderEmail,
                        name: formData.senderName,
                    },
                    to: [
                        {
                            email: formData.recipientEmail,
                            name: formData.recipientName,
                        },
                    ],
                    subject: `Contact du site web Gaia-Medication de: ${formData.senderName}`,
                    htmlContent: formData.htmlContent,
                },
                {
                    headers: {
                        accept: "application/json",
                        "api-key": apiKey,
                        "content-type": "application/json",
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            const e = error as AxiosError; // Assertion de type
            if (e.response) {
                // La requête a été faite et le serveur a répondu avec un statut de code
                // qui sort de la plage de 2xx
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.headers);
            } else if (e.request) {
                // La requête a été faite mais aucune réponse n'a été reçue
                console.log(e.request);
            } else {
                // Quelque chose s'est mal passé lors de la mise en place de la requête
                console.log("Error", e.message);
            }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-[400px]">
            <p className="text-base sm:text-xl text-lime-500 font-semibold">Contactez-nous</p>
            <h2 className="text-xl sm:text-4xl text-gray-800 font-semibold">Contact</h2>
            <div className="h-full w-[60%]">
                <form className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            placeholder="Email"
                            type="email"
                            name="senderEmail"
                            value={formData.senderEmail}
                            onChange={handleChange}
                            className="border-b m-4 p-2"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Nom"
                            type="text"
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange}
                            className="border-b m-4 p-2"
                        />
                    </div>
                    <div className=" col-span-full ">
                        <textarea
                            placeholder="Votre message"
                            name="htmlContent"
                            value={formData.htmlContent}
                            onChange={handleContent}
                            className="border m-4 w-full h-full p-4"
                        />
                    </div>
                    <button type="button" onClick={sendEmail}>
                        Envoyer l'email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
