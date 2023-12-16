import React from "react";
import { render } from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Import the styles for the image gallery

export default function Carousel() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return <ImageGallery showThumbnails={false} showFullscreenButton={false} items={images} autoPlay={true} slideIndex={false} showPlayButton={false} additionalClass="w-full" />;
}

// Render the component to the root element
render(<Carousel />, document.getElementById("root")); // Replace "root" with the actual ID of your root element
