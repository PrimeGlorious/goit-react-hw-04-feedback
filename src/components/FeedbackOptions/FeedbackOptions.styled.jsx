import styled from "styled-components";

export const BtnList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  border-radius: 20%;

&:focus {
  color: #171e29;
}

&:hover {
  border-color: #06f;
  color: #06f;
  fill: #06f;
}

&:active {
  border-color: #000;
  color: #000;
}
`;
