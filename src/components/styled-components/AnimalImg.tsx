import styled from "styled-components";

interface IAnimalIMGProps {
  img: string;
}

export const AnimalImg = styled.div`
  background-image: url(${(props: IAnimalIMGProps) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  background-color: grey;
  width: 250px;
  height: 250px;
`;
