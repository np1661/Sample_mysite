import React from 'react';
import {Element} from "react-scroll";
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Contact.css";

const Contact = () => {
  return (
    <Element name="contact" class="contact">
        <h1>Contact</h1>
        <div className="contact__container">
            <p>Email : <span>abcde@gmail.com</span></p>
            <p>Github UserName : <span>@abcdefghij</span></p>
            <div className="contact__icon">
            <a href="www.google.com">
                <IconButton>
                    <FacebookIcon />
                </IconButton>
            </a>
            <a href="www.google.com">
                <IconButton>
                    <LinkedInIcon />
                </IconButton>
            </a>
            <a href="www.google.com">
                <IconButton>
                    <InstagramIcon />
                </IconButton>
            </a>
        </div>
        </div>
        
    </Element>
  )
}

export default Contact