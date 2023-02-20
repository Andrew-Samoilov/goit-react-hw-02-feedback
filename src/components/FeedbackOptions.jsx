import { Btn } from "./Feedback/Feedback.styled";
// import React from "react";

export const FeedbackOptions =({ state: { good, neutral, bad } }) =>{
    let NeutralClick=() => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    }
    let GoodClick = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            }
        });
    }
    let BadClick =() => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
        });
    }

    return (<div className="btn-group">
        <Btn type="button" onClick={GoodClick}>Good</Btn>
        <Btn type="button" onClick={NeutralClick}>Neutral</Btn>
        <Btn type="button" onClick={BadClick}>Bad</Btn>
    </div>);
}

export default FeedbackOptions;