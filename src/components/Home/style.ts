import styled, {keyframes} from "styled-components";

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,45,234,1) 100%);
`;
export const breatheAnimation = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`
export const HomePageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  animation-name: ${breatheAnimation};
  animation-duration: 0.3s;
`;

export const Header = styled.h1`
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  color: white;
  font-family: Calibri;
  font-size: 100px;
  letter-spacing: 8px;
`;

export const MenuContainer = styled.div`
  min-width: 315px;
  max-width: 1050px;
  min-height: 404px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  box-sizing: border-box;
`;