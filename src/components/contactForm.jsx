import React from "react";

export default function ContactForm() {
  return (
    <div className="col-lg-8 mt-5 mt-lg-0">
      <form
        action="https://usebasin.com/f/67613077af3c"
        method="post"
        className="needs-validation"
        noValidate
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            minLength="5"
            maxLength="30"
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required
            minLength="10"
            maxLength="100"
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
