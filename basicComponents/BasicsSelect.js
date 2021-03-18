import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '@/style/color';
import Select from 'react-select';

const customStyles = {
  option: (base, state) => ({
    background:
      state.isSelected &&
      `url(images/icons/icon-check.svg) no-repeat 8px center ${color.white}`,
    color: state.isSelected && `${color.black}`,
    padding: '4px 0 4px 40px',

    '&:hover': {
      backgroundColor: state.isSelected ? `${color.white}` : `${color.primary}`,
      color: state.isSelected ? `${color.black}` : `${color.white}`,
      cursor: state.isSelected ? 'default' : 'pointer',
    },
  }),
  control: (base, state) => ({
    ...base,
    height: '38px',
    backgroundColor: state.isDisabled && `${color.white}`,
    borderColor: state.isDisabled ? `${color.white}` : `${color.bgShade}`,
    borderRadius: '6px',
    boxShadow: state.isFocused && `0 0 0 1.5px ${color.primary}`,

    '&:hover': {
      borderColor: `${color.bgShade}`,
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: 'rgba(44, 39, 56, 0.24)',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: `${color.primary}`,
    display: state.isDisabled ? 'none' : 'flex',

    '&:hover': {
      color: `${color.primary}`,
    },
  }),
  singleValue: (base, state) => ({
    color: state.isDisabled && `${color.secondary}`,
  }),
  valueContainer: (base, state) => ({
    ...base,
    padding: state.isDisabled ? '2px 0' : '2px 12px',
  }),
  indicatorsContainer: (base, state) => ({
    ...base,
    height: '38px',
  }),
};

const BasicSelect2 = React.forwardRef((props, ref) => {
  return (
    <div className={`select-container ${props.grid}`}>
      <Select
        {...props}
        innerRef={ref}
        classNamePrefix={props.className}
        isSearchable={props.isSearchable || false}
        isDisabled={props.disabled || false}
        styles={customStyles}
      />
    </div>
  );
});

export default React.memo(BasicSelect2);
