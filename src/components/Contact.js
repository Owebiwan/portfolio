import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_email",
        "port_template",
        e.target,
        "user_PIsICkq7I4UcZFT1u1NbP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.setState({
      disabled: true,
      emailSent: true,
    });
    e.target.reset();
  }

  render() {
    return (
      <div id="contact">
        <section>
          <h2>Get in touch</h2>
          <form className="contact-form" onSubmit={this.sendEmail}>
            <input
              type="hidden"
              name="contact_number"
              onChange={this.handleChange}
            />
            <div className="form-input">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input">
              <label>Message</label>
              <textarea name="message" className="form-control" rows="5" />
            </div>
            <div className="submit">
              <button type="submit" className="btn btn-success">
                Send <i className="fa fa-paper-plane"></i>
              </button>
            </div>
            <div className="mailStatus">
              {this.state.emailSent === true && (
                <p className="success-msg">Email Sent</p>
              )}

              {this.state.emailSent === false && (
                <p className="err-msg">Email Not Sent</p>
              )}
            </div>
          </form>
        </section>
      </div>
    );
  }
}
