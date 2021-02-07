import React from 'react';
import styled from 'styled-components';

import colours from '../../config/colours';

const CardDiv = styled.div`
  margin-right: 35px;
  margin-left: 35px;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  float: left;
`;

const CardImg = styled.img`
  float: left;
  width:  240px;
  height: 320px;
  object-fit: cover;
  border-radius: 1.3em;
  box-shadow: 0 0 8px ${colours.backgroundLight};
`;

const CardDetails = styled.div`
  display: inline-block;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const CardDetailsDescr = styled.div`
  text-align: left;
  padding-left: 10px;
`;

const CardTitle = styled.p`
  white-space: nowrap;
  width: 160px;
  overflow: hidden;
  font-size: 1.33em;
  margin: 0;
  margin-top: 10px;
  text-overflow: ellipsis;
  color: ${colours.primaryText}
`;

const CardSubtitle = styled.p`
  color: ${colours.secondaryText};
  margin: 0;
`;

const CardDetailsMore = styled.div`
  text-align: right;
  padding-right: 10px;
`;

const CardRating = styled.p`
  margin: 0;
  font-size: 1em;
  margin-top: 15px;
  color: ${colours.orange};
  opacity: 0.7;
`;

const CardExternalLink = styled.a`
  margin: 0;
  color: ${colours.blue};
`;

const CardBtns = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const CardBtn = styled.button`
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


export default function Card() {
  return (
    <CardDiv>
      <CardImg src="https://source.unsplash.com/random" alt=""/>
      <CardDetails>
        <CardDetailsDescr>
          <CardTitle>Inception</CardTitle>
          <CardSubtitle>2019</CardSubtitle>
        </CardDetailsDescr>
        <CardDetailsMore>
          <CardRating>4.5/10</CardRating>
          <CardExternalLink href="#">info <i className="fas fa-external-link-alt"></i></CardExternalLink>
        </CardDetailsMore>
      </CardDetails>
      <CardBtns>
        <CardBtn><i className="fas fa-bookmark"></i></CardBtn>
        <CardBtn nominate><i className="fas fa-trophy"></i></CardBtn>
      </CardBtns>
    </CardDiv>
  )
}
