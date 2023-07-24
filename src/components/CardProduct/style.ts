import { styled } from "styled-components";
import { Colors } from "../../global/globalstyled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

export const MainCardContainer = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const ContainerCard = styled.div`
  display: flex;
  width: 390px;
  height: 650px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Card = styled(Link)`
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  color: black;
  text-decoration: none;
  background: #fff;
  align-items: center;
  margin-bottom: 30px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const ImageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 50%;
  }
`;

export const NameProduct = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  line-height: normal;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.green};
  color: #fff;
  font-size: 20px;
  padding: 30px;
  border: none;
  border-radius: 3px;
  height: 50px;
`;

export const Discount = styled.div`
  gap: 4px;
  color: #888;
  text-align: center;
  align-items: center;
  font-size: 15px;
  font-style: normal;
  line-height: 15.574px;
  display: flex;
  align-items: center;

  div {
    font-weight: 700;
    line-height: 15.574px;
    text-decoration: line-through;
  }
`;

export const Off = styled.p`
  background: ${Colors.orange};
  color: #fff;
  text-decoration: none;
  display: flex;
  border-radius: 3px;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 70px;
  height: 20px;
`;

export const MemberClub = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  gap: 5px;
  color: ${Colors.black};
  font-weight: bold;
`;

export const PriceMember = styled.div`
  color: ${Colors.pink};
  display: flex;
  font-size: 30px;
  justify-content: start;
  font-weight: bold;
  align-items: end;

  p {
    font-size: 16px;
  }
`;

export const NoMember = styled.div`
  color: ${Colors.gray};
  font-weight: bold;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Pagination = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const FinderProducts = styled.div`
  width: 100%;
  text-align: start;
  margin-bottom: 40px;
`;
