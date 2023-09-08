import PropTypes from 'prop-types';
import {
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsEmojiFrownFill,
} from 'react-icons/bs';
import {
  StatsContainer,
  StatItem,
  PositiveStat,
  Text,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsContainer>
      {total() > 0 ? (
        <div>
          <StatItem>
            <BsEmojiSmileFill color="green" size="24" />
            Good: <Text> {good}</Text>
          </StatItem>
          <StatItem>
            <BsEmojiNeutralFill color="yellow" size="24" />
            Neutral: <Text>{neutral}</Text>
          </StatItem>
          <StatItem>
            <BsEmojiFrownFill color="red" size="24" />
            Bad: <Text>{bad}</Text>
          </StatItem>
          <StatItem>
            Total: <Text>{total()}</Text>
          </StatItem>
          <PositiveStat>
            Positive feedback: <Text>{positivePercentage()}%</Text>
          </PositiveStat>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StatsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

