import { styled } from 'styled-components';
import { Colors } from '../../global/globalstyled';

export const Pagination = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  text-decoration: none;
  border: none;
  gap: 8px;
  display: flex;
`;

export const ButtonNextPage = styled.button`
  color: ${Colors.pink};
  border: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 80px;
  height: 40px;

  img {
    color: ${Colors.pink};
  }
`;

export const ButtonNumberPage = styled.button`
  color: ${Colors.pink};
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  border: 1px solid ${Colors.pink};

  &.active {
    background-color: ${Colors.pink};
    color: #fff;
  }
`;
