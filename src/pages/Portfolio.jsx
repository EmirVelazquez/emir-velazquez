import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "reactstrap";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const Portfolio = props => {

    return (
        <Container id="portFolioContainer" fluid={true}>
            <Row>
                <Col sm={"12"}>
                    <h1>Hello {props.userFirstName},</h1>
                    <h1>my name is Emir Velazquez</h1>
                    <Typist cursor={{ show: false }}>
                        <h2>I love to develop and collaborate.</h2>
                        <Typist.Backspace count={34} delay={1000} />
                        <h2>I'm a huge fan of design thinking.</h2>
                        <Typist.Backspace count={34} delay={1000} />
                        <h2>I enjoy getting things done.</h2>
                    </Typist>
                </Col>
            </Row>
        </Container>
    )

}

export default Portfolio;