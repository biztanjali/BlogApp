import React from "react";

function AboutLayout({
  children,
  image,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  image: React.ReactNode;
}) {
  return (
    <div className="width-100 height-100 flex flex-row flex-align-center ">
      {children}
      {content}
      {image}
    </div>
  );
}

export default AboutLayout;
