import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { totalAmount } from '../atoms';

const DOLLAR_SIGN = styled.span`
  color: #cbd5dc;
  margin-right: 4px;
  margin-top: 4px;
`;

const DOLLAR_INPUT = styled.input`
  all: unset;
  width: 100%;
  overflow: hidden;
  height: 29px;
  font-family: Rubik;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
  border: none;

  &:focus {
    outline: none;
    border-color: red;
  }
`;

const FORM_INPUT_BOX_TA = styled.div`
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
  padding-left: 5px;
`;

export function TotalAmountInput(): JSX.Element {
  const [amount, setAmount] = useRecoilState(totalAmount);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const amount = Number(e.target.value.replace(/[^0-9]/g, ''));
    setAmount(amount);
  };

  return (
    <FORM_INPUT_BOX_TA>
      <DOLLAR_SIGN>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13011_195)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C12.5523 0 13 0.447715 13 1V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V1C11 0.447715 11.4477 0 12 0Z"
              fill="#CBD5DC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.31802 5.31802C7.16193 4.47411 8.30653 4 9.5 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H9.5C8.83696 6 8.20107 6.26339 7.73223 6.73223C7.26339 7.20107 7 7.83696 7 8.5C7 9.16304 7.26339 9.79893 7.73223 10.2678C8.20107 10.7366 8.83696 11 9.5 11H14.5C15.6935 11 16.8381 11.4741 17.682 12.318C18.5259 13.1619 19 14.3065 19 15.5C19 16.6935 18.5259 17.8381 17.682 18.682C16.8381 19.5259 15.6935 20 14.5 20H6C5.44772 20 5 19.5523 5 19C5 18.4477 5.44772 18 6 18H14.5C15.163 18 15.7989 17.7366 16.2678 17.2678C16.7366 16.7989 17 16.163 17 15.5C17 14.837 16.7366 14.2011 16.2678 13.7322C15.7989 13.2634 15.163 13 14.5 13H9.5C8.30653 13 7.16193 12.5259 6.31802 11.682C5.47411 10.8381 5 9.69347 5 8.5C5 7.30653 5.47411 6.16193 6.31802 5.31802Z"
              fill="#CBD5DC"
            />
          </g>
          <defs>
            <clipPath id="clip0_13011_195">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </DOLLAR_SIGN>
      <DOLLAR_INPUT
        value={amount.toLocaleString()}
        type="text"
        placeholder="Enter amount"
        onChange={handleAmountChange}
      />
    </FORM_INPUT_BOX_TA>
  );
}
