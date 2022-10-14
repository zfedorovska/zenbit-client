import styled from 'styled-components';

import cartoon1Src from '../../images/cartoon1.png';
import cartoon2Src from '../../images/cartoon2.png';
import cartoon3Src from '../../images/cartoon3.png';
import cartoon4Src from '../../images/cartoon4.png';
import mapSrc from '../../images/Map.png';

export const MainContainer = styled.div`
  position: relative;

  background-image: url(${cartoon1Src}), url(${cartoon3Src}),
    url(${cartoon2Src}), url(${mapSrc});
  background-repeat: no-repeat;
  background-position: top left, bottom 300px left 780px,
    bottom 100px left 800px, top right -200px;
`;

export const FeedbackFormBlock = styled.div`
  width: 563px;
  padding-top: 179px;
  padding-left: 130px;
  font-size: 40px;
  line-height: 130%;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 130%;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 507px;
  height: 93px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding-left: 46px;
  padding-right: 8px;

  &::placeholder {
    font-size: 18px;
    line-height: 180%;
    color: #2d2d2d;
  }
`;

export const Textarea = styled.textarea`
  width: 507px;
  height: 189px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 15px;
  padding-top: 31px;
  padding-left: 46px;
  padding-right: 8px;

  &::placeholder {
    font-size: 18px;
    line-height: 180%;
    color: #2d2d2d;
  }
`;

export const Button = styled.button`
  min-width: 218px;
  background: #fad34f;
  border: none;
  border-radius: 500px;
  font-size: 18px;
  line-height: 1;
  padding-top: 28px;
  padding-bottom: 28px;
  color: #ffffff;
  margin-bottom: 120px;
`;

export const Footer = styled.div`
  height: 200px;
  background: #fafafa;
  border: 1px solid #d8d8d8;

  background-image: url(${cartoon2Src}), url(${cartoon4Src}),
    url(${cartoon1Src});
  background-repeat: no-repeat;
  background-position: top left, top left 1050px, top 50px left 1180px;
  ul {
    display: flex;
    margin-left: 343px;
    align-items: center;
    height: 100%;
    li {
      margin-right: 26px;
    }
  }
`;
