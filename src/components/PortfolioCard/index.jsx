import React from "react";
import { Col, Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";
import "./PortfolioCard.css";
// import { useSpring, animated } from 'react-spring'

const PortfolioCard = props => {
    return (
        <Col sm={"6"} id="testCase">
            <Card style={{ backgroundColor: "#373737", height: "100%", color: "#FFFFFF", borderRadius: 5 }}>
                <div id="portfolioImageContainer">
                    <CardImg></CardImg>
                </div>
                <CardBody>
                    <CardTitle>{props.projectTitle}</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis corporis harum ut doloremque odio incidunt, enim labore quidem inventore. Rem necessitatibus facilis sapiente veniam repellat officia consequatur esse exercitationem labore.
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default PortfolioCard;