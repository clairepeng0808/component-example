import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Tabs } from 'react-bootstrap';
import color from '@/style/color';

const StyledTabs = styled(Tabs)`
  ${(props) =>
    props.primarystyle &&
    css`
      &.nav-tabs {
        border-bottom: none;
        .nav-link {
          margin-right: 8px;
          font-size: ${props.fontSize || '14px'};
          font-weight: 500;
          letter-spacing: 1.75px;
          text-align: center;
          color: #868195;
          padding: ${props.cuspadding || '13px'};
          border-radius: 4px;
          background-color: ${color.highLight};
          cursor: pointer;
          &.active {
            color: ${color.bgLight};
            background-color: ${color.primary};
            border-color: #dee2e6 #dee2e6 ${color.bgLight};
            padding: ${props.cuspadding || '13px'};
            cursor: pointer;
          }
        }
      }
    `};

  ${(props) =>
    props.datestyle &&
    css`
      flex-wrap: nowrap;
      width: 100%;
      box-shadow: 0 4px 8px 0 rgba(44, 39, 56, 0.2);

      &.navlist {
        a {
          width: 15%;
        }
        a:last-child {
          width: calc(100% - 15%);
        }
      }
      a {
        position: relative;
        border: none !important;
        background-color: white;
        color: ${props.defaultcolor};
        text-align: center;
        padding: 8px 10px 8px 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;

        &:not(:first-child):not(:last-child) {
          border-top-left-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }

        &:not(:last-child) {
          &::after {
            content: '';
            position: absolute;
            top: 10px;
            right: 0;
            height: 50%;
            border-right: 1px solid ${props.defaultcolor};
          }
        }

        &:first-child {
          border-radius: 6px 0 0 0;
        }
        &:last-child {
          border-radius: 0 6px 0 0;
          overflow: visible;
        }
      }
      .active {
        color: ${color.primary} !important;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 3px;
          background-color: ${color.primary};
        }
      }
    `};

  ${(props) =>
    props.headerstyle &&
    css`
      &.nav {
        display: flex;
        justify-content: space-evenly !important;
        flex-wrap: nowrap;
      }
      &.nav-tabs {
        border-bottom: solid 1px rgba(119, 113, 136, 0.2);
        .nav-link {
          font-weight: 500;
          color: ${color.contrastSecondary};
          text-align: center;
          padding: 0.5rem 1.5rem 0.5rem 1.5rem;
          margin: 0 1.5rem 0 1.5rem;
          cursor: pointer;
          border: none;
          opacity: 0.4;
          &.active {
            color: ${color.primary};
            border-bottom: 4px solid ${color.primary};
            opacity: 1;
            position: relative;

            &::after {
              content: '';
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 12px 8px 0 8px;
              border-color: ${color.primary} transparent transparent transparent;
              position: absolute;
              bottom: -13px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
          &:hover {
            color: ${color.primaryHover};
            opacity: 1;
          }
        }
      }
    `};
`;

const BasicTabs = (props) => (
  <StyledTabs {...props}>{props.children}</StyledTabs>
);

BasicTabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(BasicTabs);
