"use client";

import Image from "next/image";
import { NextButton, PrevButton, usePrevNextButtons } from "./slide-nav";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import "./embla.css";

export const Partone = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, loop: true },
    [Autoplay()]
  );

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);
  return (
    <div className="container relative">
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="h-[600px] bg-[#ccc] rounded-xl overflow-hidden relative">
                <Image
                  className="object-cover w-full h-full"
                  src="/server-woman.jpeg"
                  alt=""
                  width={1216}
                  height={600}
                />
                <div className="bg-[#141624]/40 absolute inset-0" />
                <div className="p-10 bg-white rounded-xl w-[600px] absolute left-3 bottom-3">
                  <div className="w-[97px] h-7 border bg-[#4B6BFB] rounded-md text-white text-center mb-4">
                    Technology
                  </div>
                  <div className="font-semibold text-4xl mb-6">
                    Grid system for better Design User Interface
                  </div>
                  <div className="text-[#97989F]">August 20, 2022</div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="h-[600px] bg-[#ccc] rounded-xl overflow-hidden relative">
                <Image
                  className="object-cover w-full h-full"
                  src="/server-woman.jpeg"
                  alt=""
                  width={1216}
                  height={600}
                />
                <div className="bg-[#141624]/40 absolute inset-0" />
                <div className="p-10 bg-white rounded-xl w-[600px] absolute left-3 bottom-3">
                  <div className="w-[97px] h-7 border bg-[#4B6BFB] rounded-md text-white text-center mb-4">
                    Technology
                  </div>
                  <div className="font-semibold text-4xl mb-6">
                    Grid system for better Design User Interface
                  </div>
                  <div className="text-[#97989F]">August 20, 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="embla__controls mb-[100px]">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
