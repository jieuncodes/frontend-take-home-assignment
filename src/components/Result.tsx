import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { dueDate, totalAmount } from '../atoms';
import { useRecoilValue } from 'recoil';

const RESULTBOX = styled.div`
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e9eef2;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 155px;
  width: 480px;
`;
const MONTHLY_AMOUNT = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;
const MONTHLY_AMOUNT_HEADER = styled.span`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
`;
const MONTHLY_AMOUNT_RESULT = styled.span`
  color: #0079ff;
  font-family: Rubik;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 38px;
  text-align: right;
`;
const RESULT_DESC = styled.div`
  align-items: center;
  background: #f4f8fa;
  height: 100%;
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;
  line-height: 24px;
`;

export function Result(): JSX.Element {
  const totalAmountState = useRecoilValue(totalAmount);
  const dueDateState = useRecoilValue(dueDate);

  const text = `You're planning ***48 monthly deposits*** to reach your ***${totalAmountState}*** goal by ${dueDateState}.`;
  return (
    <RESULTBOX>
      <MONTHLY_AMOUNT>
        <MONTHLY_AMOUNT_HEADER>Monthly amount</MONTHLY_AMOUNT_HEADER>
        <MONTHLY_AMOUNT_RESULT>$521</MONTHLY_AMOUNT_RESULT>
      </MONTHLY_AMOUNT>
      <RESULT_DESC>
        <ReactMarkdown>{text}</ReactMarkdown>
      </RESULT_DESC>
    </RESULTBOX>
  );
}