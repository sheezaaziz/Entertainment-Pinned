import styled from 'styled-components';

import { SocialIconBtn } from '../SocialIcon/styles';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

export const SocialBtn = styled(SocialIconBtn)`
  // bc we are styling a list of socials in a row. otherwise, we remove these stylings.
  &:first-child {
    margin-left: 10px;
    padding: 12px;
  }
  &:last-child {
    margin-right: 10px;
}
`;
