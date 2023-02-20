import React from "react";
import { Title, Section } from "./Feedback.styled";
import { Statistics } from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    // NeutralClick = () => {
    //     this.setState(prevState => {       
    //             return {
    //                 neutral: prevState.neutral + 1,         
    //         }
    //     });
    // }
    // GoodClick = () => {
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1,
    //         }
    //     });
    // }
    // BadClick = () => {
    //     this.setState(prevState => {
    //         return {
    //             bad: prevState.bad + 1,
    //         }
    //     });
    // }

    render() {
        return (<Section>
            <Title>Feedback</Title>
            <h2>Please leave feedback</h2>
            {/* <div className="btn-group">
                <Btn type="button" onClick={this.GoodClick}>Good</Btn>
                <Btn type="button" onClick={this.NeutralClick}>Neutral</Btn>
                <Btn type="button" onClick={this.BadClick}>Bad</Btn>
            </div> */}
            <FeedbackOptions state={this.state}/>
            <Statistics state={this.state}/>
        </Section>);
    }
}

export default Feedback;
