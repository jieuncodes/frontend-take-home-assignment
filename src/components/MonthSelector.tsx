import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { dueDate } from '../atoms';

const SELECTOR_CONTAINER = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ARROW = styled.span``;

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
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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

  const month = `${monthNames[due.getMonth()]}`;
  const year = `${due.getFullYear()}`;

  return (
    <SELECTOR_CONTAINER>
      <ARROW onClick={goPrevMonth}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13031_142)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
              fill="#8A9CA9"
            />
          </g>
          <defs>
            <clipPath id="clip0_13031_142">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </ARROW>
      <MONTH_DISPLAY>
        <MONTH>{month}</MONTH>
        <YEAR>{year}</YEAR>
      </MONTH_DISPLAY>
      <ARROW onClick={goNextMonth}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13031_146)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
              fill="#8A9CA9"
            />
          </g>
          <defs>
            <clipPath id="clip0_13031_146">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </ARROW>
    </SELECTOR_CONTAINER>
  );
}

export default MonthSelector;
