import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Display from "./Display";
import Gender from "./Gender";
import Biography from "./Biography";
import ProfilePhoto from "./ProfilePhoto";
import "./CreateProfile.css";

function CreateProfile() {
  const [page, setPage] = useState(0);
  const [imageBuffer, setImageBuffer] = useState(null);
  const navigate = useNavigate();
  const isLastPage = page === 3;
  const { userId } = useParams();
  const [formData, setFormData] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm();

  const handleGoBack = (e) => {
    e.preventDefault();
    console.log("Current page:", page);
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleContinue = async () => {
    console.log("handle continue");
    console.log("page", page);

    const isValid = await trigger();
    console.log("is Valid", isValid);
    if (page < 3 && isValid) {
      setPage(page + 1);
      setFormData(getValues());
      formData.userId = userId;
      console.log(formData);
    } else if (isValid) {
      if (page === 3) {
        handleFormSubmit(formData);
      } else {
        navigate("/success");
      }
    }
  };

  const handleSkip = async () => {
    console.log("skip");
    if (page === 2) {
      // Skip the Biography page
      setPage(page + 1); // Skip to the ProfilePhoto page
    } else if (page === 3) {
      handleFormSubmit(formData);
    }
  };

  const handleImageReady = (imageBuffer) => {
    // Store the image buffer in the state
    setImageBuffer(imageBuffer);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Display
          formMethods={{
            control,
            trigger,
            handleSubmit,
            formState: { isValid, errors },
          }}
        />
      );
    } else if (page === 1) {
      return (
        <Gender
          formMethods={{
            control,
            trigger,
            handleSubmit,
            formState: { isValid, errors },
          }}
        />
      );
    } else if (page === 2) {
      return (
        <Biography
          formMethods={{
            control,
            // trigger,
            handleSubmit,
            formState: { isValid, errors },
          }}
        />
      );
    } else {
      return (
        <ProfilePhoto
          formMethods={{
            control,
            // trigger,
            handleSubmit,
            formState: { isValid, errors },
          }}
          onImageReady={handleImageReady}
        />
      );
    }
  };

  const handleFormSubmit = async (form) => {
    //setIsSubmitting(true); // Start loading state
    setIsNavigating(true); // Start navigation state

    // Add userID to the form object
    form.userId = userId;

    // Attach image buffer to form
    if (imageBuffer) {
      form.photo = {
        type: "Buffer", // Indicate that the data is a buffer
        data: Array.from(new Uint8Array(imageBuffer)), // Convert buffer to an array of integers
        contentType: "image/jpeg", // Replace with the appropriate content type
      };
    }

    if (page === 3) {
      try {
        let token = localStorage.getItem("token");
        token = JSON.parse(token)?.authToken;

        const response = await fetch(
          "https://server-mmr.onrender.com/createprofile",
          {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          navigate(`/success/${result.newProfile.user}`); // Navigate on success
        } else {
          console.error("Server error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    }
    //setIsSubmitting(false); // End loading state
    setIsNavigating(true); // End navigation state
  };

  return (
    <div className="all-forms-container">
      <form
        className={`create-profile-forms-container ${
          isNavigating ? "blur-overlay" : ""
        }`}
      >
        {page !== 0 && (
          <button className="back-button" onClick={handleGoBack}>
            <i className="fas fa-arrow-left"></i>
            Back
          </button>
        )}
        {/* <div className={`all-forms ${isNavigating ? 'blur-overlay' : ''}`}> */}
        <div className="all-forms">{PageDisplay()}</div>

        <div className="button-group">
          <button
            type="button"
            className={`continue-button ${isLastPage ? "submit-button" : ""} ${
              isValid ? "valid" : "invalid"
            }`}
            onClick={handleSubmit(handleContinue)}
          >
            {isLastPage ? "Submit" : "Continue"}
          </button>
          {page === 2 || page === 3 ? (
            <button type="button" className="skip-button" onClick={handleSkip}>
              Not Now
            </button>
          ) : null}
        </div>
      </form>
      <div id="loader" className={isNavigating ? "show-load" : ""}></div>
    </div>
  );
}
export default CreateProfile;
