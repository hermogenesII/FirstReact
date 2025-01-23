import React from "react";

interface FormSubmitToast {
  toastMessage: string;
  showToast: boolean;
  onClose: () => void;
}

const Toast: React.FC<FormSubmitToast> = ({
  toastMessage,
  showToast,
  onClose,
}) => {
  if (!showToast) return null;
  return (
    <>
      <div
        className="toast align-items-center text-bg-primary border-0 position-fixed top-0 start-50 translate-middle-x mt-3"
        role="alert"
        style={{ display: "block" }}
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{toastMessage}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Toast;
