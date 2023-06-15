import React from "react";
import "./stylesheet/contactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="physicalAddress">
      <div className="googleMapApi">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d5055.061624545406!2d-149.89762554751957!3d61.217321104625796!3m2!1i1024!2i768!4f13.1!2m1!1s6386%20Spring%20St%20undefined%20Anchorage%2C%20%20Georgia%2012473%20United%20States!5e0!3m2!1sen!2sin!4v1686113905695!5m2!1sen!2sin"
          width="75%"
          height="378"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="google_map_locationApi"
        ></iframe>
      </div>
      <div className="physicalAddressDetails">
        <div className="logo">
          <div id="contact_home" className="contact_logo" />
          <p>6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
        </div>

        <div className="logo">
          <div id="contact_number" className="contact_logo" />
          <p>(843) 555-0130</p>
        </div>
        <div className="logo">
          <div id="contact_mail" className="contact_logo" />
          <p>willie.jennings@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
