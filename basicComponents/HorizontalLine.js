import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from '@/style/color';

const HorizontalLine = (props) => {
  return (
    <StyledLine {...props} isShow={props.isShow} cusmargin={props.cusmargin} />
  );
};
const StyledLine = styled.div`
  width: inherit;
  height: 1px;
  margin: ${(props) => props.cusmargin};
  border-bottom: 1px solid rgba(119, 113, 136, 0.2);
  opacity: ${(props) => (props.isShow ? 1 : 0)};
`;
HorizontalLine.defaultProps = {
  isShow: true,
};

HorizontalLine.propTypes = {
  cusmargin: PropTypes.string.isRequired,
  isShow: PropTypes.bool,
};

export default React.memo(HorizontalLine);
