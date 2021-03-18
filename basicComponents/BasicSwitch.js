import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import color from '@/style/color';

const BasicSwitch = React.forwardRef((props, ref) => <StyledSwitch {...props} ref={ref} />);

const StyledSwitch = styled(Form.Switch)`
  height: 30px;
  padding-left: 0.6rem;
  margin-bottom: 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  label {
    color: ${(props) => (props.enable === 'true' ? `${color.primary}` : '#979797')};
  }

  .custom-control-label {
    vertical-align: middle;
    padding-left: 24px;

    &::before {
      width: 52px;
      height: 30px;
      border-radius: 15px;
      transform: translateY(-7px);
      border-color: ${color.bgShade};
      cursor: pointer;
    }

    &::after {
      width: 24px;
      height: 24px;
      top: calc(0.25rem + -4px);
      left: calc(-2.25rem + 5px);
      border-radius: 50%;
      background-color: ${color.white};
      border: 1px solid ${color.bgShade};
      box-shadow: 0 4px 8px 0 rgba(44, 39, 56, 0.2);
      cursor: pointer;
    }
  }

  .custom-control-input:checked ~ .custom-control-label::after {
    transform: translateX(1.1rem);
  }

  .custom-control-input:focus ~ .custom-control-label::before {
    box-shadow: none;
    border: 1px solid ${color.bgShade};
  }
`;

export default React.memo(BasicSwitch);
