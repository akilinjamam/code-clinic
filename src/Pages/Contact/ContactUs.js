import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";

const ContactUs = () => {
  const [developers, setDevelopers] = useState([]);
  useEffect(() => {
    fetch("contactUs.json")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  return (
    <div className="mt-10 ">
      <h1 className="text-4xl text-center font-semibold">
        Contact our Developers
      </h1>
      <div className="grid gap-5 justify-center lg:grid-cols-3 md:grid-cols-2 mt-10 mb-5">
        {developers?.map((developer) => (
          <ContactCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
