import ReactModal from 'react-modal';

const Modal = ({ onClose, children }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className="modal-container"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;