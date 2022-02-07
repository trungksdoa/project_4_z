import React from 'react';
import emailjs from '@emailjs/browser';
import Auth from '../../api/Auth';
import { useParams } from 'react-router-dom';
const Forget_pass = () => {
    const [emails, setEmails] = React.useState("");
    async function GetByEmail(email) {
        await Auth.findByEmail(email).then(res => {
            console.log(res)
            sendEmail(res.data.password,res.data.last_name,email)
        }).catch(e => {
            alert(e.msg)
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        GetByEmail(emails);
    }
    return (
        <main id="tg-main" className="tg-main tg-haslayout profile_main">
            <div className="login_form" style={{
                padding: "15px",
                margin: "2rem auto 0px auto",
                width: "40rem"
            }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="to_email">Emails</label>
                        <input type="text" className="form-control" name="to_email" value={emails.toLowerCase()} onChange={(e) => setEmails(e.target.value)} />
                        {/* <p style={{ color: "red" }}>{formErrors.Fname}</p> */}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </main>
    )
}
const sendEmail = (newPasword, name, emails) => {
    return emailjs.send("service_xt5ybrk", "template_fikzmsk", {
        to_name: name,
        password: newPasword,
        to_email: emails
    },
        'user_1UXaoGqhOPJSi33AX5vWr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};
export default Forget_pass;