import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const BasicIconButton = (props) => {
  const { children, title, onClick } = props;

  return (
    <StyledIconBtnBlock onClick={onClick} {...props}>
      <OverlayTrigger
        placement="bottom"
        overlay={<StyledTooltip>{title}</StyledTooltip>}
      >
        <StyledIcon {...props}>{children}</StyledIcon>
      </OverlayTrigger>
    </StyledIconBtnBlock>
  );
};

const StyledIconBtnBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  &:active {
    background-color: #dbe2ea;
  }
`;
const StyledIcon = styled.div`
  display: inline-block;
  padding: 12px;
  overflow: hidden;

  ${(props) =>
    props.editbtn &&
    css`
      background: url('images/icons/icon_edit.svg') no-repeat center center;
      &:hover,
      &:active {
        background: url('images/icons/icon_edit_hover.svg') no-repeat center
          center;
      }
    `};
  ${(props) =>
    props.blockbtn &&
    css`
      background: url('images/icons/icon-block.svg') no-repeat center center;
      &:hover,
      &:active {
        background: url('images/icons/icon-blockHover.svg') no-repeat center
          center;
      }
    `};
  ${(props) =>
    props.trashbtn &&
    css`
      background: url('images/icons/icon_trash.svg') no-repeat center 35%;
      &:hover,
      &:active {
        background: url('images/icons/icon_trash_hover.svg') no-repeat center
          35%;
      }
    `};
  ${(props) =>
    props.viewbtn &&
    css`
      background: url('images/icons/icon-view.svg') no-repeat center center;
      &:hover,
      &:active {
        background: url('images/icons/icon-viewHover.svg') no-repeat center
          center;
      }
    `};
  ${(props) =>
    props.sortbtn &&
    css`
      background: url('images/icons/icon-sort.svg') no-repeat center center;
      &:hover,
      &:active {
        background: url('images/icons/icon-sortHover.svg') no-repeat center
          center;
      }
    `};
  ${(props) =>
    props.enablebtn &&
    css`
      background: url('images/icons/icon_enable.svg') no-repeat center center;
      &:hover,
      &:active {
        background: url('images/icons/icon_enableHover.svg') no-repeat center
          center;
      }
    `};
`;
const StyledTooltip = styled(Tooltip)`
  .tooltip-inner {
    background-color: #7c9cbf;
    padding: 0px 10px;
    border-radius: 2px;
    font-size: 12px;
  }
  .arrow:before {
    display: none;
  }
`;
BasicIconButton.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

BasicIconButton.defaultProps = {
  children: null,
  title: null,
};
export default React.memo(BasicIconButton);
