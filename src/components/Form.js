import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xojsxpi",
        "template_sp692sq",
        e.target,
        "2i2gazxtl-n-gnf7y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail} className="form" ref={form}>
        <input
          className="input-box"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="input-box"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="input-box textarea"
          placeholder="Message"
          name="message"
        />
        <input type="submit" value="CONTACT" className="btn-form" />
      </form>
    </div>
  );
}
