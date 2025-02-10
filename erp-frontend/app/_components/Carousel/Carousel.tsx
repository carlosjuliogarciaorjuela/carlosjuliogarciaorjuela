"use client";
import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  images: string[];
  autoplay?: boolean;
  speed?: number;
  children?: React.ReactNode;
};

type ArrowProps = {
  onClick?: () => void;
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-2 md:left-4 z-10 text-white hover:text-blue-400 transition-colors backdrop-blur-sm rounded-full p-1"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <ChevronLeft fontSize="large" className="w-8 h-8 md:w-12 md:h-12" />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-2 md:right-4 z-10 text-white hover:text-blue-400 transition-colors backdrop-blur-sm rounded-full p-1"
    onClick={onClick}
    aria-label="Next slide"
  >
    <ChevronRight fontSize="large" className="w-8 h-8 md:w-12 md:h-12" />
  </button>
);

export const Carousel = ({
  images,
  autoplay = true,
  speed = 2000,
  children,
}: CarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: speed,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: true },
      },
      {
        breakpoint: 640,
        settings: { arrows: false },
      },
    ],
  };

  return (
    <div className="relative w-full h-full aspect-[16/9]">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-full aspect-[16/9]">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={img}
                alt={`Carousel ${index + 1}`}
                width={1920}
                height={1080}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
                className="object-contain object-center w-full h-full"
                priority={index < 3}
                quality={90}
              />
            </div>
          </div>
        ))}
      </Slider>

      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
