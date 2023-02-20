import { Title, Section, Btn } from "./Feedback.styled";

export const Feedback = () => {
    return (<Section><Title>
        Feed back
    </Title>
        <h2>Please leave feedback</h2>
        <Btn>Good</Btn>
        <Btn>Neutral</Btn>
        <Btn>Bad</Btn>
       
        <h3>Statistics</h3>
        <span>Good</span>
        <span>Neutral</span>
        <span>Bad</span>
    </Section>);
}
