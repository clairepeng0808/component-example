import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { CloseIcon } from '@Basics/Icons';

const BasicModal = (props) => (
  <StyledModal {...props} closebutton={+props.closebutton}>
    <Modal.Header>
      <Modal.Title>{props.title}</Modal.Title>
      {props.closebutton && <CloseIcon onClick={props.onHide} size={28} />}
    </Modal.Header>
    {props.children}
  </StyledModal>
);

const StyledModal = styled(Modal)`
  .modal-content {
    padding: ${(props) => props.padding || '1rem'};
    min-height: ${(props) => props.cusmin || '400px'};
  }
  .modal-header {
    border-bottom: none;
    display: flex;
    justify-content: space-between;
  }
  .modal-title {
    font-size: 24px;
  }
  .modal-body {
    padding-top: 0px;
    min-height: calc(100% - 240px);
  }
  .modal-footer {
    &.border-top-none {
      border-top: none;
    }
  }
`;

BasicModal.propTypes = {
  closebutton: PropTypes.bool,
  title: PropTypes.string,
  onHide: PropTypes.func,
  children: PropTypes.node.isRequired,
};

BasicModal.defaultProps = {
  closebutton: false,
  title: null,
  onHide: null,
};
export default React.memo(BasicModal);
