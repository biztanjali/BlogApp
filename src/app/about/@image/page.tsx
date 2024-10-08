import React from 'react'
import Image from 'next/image';
import aboutImage from "../../../../public/about.png";

function ImagePage() {
  return (
    <div className="width-40 height-90 position-relative">
    <Image src={aboutImage} alt="About" fill />
  </div>
  )
}

export default ImagePage