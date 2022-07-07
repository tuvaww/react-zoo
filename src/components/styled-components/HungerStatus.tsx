import styled from "styled-components";

interface IHungerStatusProps {
  hunger: boolean;
}

export const HungerStatus = styled.div`
  ${(props: IHungerStatusProps) =>
    props.hunger ? "background-color:  green;" : "background-color:  red;"}
  height: 20px;
  width: 100px;
  border-radius: 10px;
  //border: 1px solid black;
`;
