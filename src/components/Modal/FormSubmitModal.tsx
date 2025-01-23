import React from "react";

// import "./FormSubmitModal.scss";

interface FormSubmitModalProps {
  title: string;
  bodyContent: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const FormSubmitModal: React.FC<FormSubmitModalProps> = ({
  title,
  bodyContent,
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <>
      <div className="modal-backdrop fade show"></div> {/* Overlay */}
      <div
        className="modal fade show"
        style={{ display: "block" }}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={onCancel}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{bodyContent}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onConfirm}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSubmitModal;
