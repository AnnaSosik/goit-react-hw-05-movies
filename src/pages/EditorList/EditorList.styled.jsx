import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  color: #ffffff;
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #483d8b;
  }
`;
