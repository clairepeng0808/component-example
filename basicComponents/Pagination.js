import React from 'react';
import PropTypes from 'prop-types';
import color from '@/style/color';
import { reduce } from 'lodash';

const PageButtonRenderer = ({
  page,
  active,
  onPageChange
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  return (
    <button
      type="button"
      key={'pn_' + page}
      onClick={handleClick}
      style={
        {
          border: 'none',
          outline: 'none',
          background: 'none',
        }
      }
    >
      <li
        style={
        {
          width: '32px',
          height: '32px',
          lineHeight: '32px',
          textAlign: 'center',
          border: 'solid 1px ' + color.bgShade,
          borderRadius: '6px',
          margin: '5px',
          cursor: 'pointer',
          userSelect: 'none',
          backgroundColor: active ? color.primary : color.bgLight,
          color: active ? color.bgLight : color.contrasthighLight,
        }
      }
      >
        { page }
      </li>
    </button>
  );
};

PageButtonRenderer.propTypes = {
  page: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PageButtonRenderer;
