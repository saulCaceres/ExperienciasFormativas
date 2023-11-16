// import React, { useState } from 'react';
// import '../home/audifonos.css'

// const CarouselContainer = ({ images  }) => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const previousImage = () => {
//     const newIndex = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   const nextImage = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(newIndex);
//   };

//   return (
//     <div className="carousel">
//       <button onClick={previousImage}>Previous</button>
//       <img src={images[currentImageIndex]} alt="Carousel Image" />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// export default CarouselContainer;