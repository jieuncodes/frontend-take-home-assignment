import styled from 'styled-components';
import MonthSelector from './MonthSelector';
import { TotalAmountInput } from './TotalAmountInput';
import { Result } from './Result';
import { ReactComponent as BuyAHouse } from '../assets/icons/buy-a-house.svg';

const CARD = styled.div`
  margin-top: 30px;
  position: relative;
  width: 560px;
  height: 511px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 16px 32px 0px #1e2a3214;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: Work Sans;
  box-sizing: border-box;
  padding: 30px 40px 30px 40px;
`;

const CARD_HEADER = styled.div`
  width: 480px;
  height: 64px;
  display: grid;
  grid-template-areas:
    'icon title'
    'icon description';
  grid-template-columns: 80px auto;
  align-items: start;
`;

const HOUSE_ICON = styled(BuyAHouse)`
  grid-area: icon;
  width: 64px;
  height: 64px;
`;

const TITLE = styled.span`
  grid-area: title;
  font-family: Rubik;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  color: #1e2a32;
  margin-top: 5px;
`;

const DESCRIPTION = styled.span`
  grid-area: description;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #708797;
`;

const GOAL = styled.div`
  display: grid;
  width: 480px;
  height: 81px;
  grid-template-columns: 272px 192px;
  gap: 12px;
`;

const FORM = styled.div`
  display: flex;
  flex-direction: column;
`;
const FORM_TITLE = styled.span`
  font-family: Work Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #1e2a32;
  margin-bottom: 10px;
`;

export const FORM_INPUT_BOX = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 8px;
  height: 56px;
  font-family: Rubik;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  fill: #4d6475;
  display: flex;
  align-items: center;
`;

const CONFIRM_BTN = styled.button`
  width: 320px;
  height: 56px;
  padding: 18px 0px 18px 0px;
  border-radius: 32px;
  gap: 10px;
  background: #1b31a8;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
  border: none;
`;

export function Card(): JSX.Element {
  return (
    <CARD>
      <CARD_HEADER>
        <HOUSE_ICON />
        <TITLE>Buy a house</TITLE>
        <DESCRIPTION>Saving goal</DESCRIPTION>
      </CARD_HEADER>
      <GOAL>
        <FORM>
          <FORM_TITLE>{`Total amount`}</FORM_TITLE>
          <TotalAmountInput />
        </FORM>
        <FORM>
          <FORM_TITLE>{`Reach goal by`}</FORM_TITLE>
          <FORM_INPUT_BOX>
            <MonthSelector />
          </FORM_INPUT_BOX>
        </FORM>
      </GOAL>
      <Result />

      <CONFIRM_BTN>Confirm</CONFIRM_BTN>
    </CARD>
  );
}
