import React from "react";
import { Title, Section, Btn } from "./Feedback.styled";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    countTotalFeedback =() => this.state.good + this.state.neutral + this.state.bad; 
    countPositiveFeedbackPercentage = () => Math.ceil((this.state.good + this.state.neutral) * 100 / (this.countTotalFeedback()));

    NeutralClick = () => {
        this.setState(prevState => {       
                return {
                    neutral: prevState.neutral + 1,         
            }
        });
    }
    GoodClick = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        });
    }
    BadClick = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        });
    }

    render() {
        return (<Section>
            <Title>Feedback</Title>
            <h2>Please leave feedback</h2>
            <div className="btn-group">
                <Btn type="button" onClick={this.GoodClick}>Good</Btn>
                <Btn type="button" onClick={this.NeutralClick}>Neutral</Btn>
                <Btn type="button" onClick={this.BadClick}>Bad</Btn>
            </div>
            <h3>Statistics</h3>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p><b>Total: {this.countTotalFeedback()}</b></p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </Section>);
    }
}

export default Feedback;