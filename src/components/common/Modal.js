import React from 'react';
import ReactModal from 'react-modal';
import { node, func, bool } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as CloseSvg } from 'components/svg/close.svg';

const modalStyle = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: 'calc(100vh - 50px)',
    overflowY: 'auto'
  }
};

const CrossContainer = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

ReactModal.setAppElement('#app');

const Modal = ({ children, shouldClose, closeHandler, isOpen }) => (
  <ReactModal
    style={modalStyle}
    shouldCloseOnOverlayClick={shouldClose}
    onRequestClose={closeHandler}
    isOpen={isOpen}
  >
    {
      <div className="frame">
        <CrossContainer>
          <CloseSvg onClick={closeHandler} />
        </CrossContainer>
        <div className="scroll">{children}</div>
      </div>
    }
  </ReactModal>
);

Modal.propTypes = {
  children: node.isRequired,
  shouldClose: bool.isRequired,
  closeHandler: func.isRequired,
  isOpen: bool.isRequired
};

export default Modal;
