import React, {useContext , useState} from "react";
import Swal from 'sweetalert2'; //  siteName: sweetalert2
import emailjs from '@emailjs/browser'; // Use Emailjs Site.


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const form = React.useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6wd9sai', 'template_blodk5i', form.current, 'lQ9PUPDuzP7hpyJ_4')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Your Information has been send',
                showConfirmButton: false,
                timer: 2000
            })
            setName("");
            setEmail("");
            setMessage("");
        }, (error) => {
            console.log(error.text);
        });
    };

    return  <AppContext.Provider value={{name, setName, email, setEmail, message, setMessage, sendEmail, form}}>{children}</AppContext.Provider>;
};

const GlobalContext = () => {
    return useContext(AppContext);
};

export {GlobalContext , AppProvider};