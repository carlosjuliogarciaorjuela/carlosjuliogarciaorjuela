'use client';

import React from "react";
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  images: string[];
  autoplay?: boolean;
  speed?: number;
  children?: React.ReactNode;
};

export const Carousel = ({
  images,
  autoplay = true,
  speed = 3000,
  children,
}: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: speed,
    prevArrow: <ChevronLeft className="text-white hover:text-blue-400" fontSize="large" />,
    nextArrow: <ChevronRight className="text-white hover:text-blue-400" fontSize="large" />,
  };

  return (
    <div className="relative w-full h-auto max-h-screen min-h-[400px] md:min-h-[600px] overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full flex items-center justify-center">
            <Image
              src={img}
              alt={`Carousel ${index + 1}`}
              layout="responsive"
              width={1920}
              height={1080}
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

