import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { dueDate, totalAmount } from '../atoms';
import { useRecoilValue } from 'recoil';
import { useMemo } from 'react';
import { currencyFormatter, formatMonth } from '../util';

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
  background: #f4f8fa;
  height: 100%;
  padding: 15px 30px;
  width: 100%;
  box-sizing: border-box;
  line-height: 24px;
`;
const NORM_TEXT = styled.span`
  align-items: center;
  font-family: Work Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  margin-right: 0.5rem;
`;
const BOLD_TEXT = styled.span`
  font-family: Work Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  margin-right: 0.5rem;
`;

export function Result(): JSX.Element {
  const totalAmountState = useRecoilValue(totalAmount);
  const dueDateState = useRecoilValue(dueDate);

  const monthLeft = useMemo(() => {
    const dueDateObj = new Date(dueDateState);
    const currentDate = new Date();
    const yearsDiff = dueDateObj.getFullYear() - currentDate.getFullYear();
    const monthDiff = dueDateObj.getMonth() - currentDate.getMonth();
    return yearsDiff * 12 + monthDiff + 1;
  }, [dueDateState]);

  const resText = useMemo(() => {
    return (
      <>
        <NORM_TEXT>{`You're planning`}</NORM_TEXT>
        <BOLD_TEXT>{monthLeft} monthly deposits</BOLD_TEXT>
        <NORM_TEXT>to reach your</NORM_TEXT>
        <BOLD_TEXT>{currencyFormatter(totalAmountState)}</BOLD_TEXT>
        <NORM_TEXT>goal by</NORM_TEXT>
        <BOLD_TEXT>
          {formatMonth(dueDateState)}
          {' ' + dueDateState.getFullYear()}.
        </BOLD_TEXT>
      </>
    );
  }, [totalAmountState, dueDateState, monthLeft]);

  return (
    <RESULTBOX>
      <MONTHLY_AMOUNT>
        <MONTHLY_AMOUNT_HEADER>Monthly amount</MONTHLY_AMOUNT_HEADER>
        <MONTHLY_AMOUNT_RESULT>
          {currencyFormatter(totalAmountState / monthLeft)}
        </MONTHLY_AMOUNT_RESULT>
      </MONTHLY_AMOUNT>
      <RESULT_DESC>{resText}</RESULT_DESC>
    </RESULTBOX>
  );
}
