import React from 'react';
import styled from 'styled-components';
import { convertDashedToReadable } from '../utils';

const StyledChip = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  background: #fff;
  color: #3fa348;
  border-radius: 100px;
  padding: 5px 15px;
  text-transform: capitalize;
  border: 1px solid #3faf48;
`;

export type Props = {
  value: string;
  className?: string;
};

export const Chip = (props: Props) => {
  const { value, className } = props;

  return (
    <StyledChip className={(value)}>
      {convertDashedToReadable(value)}
    </StyledChip>
  );
};

export default Chip;