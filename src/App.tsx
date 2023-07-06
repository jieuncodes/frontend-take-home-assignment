import styled from 'styled-components';
import { Card } from './components/Card';

const APP = styled.div`
  background-color: #f4f8fa;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 80px auto;
`;

const NAVBAR = styled.nav`
  height: 80px;
  background-color: white;
  width: 100vw;
`;
const IMG = styled.img`
  position: relative;
  width: 100px;
  height: 32px;
  top: 24px;
  left: 56px;
`;

const CONTENTS = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TITLEBOX = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #1b31a8;
  width: 560px;
  min-height: 24px;
  gap: 10px;
  width: 560px;
`;
const NORMTITLE = styled.span`
  align-items: center;
  font-family: Work Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;

const BOLDTITLE = styled.span`
  font-family: Work Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;

export function App(): JSX.Element {
  return (
    <APP>
      <NAVBAR>
        <IMG src="logo.png" />
      </NAVBAR>
      <CONTENTS>
        <TITLEBOX>
          <NORMTITLE>{`Let's plan your `}</NORMTITLE>
          <BOLDTITLE>{`saving goal.`}</BOLDTITLE>
        </TITLEBOX>
        <Card />
      </CONTENTS>
    </APP>
  );
}
