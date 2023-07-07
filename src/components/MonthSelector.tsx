import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { dueDate } from '../atoms';
import { formatMonth } from '../util';
import { ReactComponent as LeftArrow } from '../assets/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../assets/icons/right-arrow.svg';

const SELECTOR_CONTAINER = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ARROW_LEFT = styled(LeftArrow)``;
const ARROW_RIGHT = styled(RightArrow)``;

const MONTH_DISPLAY = styled.div`
  display: flex;
  flex-direction: column;
`;
const MONTH = styled.span`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;
const YEAR = styled.span`
  font-family: Work Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #708797;
`;

export function MonthSelector(): JSX.Element {
  const [due, setDue] = useRecoilState(dueDate);

  const goPrevMonth = () => {
    if (
      due.getFullYear() === new Date().getFullYear() &&
      due.getMonth() === new Date().getMonth()
    ) {
      return;
    }
    const newMonth = new Date(due.getFullYear(), due.getMonth() - 1);
    setDue(newMonth);
  };

  const goNextMonth = () => {
    const newMonth = new Date(due.getFullYear(), due.getMonth() + 1);
    setDue(newMonth);
  };

  const month = `${formatMonth(due)}`;
  const year = `${due.getFullYear()}`;

  return (
    <SELECTOR_CONTAINER>
      <ARROW_LEFT onClick={goPrevMonth}></ARROW_LEFT>
      <MONTH_DISPLAY>
        <MONTH>{month}</MONTH>
        <YEAR>{year}</YEAR>
      </MONTH_DISPLAY>
      <ARROW_RIGHT onClick={goNextMonth}></ARROW_RIGHT>
    </SELECTOR_CONTAINER>
  );
}

export default MonthSelector;
