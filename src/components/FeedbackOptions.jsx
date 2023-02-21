import PropTypes from 'prop-types';
import { Btn } from "./Feedback.styled";

export const FeedbackOptions = ({ state: { good, neutral, bad }, AllClick,
}) => {
    return (
    <div className="btn-group">
            <Btn type="button" onClick={() => AllClick('good')}>Good</Btn> 
            <Btn type="button" onClick={() => AllClick('neutral')}>Neutral</Btn>
            <Btn type="button" onClick={() => AllClick('bad')}>Bad</Btn>
    </div>
    );

    };
export default FeedbackOptions;

FeedbackOptions.propTypes = {
    state: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    AllClick: PropTypes.func.isRequired,
}
