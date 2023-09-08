import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 12px;
  padding: 48px;
  background: linear-gradient(to bottom, #5f9ea0, #e0ffff);
  border-radius: 10px;

`;

export const FeedbackBtn = styled.button`
  padding: 12px 32px;
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: #008b8b;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: #008b8b;
    background-color: #fff;
    border: 2px solid #008b8b;
  }
`;
