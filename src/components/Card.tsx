import styled from 'styled-components';
import MonthSelector from './MonthSelector';

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
  justify-content: center;
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

const ICON = styled.div`
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
  font-family: Work Sans;
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

const FORM_INPUT_BOX = styled.div`
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
const DOLLAR_SIGN = styled.span`
  color: #cbd5dc;
  margin-right: 4px;
  margin-top: 4px;
`;
const DOLLAR_INPUT = styled.input`
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

const FORM_INPUT_BOX_TA = styled(FORM_INPUT_BOX)`
  padding-left: 5px;
`;

const MONTHLY_AMOUNT = styled.div``;
const RESULT_DESC = styled.div``;

const RESULTBOX = styled.div`
  border: 1px solid #e9eef2;
  width: 480px;
  height: 158px;
  border-radius: 8px;
`;

const CONFIRM_BTN = styled.button``;

export function Card(): JSX.Element {
  return (
    <CARD>
      <CARD_HEADER>
        <ICON>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.1816 17.1279H17.7269C18.2334 17.1279 18.6478 17.5423 18.6478 18.0488V27.8099C18.6478 28.3164 18.2334 28.7308 17.7269 28.7308H14.1816C13.6751 28.7308 13.2607 28.3164 13.2607 27.8099V18.0488C13.2607 17.5423 13.6751 17.1279 14.1816 17.1279Z"
              fill="#2F7CF8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.57146 29.5134L29.7441 13.8588C29.9743 13.6746 30.3427 13.7206 30.5269 13.9508L32.4146 16.8976C32.5528 17.1739 32.4607 17.4962 32.1844 17.6343L8.01175 33.289C7.78153 33.4732 7.41319 33.4271 7.22901 33.1969L5.34124 30.2501C5.20311 30.0199 5.34124 29.6976 5.57146 29.5134Z"
              fill="#2658CD"
            />
            <path
              d="M60.086 45.3984H60.0399C59.8097 45.3984 59.6256 45.4444 59.3953 45.4905C58.7047 43.6487 56.955 42.3135 54.8371 42.3135C52.1666 42.3135 50.0025 44.4775 50.0486 47.148C50.0486 49.7264 52.1205 51.8444 54.6529 51.9365H54.6989C54.745 51.9365 54.8371 51.9365 54.8831 51.9365C54.9291 51.9365 54.9752 51.9365 55.0212 51.9365H63.8615V49.22C63.9076 47.148 62.204 45.4444 60.086 45.3984Z"
              fill="#6EA9A1"
            />
            <path
              d="M13.9976 47.1481C13.9976 44.4776 11.8336 42.3136 9.16307 42.3596C7.09113 42.3596 5.34149 43.6949 4.65084 45.5366C4.42062 45.4905 4.19041 45.4445 3.96019 45.4445H3.91415C1.79616 45.4445 0.092564 47.1941 0.138607 49.3121V52.0287H9.02494C9.07098 52.0287 9.16307 52.0287 9.20911 52.0287C9.25515 52.0287 9.3012 52.0287 9.34724 52.0287C11.9257 51.8905 13.9976 49.7265 13.9976 47.1481Z"
              fill="#99D3CB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.83984 32.4142L25.7838 21.1341V8.70215L55.6654 20.8109L55.4814 51.9822H9.02384L8.83984 32.4142Z"
              fill="#2F7CF8"
            />
            <path
              d="M35.0851 30.3426C37.8315 30.3426 40.0579 28.1162 40.0579 25.3698C40.0579 22.6234 37.8315 20.397 35.0851 20.397C32.3387 20.397 30.1123 22.6234 30.1123 25.3698C30.1123 28.1162 32.3387 30.3426 35.0851 30.3426Z"
              fill="#2658CD"
            />
            <path
              d="M34.7637 18.2783V32.5519"
              stroke="#2F7CF8"
              strokeWidth="1.151"
            />
            <path
              d="M42.0836 25.416H27.8564"
              stroke="#2F7CF8"
              strokeWidth="1.151"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2861 51.9367V34.6245C15.2861 34.118 15.7005 33.7036 16.207 33.7036H24.3106C24.8171 33.7036 25.2315 34.118 25.2315 34.6245V51.9367"
              fill="#2658CD"
            />
            <path
              d="M25.2319 41.6226H22.5615"
              stroke="#2F7CF8"
              strokeWidth="1.151"
            />
            <path
              d="M29.4677 33.5654H48.3454C48.8519 33.5654 49.2663 33.9798 49.2663 34.4863V44.1554C49.2663 44.6618 48.8519 45.0762 48.3454 45.0762H29.4677C28.9613 45.0762 28.5469 44.6618 28.5469 44.1554V34.4863C28.5469 33.9798 28.9613 33.5654 29.4677 33.5654Z"
              fill="#2658CD"
            />
            <path
              d="M35.1777 32V46.2736"
              stroke="#2F7CF8"
              strokeWidth="1.151"
            />
            <path
              d="M42.5908 32.4609V46.7345"
              stroke="#2F7CF8"
              strokeWidth="1.151"
            />
            <path
              d="M51.9356 39.5967H26.9355"
              stroke="#2F7CF8"
              strokeWidth="1.151"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.1524 21.0877L26.3826 6.67623C26.1063 6.5381 25.784 6.63018 25.5999 6.8604L24.1725 10.0834C24.0805 10.3597 24.2186 10.682 24.5409 10.7741L56.3107 25.1856C56.5869 25.3237 56.9092 25.2316 57.0934 25.0014L58.5207 21.7784C58.6128 21.5021 58.4747 21.1798 58.1524 21.0877Z"
              fill="#2658CD"
            />
            <path
              d="M43.05 26.1073C47.1183 26.1073 50.4164 22.8093 50.4164 18.7409C50.4164 14.6726 47.1183 11.3745 43.05 11.3745C38.9816 11.3745 35.6836 14.6726 35.6836 18.7409C35.6836 22.8093 38.9816 26.1073 43.05 26.1073Z"
              fill="#6EA9A1"
            />
            <path
              d="M43.0492 24.4031C46.1005 24.4031 48.574 21.9296 48.574 18.8783C48.574 15.8271 46.1005 13.3535 43.0492 13.3535C39.998 13.3535 37.5244 15.8271 37.5244 18.8783C37.5244 21.9296 39.998 24.4031 43.0492 24.4031Z"
              fill="#99D3CB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.385 18.1873C44.0627 18.0031 43.7404 17.865 43.4181 17.7729C43.2339 17.6808 43.0497 17.5887 42.8655 17.4966C42.6353 17.3585 42.5893 17.0822 42.7274 16.8981C42.7735 16.806 42.8655 16.7599 42.9576 16.7139C43.0497 16.6678 43.1878 16.6678 43.2799 16.6678C43.6943 16.6218 44.1087 16.7139 44.5231 16.8981C44.7073 16.9901 44.7994 16.9441 44.8454 16.7599C44.8914 16.5297 44.9835 16.3455 45.0296 16.1153C45.0756 16.0232 45.0296 15.8851 44.8914 15.8391C44.8914 15.8391 44.8914 15.8391 44.8454 15.8391C44.6152 15.747 44.3389 15.6549 44.0627 15.6089C43.6943 15.5628 43.6943 15.5628 43.6943 15.1945C43.6943 14.688 43.6943 14.688 43.1878 14.688C43.0958 14.688 43.0497 14.688 42.9576 14.688C42.7274 14.688 42.6814 14.734 42.6814 14.9642C42.6814 15.0563 42.6814 15.1484 42.6814 15.2865C42.6814 15.6089 42.6814 15.6089 42.3591 15.7009C41.6684 15.8851 41.1619 16.4837 41.1159 17.2204C41.0699 17.865 41.4382 18.4175 42.0368 18.6937C42.4051 18.8779 42.7735 19.0621 43.1418 19.2002C43.2799 19.2463 43.4181 19.3383 43.5562 19.4304C43.7864 19.6146 43.8785 19.9369 43.6943 20.1671C43.6483 20.2592 43.5101 20.3513 43.4181 20.3513C43.1878 20.4434 42.9576 20.4894 42.6814 20.4434C42.313 20.3973 41.9447 20.3053 41.5763 20.1211C41.3922 20.029 41.3001 20.029 41.254 20.2592C41.208 20.4434 41.1619 20.6276 41.0699 20.8117C40.9778 21.0419 41.0238 21.134 41.254 21.2261C41.5763 21.3642 41.8986 21.4563 42.2209 21.5024C42.4972 21.5484 42.4972 21.5484 42.4972 21.8247C42.4972 21.9628 42.4972 22.0549 42.4972 22.193C42.4972 22.3312 42.5893 22.4232 42.6814 22.4232H42.7274C42.9116 22.4232 43.0958 22.4232 43.2799 22.4232C43.372 22.4232 43.5101 22.3312 43.5101 22.2391V22.193C43.5101 22.0089 43.5101 21.8707 43.5101 21.6865C43.5101 21.5484 43.6022 21.4103 43.7404 21.3642C44.1087 21.2722 44.477 21.0419 44.7073 20.7657C45.3058 20.075 45.2137 19.016 44.5231 18.4175C44.6152 18.3254 44.477 18.2333 44.385 18.1873Z"
              fill="#6EA9A1"
            />
          </svg>
        </ICON>
        <TITLE>Buy a house</TITLE>
        <DESCRIPTION>Saving goal</DESCRIPTION>
      </CARD_HEADER>
      <GOAL>
        <FORM>
          <FORM_TITLE>{`Total amount`}</FORM_TITLE>
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
            <DOLLAR_INPUT type="text" placeholder="Enter amount" />
          </FORM_INPUT_BOX_TA>
        </FORM>
        <FORM>
          <FORM_TITLE>{`Reach goal by`}</FORM_TITLE>
          <FORM_INPUT_BOX>
            <MonthSelector />
          </FORM_INPUT_BOX>
        </FORM>
      </GOAL>
      <RESULTBOX>
        <MONTHLY_AMOUNT>
          <span>Monthly amount</span>
          <span>$521</span>
        </MONTHLY_AMOUNT>
        <RESULT_DESC>{`You're planning 48 monthly deposits to reach your $25,000 goal by October 2020.`}</RESULT_DESC>
      </RESULTBOX>
      <CONFIRM_BTN>Confirm</CONFIRM_BTN>
    </CARD>
  );
}