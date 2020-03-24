import React, { Component } from "react";
import "./BackToTop.css";

class BackToTop extends Component {
    state = {
        intervalId: 0,
        pagePositionMoved: false
    }

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                this.setState({ pagePositionMoved: true })
            } else {
                this.setState({ pagePositionMoved: false })
            }
        })
        window.scrollTo(0, 0);
    }

    onScrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.numberOfPxToScroll);
    }

    scrollToTop = () => {
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    renderGoToTopButton = () => {
        if (this.state.pagePositionMoved) {
            return (
                <button id="backToTopBtn" onClick={this.scrollToTop}>
                    <div className="pyramidSide left">
                        <div className="innerSide"></div>
                    </div>
                    <div className="pyramidSide front">
                        <div className="innerSide"></div>
                    </div>
                    <div className="pyramidSide right">
                        <div className="innerSide"></div>
                    </div>
                    <div className="pyramidSide back">
                        <div className="innerSide"></div>
                    </div>
                </button>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderGoToTopButton()}
            </React.Fragment>
        )

    }
}

export default BackToTop;