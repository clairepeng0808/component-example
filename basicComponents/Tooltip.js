import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Popover } from 'react-bootstrap';
import color from '@/style/color';
import { CloseIcon } from '@/components/basics/Icons';

const popperConfig = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
};

const Tooltip = ({ setShow, show, target, title, children, placement }) => (
  <Overlay
    onHide={() => setShow(false)}
    show={show}
    target={target || ''}
    rootClose
    placement={placement}
    popperConfig={popperConfig}
  >
    <Popover id="popover-basic">
      <Popover.Title className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>
        <CloseIcon
          fill={color.contrastPrimary}
          fillOnHover={color.contrastSecondary}
          onClick={setShow}
          onClickValue={false}
          size={22}
        />
      </Popover.Title>
      <Popover.Content>{children}</Popover.Content>
    </Popover>
  </Overlay>
);

Tooltip.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool.isRequired,
  target: PropTypes.object,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

Tooltip.defaultProps = {
  target: null,
  setShow: null,
};

export default React.memo(Tooltip);
