import React from "react";
import { MyDiv } from "./Feedback.styled";
import { Statistics } from "./Statistics";
import { Section } from "./Section";

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

AllClick = id => {  
    switch (id) {
      case 'good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          }
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          }
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          }
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (<MyDiv>
      <Section title="Please leave feedback">
        <FeedbackOptions state={this.state} AllClick={this.AllClick} />
      </Section>
      <Section title="Statistics">
        <Statistics state={this.state} />
      </Section>   
    </MyDiv>);
  }

}

export default App;
