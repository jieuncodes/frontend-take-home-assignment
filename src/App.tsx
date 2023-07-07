import styled from 'styled-components';
import { Card } from './components/Card';
import { RecoilRoot } from 'recoil';

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
const LOGO = styled.svg`
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
  margin-top: 48px;
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
    <RecoilRoot>
      <APP>
        <NAVBAR>
          <LOGO
            width="100"
            height="32"
            viewBox="0 0 100 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_14_1047)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.434 27.9331L50.6378 24.8262C54.4942 28.5193 60.7238 28.5193 64.5506 24.8262L67.7544 27.9331C62.1774 33.3556 53.0406 33.3556 47.434 27.9331ZM86.3245 6.59492L85.6719 4.48454H81.8155V22.5106H86.8288V14.0398C86.8288 9.26219 90.003 8.32425 91.7829 8.41218C95.4316 8.58805 94.957 13.1898 94.957 13.8054V22.4813H100V12.7502C100 7.70872 97.6268 4.22075 92.7321 4.22075C89.5283 4.19144 87.0958 5.68628 86.3245 6.59492ZM43.1029 22.5106V4.48454H38.2676V22.5106H43.1029ZM76.9801 22.5106V4.48454H72.1448V22.5106H76.9801ZM27.7662 6.38974L27.084 4.48454H23.2275V22.5106H28.2705V13.395C28.2705 10.0243 31.0294 8.7346 33.6992 8.7346C34.3518 8.7346 34.9748 8.82253 35.3604 8.88115V4.19144H34.1738C31.059 4.19144 28.5969 5.59835 27.7662 6.38974ZM19.3414 13.4829C19.3414 7.73804 14.8621 4.22075 9.75972 4.22075C4.68704 4.19144 0 7.70872 0 13.5416C0 19.2865 4.47938 22.8038 9.61139 22.8038C14.7434 22.8038 19.3414 19.2865 19.3414 13.4829ZM4.95402 13.5122C4.95402 10.6691 6.88223 8.44149 9.75972 8.44149C12.6372 8.44149 14.3874 10.6691 14.3874 13.5122C14.3874 16.3554 12.6372 18.583 9.75972 18.583C6.88223 18.583 4.95402 16.3554 4.95402 13.5122ZM65.3812 7.73804C66.5678 9.23288 67.2797 11.1674 67.2797 13.4536C67.2797 19.2572 62.652 22.8038 57.5497 22.8038C52.388 22.8038 47.9383 19.2572 47.9383 13.5416C47.9383 12.9847 47.968 12.4571 48.057 11.9002C48.2349 10.8743 48.5613 9.90703 49.0359 8.9984C49.5105 8.14839 50.1038 7.38631 50.8454 6.74147C51.5574 6.09663 52.3583 5.56904 53.2483 5.15869C54.1382 4.74834 55.0875 4.45523 56.0664 4.30868C57.253 4.13281 58.5583 4.19144 59.8339 4.19144C60.3678 4.19144 60.8425 4.22075 61.3764 4.13281C62.1774 4.01557 62.8597 3.66384 63.4233 3.10694C64.2539 2.28624 64.6692 1.14312 64.6692 0H69.2969C69.2969 3.25349 67.7544 6.12594 65.3812 7.73804ZM62.3257 13.5122C62.3257 10.6691 60.5755 8.44149 57.698 8.44149C54.8205 8.44149 52.8923 10.6691 52.8923 13.5122C52.8923 16.3554 54.8205 18.583 57.698 18.583C60.5755 18.583 62.3257 16.3554 62.3257 13.5122Z"
                fill="#1E2A32"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_1047">
                <rect width="100" height="32" fill="white" />
              </clipPath>
            </defs>
          </LOGO>
        </NAVBAR>
        <CONTENTS>
          <TITLEBOX>
            <NORMTITLE>{`Let's plan your `}</NORMTITLE>
            <BOLDTITLE>{`saving goal.`}</BOLDTITLE>
          </TITLEBOX>
          <Card />
        </CONTENTS>
      </APP>
    </RecoilRoot>
  );
}
