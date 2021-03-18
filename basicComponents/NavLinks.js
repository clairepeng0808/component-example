import React from 'react';
import styled, { css } from 'styled-components';
import color from '@/style/color';

const StyledLinks = styled.div`
  ${(props) =>
    props.headerstyle &&
    css`
      display: flex;
      .nav-link {
        color: ${color.contrastPrimary};
        font-weight: 500;
        text-align: center;
        padding: 0.5rem 1rem 0.5rem 1rem;
        margin: 0 1.2rem 0 1.2rem;
        cursor: pointer;
        opacity: 0.4;
        &:hover {
          color: ${color.primaryHover};
        }
      }
      .currNav {
        color: ${color.primary};
        /* border-bottom: 5px solid ${color.primary}; */
        opacity: 1;
        position: relative;

        &::before {
          content: '';
          width: 90%;
          height: 5px;
          background-color: ${color.primary};
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 6px;
        }

        &::after {
          content: '';
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 6px 0 6px;
          border-color: ${color.primary} transparent transparent transparent;
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    `};
`;

const NavLinks = (props) => {
  return <StyledLinks {...props}>{props.children}</StyledLinks>;
};

export default React.memo(NavLinks);
