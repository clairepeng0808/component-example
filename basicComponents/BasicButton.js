/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import React from 'react';
import styled, { css } from 'styled-components';
import color from '@/style/color';

const StyledButton = styled.button`
  color: ${color.white};
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height || '40px'};
  background-color: ${color.primary};
  border: solid 1.5px ${color.primary};
  /* box-shadow: 0 2px 4px 0 rgba(44, 39, 56, 0.05),
    0 1px 2px 0 rgba(44, 39, 56, 0.05); */
  border-radius: 6px;

  padding: 0.3rem 1rem;
  font-weight: 400;
  font-size: 1rem;
  /* display: flex;
  align-items: center; */

  &:hover,
  &:active {
    background-color: ${color.primaryHover};
    border: 1.5px solid ${color.primaryHover};
    /* box-shadow: 0 12px 18px 0 rgba(219, 226, 234, 0.6); */
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border: 1.5px solid ${color.primaryHover};
  }
  &:disabled {
    background-color: rgba(44, 39, 56, 0.08);
    border-color: transparent;
    color: #c2c5c9;

    /* box-shadow: 0 2px 4px 0 rgba(44, 39, 56, 0.08); */
  }

  /* size */
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `};

  ${(props) =>
    props.wide &&
    css`
      width: 326px;
    `};

  /* color */
  ${(props) =>
    props.primary &&
    props.inverse &&
    css`
      box-shadow: none;
      background-color: ${color.white};
      color: ${color.primary};
      &:hover,
      &:active,
      &:focus {
        box-shadow: none;
        background-color: rgba(124, 156, 191, 0.2);
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      border: solid 1.5px ${color.contrastPrimary};
      background-color: ${color.contrastPrimary};
      &:hover,
      &:active,
      &:focus {
        background-color: ${color.contrastPrimaryHover};
        border: solid 1.5px ${color.contrastPrimaryHover};
        /* box-shadow: 0 12px 18px 0 rgba(215, 192, 218, 0.2); */
      }
    `};

  ${(props) =>
    props.success &&
    css`
      border: solid 1.5px ${color.success};
      background-color: ${color.success};
      &:hover,
      &:active,
      &:focus {
        background-color: ${color.successHover};
        border: solid 1.5px ${color.successHover};
      }
    `};

  ${(props) =>
    props.danger &&
    css`
      border: none;
      background-color: ${color.error};
      box-shadow: none;
      &:hover,
      &:active,
      &:focus {
        background-color: ${color.errorDark};
        border: none;
      }
    `};

  ${(props) =>
    props.outlineError &&
    css`
      box-shadow: none;
      border: solid 1.5px ${color.error};
      color: ${color.error};
      background-color: ${color.white};
      &:focus,
      &:active {
        box-shadow: none;
        border: solid 1.5px ${color.errorDark};
        background-color: ${color.errorLight};
        color: ${color.errorDark};
      }
      &:hover {
        background-color: ${color.errorHoverLight};
        border: solid 1.5px ${color.errorDark};
        color: ${color.errorDark};
      }
    `};

  ${(props) =>
    props.outlineSuccess &&
    css`
      border: solid 1.5px ${color.success};
      background-color: ${color.white};
      color: ${color.success};
      box-shadow: none;
      &:hover {
        background-color: ${color.successHoverLight};
        color: ${color.successText};
        border: solid 1.5px ${color.successText};
      }
      &:focus,
      &:active {
        background-color: ${color.successLight};
        color: ${color.successText};
        border: solid 1.5px ${color.successText};
      }
    `}

  ${(props) =>
    props.unhighlighted &&
    css`
      box-shadow: none;
      border: solid 1.5px ${color.primary};
      background-color: #fff;
      color: ${color.primary};
      &:hover {
        background-color: ${color.bgTint};
        border: solid 1.5px ${color.secondary};
        color: ${color.secondary};
        box-shadow: none;
      }
      &:active,
      &:focus {
        box-shadow: none;
        background-color: ${color.bgShade};
        border: solid 1.5px ${color.secondary};
        color: ${color.secondary};
      }
    `};

  ${(props) =>
    props.dark &&
    css`
      border: solid 1.5px ${color.contrastPrimary};
      background-color: ${color.contrastPrimary};
      color: ${color.bgLight};
      &:hover,
      &:active,
      &:focus {
        background-color: ${color.contrastPrimaryHover};
        border: solid 1.5px ${color.contrastPrimaryHover};
      }
    `};

  /* 橘色系button */
  ${(props) =>
    props.warning &&
    css`
      border: none;
      background-color: ${color.warning};
      &:hover,
      &:active,
      &:focus {
        background-color: ${color.warningHoverLight};
        border: none;
      }
    `};
`;

const BasicButton = (props) => <StyledButton {...props}>{props.children}</StyledButton>;

export default React.memo(BasicButton);
