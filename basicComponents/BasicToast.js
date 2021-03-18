import React from 'react';
import styled, { css } from 'styled-components';
import color from '@/style/color';

const StyledToast = styled.div`
  .Toastify__toast--success {
    background-color: ${color.successLight};
    color: ${color.successDark};
  }
  .Toastify__progress-bar--success {
    background: ${color.successDark};
  }

  .Toastify__toast--danger {
    background-color: ${color.errorLight};
    color: ${color.errorDark};
  }
  .Toastify__progress-bar--danger {
    background: ${color.errorDark};
  }
`;

const BasicToast = (props) => {
  return <StyledToast {...props}>{props.children}</StyledToast>;
};

export default React.memo(BasicToast);
