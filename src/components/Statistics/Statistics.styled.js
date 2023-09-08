import styled from 'styled-components';

export const StatsContainer = styled.div`
  padding: 40px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #5f9ea0, #e0ffff);
`;

export const StatItem = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
`;

export const PositiveStat = styled(StatItem)`
  color: #008b8b;
`;

export const Text = styled.span`
  font-weight: bold;
`;
