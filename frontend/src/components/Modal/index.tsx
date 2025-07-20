import ReactModal from "react-modal";
import "./styles.css";
import type { IModalComponentProps } from "../../interfaces/IModal";

const ModalComponent = ({ isOpen, onRequestClose, title, children }: IModalComponentProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title || "Modal"}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={onRequestClose} className="modal-close">×</button>
      </div>
      <div className="modal-body">{children}</div>
    </ReactModal>
  );
};

export default ModalComponent;
