declare module 'react-slick' {
  import { ComponentType } from 'react';

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
    // Añade más configuraciones según sea necesario
  }

  const Slider: ComponentType<Settings>;
  export default Slider;
} 