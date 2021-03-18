import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import color from '@/style/color';
import BasicButton from '@Basics/BasicButton';

/* @param 彈跳提示框, 用於警告或錯誤提示 */

const WarningPopup = (props) => {
  const {
    show,
    hasImgIcon,
    onClickEvent,
    onCancelEvent,
    confirmText,
    cancelText,
  } = props;
  return (
    <StyledModal show={show}>
      <Modal.Header>
        {hasImgIcon && <img src={hasImgIcon} alt="reminder-icon" />}
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <StyledButtonWrapper>
        {onClickEvent && (
          <BasicButton width={180} onClick={onClickEvent}>
            {confirmText}
          </BasicButton>
        )}
        {onCancelEvent && (
          <BasicButton unhighlighted width={180} onClick={onCancelEvent}>
            {cancelText}
          </BasicButton>
        )}
      </StyledButtonWrapper>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  .modal-dialog {
    margin: 8rem auto;
  }
  .modal-content {
    padding: ${(props) => props.padding || '1rem'};
    min-height: ${(props) => props.cusmin || '215px'};
    border: 1px solid #f1f1f1;
    box-shadow: 0 32px 64px 0 rgba(44, 39, 56, 0.08),
      0 16px 32px 0 rgba(44, 39, 56, 0.04);
  }
  .modal-header {
    border-bottom: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0px;
    svg {
      font-size: 50px;
      fill: ${color.primary};
    }
  }

  .modal-body {
    padding-top: ${(props) => (props.hasImgIcon ? 0 : 'auto')};
    font-size: 22px;
    font-weight: ${(props) => props.cusbold || '500'};
    min-height: calc(100% - 240px);
    overflow: hidden;
    word-break: break-all;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-footer {
    border-top: none;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  margin: 12px;
  justify-content: center;
  gap: 2rem;
`;

WarningPopup.defaultProps = {
  hasImgIcon: null,
  onClickEvent: null,
  confirmText: null,
  onCancelEvent: null,
  cancelText: null,
  children: null,
};

WarningPopup.propTypes = {
  // 是否顯示 modal
  show: PropTypes.bool.isRequired,
  // 點擊確認 modal
  onClickEvent: PropTypes.func,
  // 確認 btn text
  confirmText: PropTypes.string,
  // 點擊取消/關閉 modal
  onCancelEvent: PropTypes.func,
  // 取消/確認 btn text
  cancelText: PropTypes.string,
  // 是否有header icon
  hasImgIcon: PropTypes.node,
  // modal 內容
  children: PropTypes.node,
};

export default WarningPopup;
