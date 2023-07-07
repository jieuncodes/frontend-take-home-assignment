import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { totalAmount } from '../atoms';
import { ReactComponent as DollarSvg } from '../assets/icons/dollar.svg';

const DOLLAR_SIGN = styled(DollarSvg)`
  color: #cbd5dc;
  margin-right: 4px;
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

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const amount = Number(event.target.value.replace(/[^0-9]/g, ''));
    setAmount(amount);
  };

  return (
    <FORM_INPUT_BOX_TA>
      <DOLLAR_SIGN />
      <DOLLAR_INPUT
        value={amount.toLocaleString()}
        type="text"
        placeholder="Enter amount"
        onChange={handleAmountChange}
      />
    </FORM_INPUT_BOX_TA>
  );
}
