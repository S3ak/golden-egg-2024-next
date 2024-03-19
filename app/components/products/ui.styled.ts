import styled from "styled-components";

interface ITitleProps {
  isActive: boolean;
}

export const Title = styled.h2<ITitleProps>`
  background: ${(props) => (props.isActive ? "green" : "red")};
  border: 2px solid grey;
`;
export const Description = styled.h2`
  border: 2px solid grey;
`;
export const Price = styled.h2`
  border: 2px solid grey;
`;
