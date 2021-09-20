import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Social() {
    return (
        <div className="flex justify-center space-x-8 text-sm animate-bounce">
          <SocialIcon url="https://facebook.com/sankhalifa33" />
          <SocialIcon url="https://www.linkedin.com/in/sankalpa-neupane-215639208/" />
          <SocialIcon url="https://www.instagram.com/_sankalpa_neupane/" />
          <SocialIcon url="https://github.com/sankalpa-sys" />
        </div>
    )
}

export default Social
