/**
 * Parent Presental Component which wraps the Next JS Image component. This component is used to display images in the application as the default replacement for vanilla image tags.
 *
 * @param {React.ReactNode} props.children - The children elements of the product component.
 * @returns {React.ReactElement} The rendered product component.
 */

import React from "react";

import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  alt: string;
}

const Image: React.FC<ImageProps> = ({
  alt = "Enter alt text here",
  ...props
}) => {
  return (
    <div className="flex justify-center align-middle items-center max-h-screen">
      <NextImage {...props} alt={alt} />;
    </div>
  );
};

export default Image;
