import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import color from '@/style/color';

const BasicDropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledBasicDropdown
      {...props}
      onClick={() => setOpen(!open)}
      open={open}
      tableHeader={props.tableHeader}
    >
      {props.tableHeader ? (
        <div className="toggleButton check">
          <Image
            src={
              open
                ? '/images/icons/icon-dropdown-active.svg'
                : '/images/icons/icon-dropdown.svg'
            }
            style={{
              marginLeft: '5px',
            }}
          />
        </div>
      ) : null}
      <div className="toggleButton buttonHover">{props.children}</div>
      <div className="clearArea" onClick={() => setOpen(false)} />
    </StyledBasicDropdown>
  );
};
const StyledBasicDropdown = styled.div`
  position: relative;

  .buttonHover {
    &:hover {
      background-color: ${color.bgShade};
      border-radius: 30px;
    }
  }

  .toggleButton {
    padding: ${(props) => (props.tableHeader ? '0' : '0 3px 0 3px')};
    cursor: pointer;
  }

  .toggleMenu {
    display: ${(props) => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 30px;
    right: ${(props) => (props.tableHeader ? '-10px' : '-4px')};
    background-color: white;
    border-radius: 4px;
    color: ${color.contrastSecondary};
    font-size: 12px;
    box-shadow: 0 1px 8px 0 rgba(44, 39, 56, 0.3);
    padding-top: 5px;
    z-index: 6;
    cursor: pointer;
    min-width: 100px;

    div {
      padding: 5px 10px 5px 10px;
      text-align: left;
      &:hover {
        background-color: ${color.highLight};
      }
    }

    .menu--active {
      color: black;
    }

    &::after {
      content: '';
      position: absolute;
      top: -8px;
      right: 12px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px 8px;
      border-color: transparent transparent white transparent;
      filter: drop-shadow(1px -1px 1px rgba(44, 39, 56, 0.2));
    }
  }

  .check div {
    display: grid;
    grid-template-columns: 20px 1fr;

    svg {
      color: ${color.primary};
      position: relative;
      top: 1px;
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

export default React.memo(BasicDropdown);
