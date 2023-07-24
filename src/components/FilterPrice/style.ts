import { styled } from "styled-components";

export const PriceContainer = styled.div`
  width: 300px;
  height: 30px;
`;
export const Title = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
margin-bottom: 12px;
`;
export const PeerPrice = styled.div`
background: red;
margin-top: 20px;
`;

export const ContainerPrice = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InputPrice = styled.input.attrs({
  type: "radio",
})``;
