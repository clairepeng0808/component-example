import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import color from '@/style/color';

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 38px;
  border: solid 1px ${color.bgShade};
  color: ${color.contrasthighLight};
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &::placeholder {
    color: rgba(44, 39, 56, 0.24);
  }
  &:active,
  &:focus {
    border: solid 2px ${color.primary};
  }

  background: url(images/icons/icon-calendar.svg) no-repeat right center;
  background-size: 28px 28px;
  background-color: #fff;
  background-position: right 0.2em top 50%, 0 0;
`;

const StyledDatePickerContainer = styled.div`
  padding: 0;
`;

const BasicDatePicker = React.forwardRef((props, ref) => (
  <StyledDatePickerContainer className={props.grid}>
    <StyledDatePicker {...props} inputRef={ref} />
  </StyledDatePickerContainer>
));

BasicDatePicker.defaultProps = {
  grid: null,
};
BasicDatePicker.propTypes = {
  // grid 的 className e.g. col-sm-8
  grid: PropTypes.string,
};

export default React.memo(BasicDatePicker);
