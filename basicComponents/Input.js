import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import color from '@/style/color';

const StyledInputContainer = styled.div`
  width: 100%;
  padding: ${(props) => props.padding || '0px'};
`;

const StyledInput = styled(Form.Control)`
  color: ${color.contrastPrimary};
  font-size: 16px;
  border-radius: 6px;
  background-color: #ffffff;
  margin-right: 0;
  padding: 6px 12px;
  padding-right: 12%;
  width: 100%;
  display: flex;
  align-items: center;
  appearance: none;
  box-shadow: 0 4px 8px 0 rgba(44, 39, 56, 0.03);
  border: ${(props) =>
    props.errors
      ? `1.5px solid ${color.errorHover}`
      : `1px solid ${color.bgShade}`};

  &:focus {
    outline: none;
    border: 0;
    box-shadow: none;
    border: 1.5px solid
      ${(props) => (props.errors ? `${color.errorHover}` : `${color.primary}`)};
  }

  &[readOnly] {
    background-color: #ffffff;
  }
  &[readonly]::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(124, 156, 191, 0.5);
  }
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(44, 39, 56, 0.24);
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(44, 39, 56, 0.24);
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(44, 39, 56, 0.24);
  }

  /* errors 樣式 */
  background: ${(props) =>
    props.errors &&
    'url("images/icons/icon-warning.svg") no-repeat right center'};
  background-size: ${(props) => props.bgSize || '16px 16px'};
  background-color: ${color.white};
  background-position: right 0.6em top 50%, 0 0;
`;

const Input = React.forwardRef((props, ref) => {
  const { errors } = props;
  return (
    <StyledInputContainer className={props.grid}>
      <StyledInput {...props} ref={ref} errors={errors} />
      {errors && (
        <Form.Text style={{ color: color.error }}>
          {errors && errors?.message}
        </Form.Text>
      )}
    </StyledInputContainer>
  );
});

Input.defaultProps = {
  errors: null,
  grid: null,
};

Input.propTypes = {
  grid: PropTypes.string,
  errors: PropTypes.object,
};

export default React.memo(Input);
