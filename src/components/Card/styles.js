import styled from 'styled-components';

import colours from '../../config/colours';
import { device } from '../../config/device';

export const CardDiv = styled.div`
  @media ${device.mobileS} {
    margin: auto;
    padding: 20px;
  }

  @media ${device.laptop} {
    margin-right: 35px;
    margin-left: 35px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    float: left;
  }
`;
export const CardDivPreview = styled(CardDiv)`
  margin: auto;
  margin-bottom: 10px;
`;


export const CardImg = styled.img`
  @media ${device.mobileS} {
    width: 320px;
    height: 420px;
    object-fit: cover;
    border-radius: 1.3em;
    box-shadow: 0 0 8px ${colours.backgroundLight};
  }

  @media ${device.laptop} {
    float: left;
    width: 240px;
    height: 320px;
  }
`;
export const CardImgPreview = styled(CardImg)`
  width: 220px;
  height: 320px;
  margin: auto;
`;

export const CardDetails = styled.div`
  display: inline-block;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const CardDetailsDescr = styled.div`
  text-align: left;
  padding-left: 10px;
`;

export const CardTitle = styled.p`
  white-space: nowrap;
  width: 160px;
  overflow: hidden;
  font-size: 1.33em;
  margin: 0;
  margin-top: 10px;
  text-overflow: ellipsis;
  color: ${colours.primaryText}
`;

export const CardSubtitle = styled.p`
  color: ${colours.secondaryText};
  margin: 0;
`;

export const CardDetailsMore = styled.div`
  text-align: right;
  padding-right: 10px;
`;

export const CardRating = styled.p`
  margin: 0;
  font-size: 1em;
  margin-top: 15px;
  color: ${colours.orange};
  opacity: 0.7;
`;

export const CardExternalLink = styled.a`
  margin: 0;
  color: ${colours.blue};
`;

export const CardBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const CardBtn = styled.button`
  @media ${device.mobileS} {
    width: 50%;
    padding: 10px;
    border: none;
    font-size: 1em;
    border-radius: 2em;
    cursor: pointer;
    opacity: 0.9;
    color: ${colours.primaryText};

    &:focus {
      outline: none;
      box-shadow: 0 0 15px ${colours.backgroundLight};
    }

    background-color: ${({Order, Danger}) =>
    Order === 1 && `${colours.blue}` ||
    Order === 2 && Danger === true && `${colours.danger}` ||
    `${colours.orange}`
    };

    // Temp quickfix soln.
    ${({ Order }) => Order == 1 && `
      margin-right: 10px;
    ` || Order == 2 && `
      margin-left: 10px;
    `}

    // &:disabled {
    //   background-color: #cccccc;
    //   color: #666666;
    // }
    //
    // &:disabled:hover {
    //   transform: none;
    //   box-shadow: none;
    //   cursor: default;
    // }
  }

  @media ${device.laptop} {
    width: 100px;
    margin: 0;
  }
`;
export const CardBtnPreview = styled(CardBtn)`
  width: 95%;
  background-color: ${colours.danger};
  opacity: 1;
  margin: auto;
`;
// background-color: ${props => props.nominate ? colours.orange : colours.blue}
