import styled from 'styled-components';

import colours from '../../config/colours';

export const CardDiv = styled.div`
  margin-right: 35px;
  margin-left: 35px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  float: left;
`;
export const CardDivPreview = styled(CardDiv)`
  margin: auto;
  padding: 0;
  margin-bottom: 10px;
`;


export const CardImg = styled.img`
  float: left;
  width:  240px;
  height: 320px;
  object-fit: cover;
  border-radius: 1.3em;
  box-shadow: 0 0 8px ${colours.backgroundLight};
`;
export const CardImgPreview = styled(CardImg)`
  width: 90%;
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
  padding: 10px;
  width: 100px;
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

  background-color: ${props => props.nominate ? colours.orange : colours.blue}
`;
export const CardBtnPreview = styled(CardBtn)`
  width: 95%;
  background-color: ${colours.danger};
  opacity: 1;
  margin: auto;
`;
