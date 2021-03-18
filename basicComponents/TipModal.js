/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col } from 'react-bootstrap';
import AlertMessage from './AlertMessage';
import BasicButton from './BasicButton';

function TipModal(props) {
  const messages = [];
  const values = [];
  if (props.modal.contentMessage) {
    props.modal.contentMessage.forEach((m) => {
      messages.push(
        <div
          key={m.message}
          style={{
            fontWeight: m.isBold ? 'bold' : 'normal',
          }}>
          <p>{m.message}</p>
        </div>
      );
    });
  }

  if (props.modal.contentValue) {
    props.modal.contentValue.forEach((v) => {
      values.push(
        <Row
          key={v.keyName + v.valueName}
          style={{
            marginBottom: '10px',
          }}>
          <Col sm={3}>{v.keyName}</Col>
          <Col>{v.valueName}</Col>
        </Row>
      );
    });
  }

  return (
    <div>
      <Modal show={props.modal.show} onHide={props.closeTipModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AlertMessage
            content={
              props.fail && props.fail.data ? props.fail.data.message : null
            }
          />
          {messages}
          {values}
        </Modal.Body>
        <Modal.Footer>
          <BasicButton
            // variant={props.modal.buttonColor || 'primary'}
            primary
            wide
            disabled={props.modal.buttonDisabled}
            onClick={() => {
              props.submitFunc();
              props.closeTipModal();
            }}>
            {props.modal.submitMessage}
          </BasicButton>
          <BasicButton
            type="button"
            unhighlighted
            wide
            hidden={!props.submitFunc}
            onClick={props.closeTipModal}>
            {props.t('cancel')}
          </BasicButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

TipModal.propTypes = {
  // tipModal 資料
  modal: PropTypes.object.isRequired,
  // 來自後台的錯誤訊息
  fail: PropTypes.object,
  // submit事件 (從 showTipModal 決定 func)
  submitFunc: PropTypes.func,
  // 關閉 tipModal
  closeTipModal: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
};

TipModal.defaultProps = {
  submitFunc: null,
  fail: null,
};

export default React.memo(TipModal);
