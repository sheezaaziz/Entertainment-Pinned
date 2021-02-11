import styled from 'styled-components';

import colours from '../../config/colours';

export const MenuItem = styled.div`
  color: ${colours.backgroundLight};
  border-radius: 3em;
  border: 1px solid ${colours.backgroundLight};
  width: 60%;
  font-size: 14px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
