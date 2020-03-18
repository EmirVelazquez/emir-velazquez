import React, { Component } from "react";
import { Col } from "reactstrap";
import "./Tech.css";
import ReactLogo from "../../assets/techLogos/reactLogo.png";
import ExpressLogo from "../../assets/techLogos/expressLogo.png";
import AxiosLogo from "../../assets/techLogos/axiosLogo.png";
import DotEnvLogo from "../../assets/techLogos/dotenvLogo.png";
import NodeLogo from "../../assets/techLogos/nodeLogo.png";
import MongoLogo from "../../assets/techLogos/mongoLogo.png";
import CssLogo from "../../assets/techLogos/cssLogo.png";
import HtmlLogo from "../../assets/techLogos/htmlLogo.png";
import MaterializeLogo from "../../assets/techLogos/materializeLogo.png";
import MysqlLogo from "../../assets/techLogos/mysqlLogo.png";
import GoogleApiLogo from "../../assets/techLogos/googleApiLogo.png";
import HandlebarsLogo from "../../assets/techLogos/handlebarsLogo.png";
import CheerioLogo from "../../assets/techLogos/cheerioLogo.png";
import BootstrapLogo from "../../assets/techLogos/bootstrapLogo.png";
import JavascriptLogo from "../../assets/techLogos/javaScriptLogo.png";
import JqueryLogo from "../../assets/techLogos/jqueryLogo.png";
import ReactNative from "../../assets/techLogos/reactNative.png";
import Sequelize from "../../assets/techLogos/sequelizeLogo.png";
import Bcrypt from "../../assets/techLogos/bcryptLogo.png";
import ExpoLogo from "../../assets/techLogos/expoLogo.png";
import FigmaLogo from "../../assets/techLogos/figmaLogo.png";
import JwtLogo from "../../assets/techLogos/jwtLogo.png";
import TensorFlow from "../../assets/techLogos/tensorFlowLogo.png";
import Nodemailer from "../../assets/techLogos/nodemailerLogo.png";
import QuillLogo from "../../assets/techLogos/quillLogo.png";


class Tech extends Component {

    state = {
        Logopic: ""
    }

    componentDidMount = () => {
        this.setState({ Logopic: this.props.whichTech })
    }

    whichImageToUse = () => {
        if (this.state.Logopic === "React") {
            return ReactLogo;
        } else if (this.state.Logopic === "Express.js") {
            return ExpressLogo;
        } else if (this.state.Logopic === "Axios") {
            return AxiosLogo;
        } else if (this.state.Logopic === ".env") {
            return DotEnvLogo;
        } else if (this.state.Logopic === "Node.js") {
            return NodeLogo;
        } else if (this.state.Logopic === "MongoDB") {
            return MongoLogo;
        } else if (this.state.Logopic === "CSS") {
            return CssLogo;
        } else if (this.state.Logopic === "HTML") {
            return HtmlLogo;
        } else if (this.state.Logopic === "JavaScript") {
            return JavascriptLogo;
        } else if (this.state.Logopic === "MySQL") {
            return MysqlLogo;
        } else if (this.state.Logopic === "Google API's") {
            return GoogleApiLogo;
        } else if (this.state.Logopic === "Handlebars") {
            return HandlebarsLogo;
        } else if (this.state.Logopic === "Materialize") {
            return MaterializeLogo;
        } else if (this.state.Logopic === "Cheerio") {
            return CheerioLogo;
        } else if (this.state.Logopic === "Bootstrap") {
            return BootstrapLogo;
        } else if (this.state.Logopic === "React Native") {
            return ReactNative;
        } else if (this.state.Logopic === "Sequelize") {
            return Sequelize;
        } else if (this.state.Logopic === "Bcrypt") {
            return Bcrypt;
        } else if (this.state.Logopic === "Expo") {
            return ExpoLogo;
        } else if (this.state.Logopic === "Figma") {
            return FigmaLogo;
        } else if (this.state.Logopic === "JSON Webtoken") {
            return JwtLogo;
        }
        else if (this.state.Logopic === "Tensorflow") {
            return TensorFlow;
        }
        else if (this.state.Logopic === "Nodemailer") {
            return Nodemailer;
        }
        else if (this.state.Logopic === "Quill.js") {
            return QuillLogo;
        } else {
            return JqueryLogo;
        }
    }

    render() {
        return (
            <Col sm={"2"} className="techImageWrapper">
                <img src={this.whichImageToUse()} alt="Technology Logo" className="techImage" />
            </Col>
        )
    }
}

export default Tech;