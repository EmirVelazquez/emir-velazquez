import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ContactForm from "../ContactForm";
import "./Contact.css";

class ContactSection extends Component {
    state = {

    }

    render() {
        return (
            <Container fluid={true} id="contactSection">
                <Row>
                    <Col sm={"12"} style={{ padding: 0 }} >
                        <h1 id="contactHeader">Contact</h1>
                        <div className="sectionsSeparator"></div>
                    </Col>
                </Row>
                <Row className="contactRow">
                    <p>I am always interested in helping find solutions especially on ambitious or large projects. However, if you have any request or question <span className="usersNameText">{this.props.userContact}</span>, don't hesitate to <span className="emphasisText">contact  me</span> using the form below. I am a huge coffee aficionado, so if you'd rather do it in person even better. <span className="emphasisText">Let's get together</span> and grab a cup, on me.</p>
                </Row>
                <Row className="contactRow">
                    <Container fluid={true}>
                        <Row>
                            <Col sm="4" style={{ padding: 0 }}>
                                <ContactForm namePlaceholder={this.props.userContact} />
                            </Col>
                            <Col sm="8">
                                <div style={{ textAlign: "center" }}>
                                    <h1 style={{ fontSize: 50, color: "#FFFFFF" }}>Google Map Here</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        )
    }
}

export default ContactSection;