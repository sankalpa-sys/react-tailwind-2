import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Social() {
    return (
        <div className="flex justify-center space-x-8 text-sm animate-bounce">
          <SocialIcon url="https://facebook.com/sankhalifa33" className="bg-white rounded-full" />
          <SocialIcon url="https://www.linkedin.com/in/sankalpa-neupane-215639208/" className="bg-white rounded-full" />
          <SocialIcon url="https://www.instagram.com/_sankalpa_neupane/" className="bg-white rounded-full" />
          <SocialIcon url="https://github.com/sankalpa-sys" className="bg-white rounded-full" />
        </div>
    )
}

export default Social
