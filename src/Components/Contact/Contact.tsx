import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Button from "../Button/Button";

export const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName) {
      newErrors.user_name = "Name is required";
      isValid = false;
    }

    if (!userEmail) {
      newErrors.user_email = "Email is required";
      isValid = false;
    } else if (!validateEmail(userEmail)) {
      newErrors.user_email = "Invalid E-Mail Address";
      isValid = false;
    }

    if (!message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await emailjs.sendForm(
          "service_giaqmyh",
          "template_poq85d6",
          form.current,
          "2hztsgudSXS9mZwzX"
        );

        console.log("Successfully sent Email");
        setIsFormVisible(false);
        setSuccessMessage("Appreciate it! I'll get back to you ASAP.");
      } catch (error) {
        console.log(error.text);
      }
    }
  };

  return (
    <div>
      <div className="block__contact">
        {isFormVisible ? (
          <div className="Form">
            <h1 className="heading__gradient">Reach out!</h1>

            <form ref={form} onSubmit={sendEmail}>
              <label className="text__default">Name</label>
              <input className="Form__input" type="text" name="user_name" />
              {errors.user_name && (
                <p className="error-message">{errors.user_name}</p>
              )}
              <label className="text__default">Email</label>
              <input className="Form__input" type="email" name="user_email" />
              {errors.user_email && (
                <p className="error-message">{errors.user_email}</p>
              )}
              <label className="text__default">Message</label>
              <textarea className="text__area-default" name="message" />
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
              <input className="button__large" type="submit" value="Send" />
            </form>
          </div>
        ) : (
          <div className="content__text">
            <p className="text__default">{successMessage}</p>
            <Button text="Return Home" url="/" />
          </div>
        )}
      </div>
    </div>
  );
};
