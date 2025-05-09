// SocialIcons.jsx
import React from 'react';
import styles from './SocialIcons.module.scss';
import socials from "../../data/socials.json";

export const SocialIcons = () => {
  return (
    <div className="d-flex gap-2 mb-4">
      {socials.map((social, index) => (
        <div key={index} className={`shadow-lg ${styles.iconWrapper}`}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-4 d-flex align-items-center justify-content-center"
          >
            <i className={`bi ${social.icon} text-dark fs-3`}></i>
          </a>
        </div>
      ))}
    </div>
  );
};