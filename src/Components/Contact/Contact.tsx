import { useRef, useState, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface Errors {
  user_name?: string;
  user_email?: string;
  message?: string;
}

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    let isValid = true;

    if (!form.current) {
      return false;
    }

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

  const sendEmail = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!form.current) return;
    if (isLoading) return;

    if (!validateForm()) return;

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_giaqmyh",
        "template_poq85d6",
        form.current!,
        "2hztsgudSXS9mZwzX"
      );

      setIsFormVisible(false);
      setSuccessMessage("Appreciate it! I'll get back to you ASAP.");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="block__contact" id="Contact">
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
              <button
                className="button__large"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span>Loading</span>
                    <FontAwesomeIcon icon={faSpinner} spin />
                  </>
                ) : (
                  <div>Send</div>
                )}
              </button>
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
