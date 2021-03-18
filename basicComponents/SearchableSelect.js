import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from '@/style/color';
import Select from 'react-select';

const customStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: '0 4px 8px 0 rgba(44, 39, 56, 0.03)',
    border: state.isFocused
      ? `2px solid ${color.primary}`
      : `1px solid ${color.bgShade}`,

    '&:hover': {
      border: `2px solid ${color.primary}`,
    },
  }),
  placeholder: (base, state) => ({
    ...base,
    color: 'rgba(44, 39, 56, 0.24)',
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    backgroundColor: 'none',
  }),
  indicatorContainer: (base, state) => ({
    ...base,
    color: state.isFocused ? `${color.primary}` : `${color.bgShade}`,
  }),
};

const SearchableSelect = React.forwardRef((props, ref) => (
  <Select {...props} styles={customStyles} ref={ref} />
));

SearchableSelect.propTypes = {};

export default React.memo(SearchableSelect);
