import React from "react";
import "./Media.css";
import { socialMediaLinks } from "../info";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faGithub,faLinkedin,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
  fab,
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram
)

function SocialMedia() {
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github" target="_blank">
        <i class="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
        <i class="fab fa-linkedin"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
        <i class="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gitlab ?
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank">
        <i class="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

      {socialMediaLinks.facebook ?
      <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
        <i class="fab fa-facebook-f"></i>
        <span></span>
      </a>
      :
      null}

       {socialMediaLinks.instagram ?
      <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank">
        <i class="fab fa-instagram"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.twitter ?
      <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
        <i class="fab fa-twitter"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.medium ? 
      (<a href={socialMediaLinks.medium} className="icon-button medium" target="_blank">
        <i class="fab fa-medium"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.stackoverflow ? 
      (<a href={socialMediaLinks.stackoverflow} className="icon-button stack-overflow" target="_blank">
        <i class="fab fa-stack-overflow"></i>
        <span></span>
      </a>)
      :
      null}

    </div>
  );
}

export default SocialMedia
