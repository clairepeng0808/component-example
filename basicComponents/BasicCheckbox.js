import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import color from '@/style/color';

const BasicCheckbox = (props) => {
  return <StyledCheck type="checkbox" {...props} />;
};
const StyledCheck = styled(Form.Check)`
  input[type='checkbox']:checked {
    appearance: none;
    -webkit-appearance: none;
  }
  input[type='checkbox']:checked:after {
    content: url('images/icons/icon-check.svg');
    background-size: contain;
    position: absolute;
    left: 0px;
    top: 2px;
    transform: translate(0, -10%);
  }
  input[type='checkbox']:checked:before {
    border-color: ${color.primary};
  }
  input[type='checkbox']:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    /* background: ${color.bgLight}; */
    /* border: 2px solid ${color.bgShade}; */
    border-radius: 4px;
    transform: translate(0, -20%);
  }
  input[type='checkbox']:focus {
    outline: none;
  }
  :disabled:before {
    background: ${color.bgTint};
  }
  input[type='checkbox']:checked:disabled:after {
    content: url('images/icons/disabled-checked.svg');
    background-size: contain;
  }
  input[type='checkbox']:checked:disabled:before {
    border-color: ${color.bgTint};
    background: ${color.bgTint};
  }
  .stream-mode-checkbox {
    input[type='checkbox']:checked:disabled:before {
      border-color: ${color.bgTint};
      background: ${color.bgTint};
      /* border-color: pink;
      background: red; */
    }
  }
`;
export default React.memo(BasicCheckbox);
