import React from 'react';
import '../Contact.css';
import mailIcon from '../contact_images/mailIcon.png';
import discordIcon from '../contact_images/discord.png';


const Contact = () => {
  return (
    <div className='contact-area'>
      <h2>
        Contact
      </h2>
      <div>
        <div className='account'>
          <img src={mailIcon} alt="" /><br />
          <a href="mailto:izutabi14@gmail.com">izutabi14@gmail.com</a><br />
        </div>
        <div className='account'>
          <img src={discordIcon} alt="" /><br />
          <a href="https://discord.com/users/807536333266354186">@tabibito14</a>
        </div>

      </div>
    </div>
  )
}

export default Contact
