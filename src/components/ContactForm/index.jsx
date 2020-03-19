import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import "./ContactForm.css";
import emailjs from "emailjs-com";

class ContactForm extends Component {

    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        messageSent: "none",
        inCompleteBoxes: "none"
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.name !== "" && this.state.email !== "" && this.state.subject !== "" && this.state.message !== "") {
            const { name, email, subject, message } = this.state
            const date = new Date();

            let templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message_html: message,
                current_date: date
            }

            emailjs.send(
                "portfolio_contact",
                "template_PjAkq7Sh",
                templateParams,
                "user_PsuwnKfcCDVL8Q9Uxn9LO"
            )
            this.resetForm()
        } else {
            this.setState({ inCompleteBoxes: "block" })
        }
    }

    resetForm() {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            messageSent: "block",
            inCompleteBoxes: "none"
        })
    }

    handleChange = (param, e) => {
        this.setState({
            [param]: e.target.value,
            messageSent: "none",
            inCompleteBoxes: "none"
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} style={{ marginBottom: "10%" }}>
                <Row form>
                    <Col sm={6}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this, "name")}
                                placeholder="Full Name"
                                className="formField notMsgBox" />
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this, "email")}
                                placeholder="Email"
                                className="formField notMsgBox" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col sm={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleChange.bind(this, "subject")}
                                placeholder="Subject"
                                className="formField notMsgBox" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col sm={12}>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange.bind(this, "message")}
                                placeholder="Message" rows={5}
                                className="formField" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormFeedback className="msgSuccess" style={{ display: `${this.state.messageSent}` }}>Message Sent!</FormFeedback>
                        <FormFeedback className="msgNotSuccess" style={{ display: `${this.state.inCompleteBoxes}` }}>Please ensure all boxes are complete.</FormFeedback>
                    </Col>
                    <Col sm={6}>
                        <Button type="submit" className="formSubmitBtn">Send</Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default ContactForm;