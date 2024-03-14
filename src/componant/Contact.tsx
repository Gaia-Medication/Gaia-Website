import { ArrowRight } from "react-feather";
/*import axios, { AxiosError } from "axios";
import { useState } from "react";

const Contact = () => {
    const apiKey = import.meta.env.VITE_BREVO_API_KEY;

    const [formData, setFormData] = useState({
        senderEmail: "",
        senderName: "",
        senderFirstName: "",
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
                        name: formData.senderFirstName + formData.senderName,
                    },
                    to: [
                        {
                            email: formData.recipientEmail,
                            name: formData.recipientName,
                        },
                    ],
                    subject: `Contact du site web Gaia-Medication de : ${formData.senderName} ${formData.senderFirstName}`,
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
                console.log("Erreur", e.message);
            }
        }
    };*/

const Contact = () => {


    return (
        <div id="contact" className="flex flex-col justify-center items-center h-[250px]">
            {/* <div id="contact" className="flex flex-col justify-center items-center h-[500px]"> */}
            <div className="flex flex-col w-[70%]">
                <p className="text-base sm:text-xl text-lime-500 font-semibold">Contactez-nous</p>
                <h2 className="text-4xl sm:text-6xl text-gray-800 font-semibold">Contact</h2>
            </div>
            <div className="h-full w-[90%] md:w-[70%] mt-10">
                {/* <form>
                    <div className="grid grid-cols-3 gap-4 h-[80%]">
                        <div>
                            <input
                                placeholder="Email"
                                type="email"
                                name="senderEmail"
                                value={formData.senderEmail}
                                onChange={handleChange}
                                className="border-b m-4 p-2 w-[80%] transition-all duration-300"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Prénom"
                                type="text"
                                name="senderFirstName"
                                value={formData.senderFirstName}
                                onChange={handleChange}
                                className="border-b m-4 p-2 w-[80%] transition-all duration-300"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Nom"
                                type="text"
                                name="senderName"
                                value={formData.senderName}
                                onChange={handleChange}
                                className="border-b m-4 p-2 w-[80%] transition-all duration-300"
                            />
                        </div>
                        <div className="col-span-full">
                            <textarea
                                placeholder="Votre message"
                                name="htmlContent"
                                value={formData.htmlContent}
                                onChange={handleContent}
                                className="border w-full h-full p-4 transition-all duration-300"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center p-8 w-full">
                        <button className="flex gap-2 lg:gap-4 px-8 py-3 bg-blue-100 text-blue-400 font-base lg:text-xl rounded-md hover:bg-blue-400 hover:text-white duration-300 items-center justify-center transition-all duration-300"
                            type="button" onClick={sendEmail}>
                            Envoyer l'email
                            <div className="lg:flex hidden">
                                <ArrowRight height={25} width={25} />
                            </div>
                            <div className="md:flex lg:hidden">
                                <ArrowRight height={20} width={20} />
                            </div>
                        </button>
                    </div>
                </form> */}
                <a href="mailto:contact@gaia-medication.com" className="flex gap-2 lg:gap-4 px-8 py-3 bg-blue-100 text-blue-400 font-base lg:text-xl rounded-md hover:bg-blue-400 hover:text-white duration-300 items-center justify-center transition-all duration-300">Contactez-nous
                    <div className="lg:flex hidden">
                        <ArrowRight height={25} width={25} />
                    </div>
                    <div className="md:flex lg:hidden">
                        <ArrowRight height={20} width={20} />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Contact;
