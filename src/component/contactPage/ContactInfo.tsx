import React from "react";
import "./stylesheet/contactInfo.scss";

const addressDetails = [
  {
    id: "contactHome",
    detailReference:
      "6386 Spring St undefined Anchorage, Georgia 12473 United States",
  },
  {
    id: "contactNumber",
    detailReference: "(843) 555-0130",
  },
  {
    id: "contactMail",
    detailReference: "willie.jennings@example.com",
  },
];

const AddressDetails = ({ id, detailReference }) => {
  return (
    <div className="addressDetail">
      <div id={id} className="contactLogo" />
      <p>{detailReference}</p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div className="googleMapApi">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d5055.061624545406!2d-149.89762554751957!3d61.217321104625796!3m2!1i1024!2i768!4f13.1!2m1!1s6386%20Spring%20St%20undefined%20Anchorage%2C%20%20Georgia%2012473%20United%20States!5e0!3m2!1sen!2sin!4v1686113905695!5m2!1sen!2sin"
          width="75%"
          height="378"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="googleMapLocationApi"
        />
      </div>
      <div className="addressContainer">
        {addressDetails.map(({ id, detailReference }) => (
          <AddressDetails key={id} id={id} detailReference={detailReference} />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
