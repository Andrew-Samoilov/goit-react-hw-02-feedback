export const Statistics = ({state:{good,neutral,bad}}) => {
   let countTotalFeedback = () => good + neutral + bad;
   let countPositiveFeedbackPercentage = () => Math.ceil((good + neutral) * 100 / (countTotalFeedback()));

    return (
        <div>
            <h3>Statistics</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p><b>Total: {countTotalFeedback()}</b></p>
            <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
        </div>);
}