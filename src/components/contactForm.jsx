import React from "react";

export default function ContactForm() {
  return (
    <div class="col-lg-8 mt-5 mt-lg-0">
      <form
        action="https://usebasin.com/f/67613077af3c"
        method="post"
        class="needs-validation"
        novalidate
      >
        <div class="row">
          <div class="col-md-6 form-group">
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div class="form-group mt-3">
          <input
            type="text"
            class="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            minlength="5"
            maxlength="30"
          />
        </div>
        <div class="form-group mt-3">
          <textarea
            class="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required
            minlength="10"
            maxlength="100"
          ></textarea>
        </div>

        <div class="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
