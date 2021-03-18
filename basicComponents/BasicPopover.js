import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';
import color from '@/style/color';
import copyToClipboard from '@/utils/copyToClipboard';

const BasicPopover = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBasicPopover {...props} open={open} width={props.width}>
      <div className="toggleButton" onClick={() => setOpen(true)}>
        {props.children}
      </div>
      <div className="toggleCard">
        <div className="cardTitle">
          {props.title}
          <FiX size={18} onClick={() => setOpen(false)} />
        </div>
        <div className="cardBody d-flex justify-content-between">
          {props.body}
          {props.copyText ? (
            <div
              className="operatingBtn"
              onClick={() => copyToClipboard(props.copyText)}
            >
              <Image src="images/icons/icon-copy.svg" />
            </div>
          ) : null}
        </div>
      </div>
      <div className="clearArea" onClick={() => setOpen(false)} />
    </StyledBasicPopover>
  );
};
const StyledBasicPopover = styled.div`
  position: relative;

  .buttonHover {
    &:hover {
      background-color: ${color.bgShade};
      border-radius: 30px;
    }
  }

  .toggleButton {
    cursor: pointer;
  }

  .toggleCard {
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 30px;
    border: 1px solid ${color.bgShade};
    border-radius: 10px;
    z-index: 6;
    box-shadow: 0 1px 8px 0 rgba(44, 39, 56, 0.3);
    min-width: 150px;
    width: ${(props) => (props.width ? props.width : '100%')};

    .cardTitle {
      display: flex;
      justify-content: space-between;
      background-color: ${color.highLight};
      color: black;
      border-radius: 10px 10px 0 0;
      padding: 3px 7px 3px 14px;

      svg {
        position: relative;
        top: 2px;
        cursor: pointer;
      }
    }

    .cardBody {
      background-color: white;
      border-radius: 0 0 10px 10px;
      color: ${color.contrastSecondary};
      font-size: 12px;
      padding: 8px 7px 7px 14px;

      .operatingBtn {
        cursor: pointer;
        &:hover {
          background-color: ${color.bgShade};
          border-radius: 30px;
        }
      }
    }
  }

  .clearArea {
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: 5;
    cursor: default;
    overflow: hidden;
  }
`;

export default React.memo(BasicPopover);
