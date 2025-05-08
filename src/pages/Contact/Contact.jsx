import React from 'react';
import { PageLayout } from "../../components/Body/PageLayout";
import { SocialIcons } from "../../components/Social/SocialIcons";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
<PageLayout>
  <div className="">
    <div className="container my-5 flex-grow-1">
      <div className="row">
        
        {/* Social Links */}
        <div className="col-md-6">
          <h2 className="mb-4">Keep in Touch</h2>
          <p className="lead mb-4">Feel free to reach out to me via any of the social platforms below:</p>
          <SocialIcons />
        </div>

        {/* Contact Form */}
        <div className="col-md-6">
          <h2 className="mb-4">Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</PageLayout>

  );
};