import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Slider from "../../common/Slider";
import { Section } from "../../common/Section";

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

const Gallery = () => {
  return (
    <>
      <Slider vertical={true} inset={`Lorem Dolorsed diam nonumy `} />
      <Section
        title={"Lorem ipsum dolor "}
        body={images ? <ImageGallery items={images} /> : null}
      />
    </>
  );
};

export default Gallery;
