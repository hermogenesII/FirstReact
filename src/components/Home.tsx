import React, { useState } from "react";
import FormSubmitModal from "./Modal/FormSubmitModal";
import Toast from "./Toast/Toast";

interface FormData {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

const Home: React.FC = () => {
  const [FormData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [showToast, setShowToast] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const openModal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from submitting directly
    if (
      !FormData.name ||
      !FormData.email ||
      !FormData.password ||
      !FormData.dateOfBirth
    ) {
      alert("All fields are required!");
      return;
    }
    if (!FormData.email.includes("@")) {
      alert("Invalid email address!");
      return;
    }
    setIsModalOpen(true); // Open the confirmation modal
  };

  const handleConfirmSubmit = async () => {
    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          if (!openModal) reject("Something went wrong");
          else resolve("Success");
        }, 1000)
      );
      console.log("Form Submitted", FormData); // Submit the form when confirmed
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      alert("Submission failed! Please try again.");
    } finally {
      setFormData({
        name: "",
        email: "",
        password: "",
        dateOfBirth: "",
      });
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  const handleCancelSubmit = () => {
    setIsModalOpen(false); // Close the modal without submitting
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Form</h1>
        <form onSubmit={openModal}>
          {" "}
          {/* Open modal on form submit */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              name="name"
              placeholder="Name"
              value={FormData.name}
              onChange={handleInput}
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              name="email"
              placeholder="Email"
              value={FormData.email}
              onChange={handleInput}
            />
            <label htmlFor="floatingEmail">Email Address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              value={FormData.password}
              onChange={handleInput}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="floatingDoB"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={FormData.dateOfBirth}
              onChange={handleInput}
            />
            <label htmlFor="floatingDoB">Date of Birth</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* Modal */}
        <FormSubmitModal
          title="Confirm"
          bodyContent="Please confirm if all information is correct."
          isOpen={isModalOpen} // Modal visibility controlled by state
          onConfirm={handleConfirmSubmit} // Submit form on confirm
          onCancel={handleCancelSubmit} // Close modal without submitting
        />

        {/* Toast */}
        <Toast
          toastMessage="Added Successfully"
          showToast={showToast}
          onClose={handleToastClose}
        />
      </div>
    </>
  );
};

export default Home;
