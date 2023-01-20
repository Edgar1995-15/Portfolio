import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import React, { FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p9piq1v",
        "template_b9yfpxd",
        formRef.current as any,
        "gU6BimkgtWxvEZv0P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <h5>khojayan.ed@gmail.com</h5>
            <a href="mailto:khojayan.ed@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+37494037405</h5>
            <a href="https://api.whatsapp.com/send?phone=37494037405">
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            required
            value={formValues.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your message"
            required
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
