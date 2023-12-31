import React from "react";
import moduleClasses from "./Clock.module.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <div className={moduleClasses.outherContainer}>
                <p className="moduleClasses">Сейчас времени: {this.state.date.toLocaleTimeString()} </p>
            </div>
        );
    };
}

export default Clock;
