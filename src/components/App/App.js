import React, { useState } from 'react';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled';
import { GlobalStyle } from 'components/GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leavefeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevStateGood => prevStateGood + 1);
        break;
      case 'neutral':
        setNeutral(prevStateNeutral => prevStateNeutral + 1);
        break;
      case 'bad':
        setBad(prevStateBad => prevStateBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leavefeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
      <GlobalStyle />
    </Container>
  );
};

// import React, { Component } from 'react';
// import { FeedbackOptions } from '../Feedback/FeedbackOptions';
// import { Section } from '../Section/Section';
// import { Statistics } from '../Statistics/Statistics';
// import { Container } from './App.styled';
// import { GlobalStyle } from 'components/GlobalStyle';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leavefeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total > 0 ? ((good / total) * 100).toFixed(0) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.leavefeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       <GlobalStyle/>
//             </Container>

//     );
//   }
// }
