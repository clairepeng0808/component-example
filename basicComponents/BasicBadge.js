import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import color from '@/style/color';

const StyledBadge = styled(Badge)`
  line-height: 1.2;
  font-size: 12px;
  font-weight: 400;
  background: ${(props) => props.background};
  color: ${(props) => props.color || color.bgLight};
  font-size: ${(props) => props.fontSize};
  border-radius: 10px;
  padding: 2px 10px 2px 10px;
  border: ${(props) =>
    props.bordercolor ? '1px solid' + props.bordercolor : null};
`;

const BasicBadge = (props) => {
  return <StyledBadge {...props}>{props.children}</StyledBadge>;
};

export default React.memo(BasicBadge);
