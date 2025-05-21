import contactStyle from './Contact.module.css';
import { TiMessage } from "react-icons/ti";
const Contact = () => {
  return (
<div className={contactStyle.contactContainer}>
      <div className={contactStyle.icon}><TiMessage /></div>
      <h1 className={contactStyle.title}>Get in touch</h1>
      <p className={contactStyle.subtitle}>We love to hear from you</p>
      <form className={contactStyle.form}>
        <input
          type="text"
          placeholder="Full name"
          className={contactStyle.input}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          className={contactStyle.input}
          required
        />
        <input
          type="tel"
          placeholder="Phone number"
          className={contactStyle.input}
        />
        <textarea
          placeholder="Message"
          className={contactStyle.textarea}
          rows="4"
          required
        ></textarea>
        <button type="submit" className={contactStyle.button}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
