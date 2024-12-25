import React, { useState } from 'react';

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Form.css';
import axios from "axios";


const MembersForm = () => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [sucessmessage, setSuccessMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !mobile || !email || !message) {
            setError("please fill the all fields.");
            return;
        }

        const MembersData = { name, mobile, email, message };

        axios.post('http://localhost:8080/MembersController/Insert', MembersData)
            .then(response => {
                console.log(response.data);
                setSuccessMessage("Form submit successfully!");
                setName("");
                setMobile("");
                setEmail("");
                setMessage("");
                setError("");
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                setError("Failed to submit,please try again");
            });
    };

    return (
        <Form className="responsive-border" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="mobile">Mobile Number</Label>
                <Input
                    type="tel"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Message">Message</Label>
                <Input
                    type="text"
                    id="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </Input>
            </FormGroup>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {sucessmessage && <p style={{ color: "green" }}>{sucessmessage}</p>}
            <Button className="send">Enquire</Button>
        </Form>
    );
};
export default MembersForm;





