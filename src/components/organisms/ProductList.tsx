import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { ReactComponent as ChevronCircle } from "../../icons/chevron-circled.svg";
import { Product } from "../../models/Product";
import { ProductTile } from "../molecules/ProductTile";

interface Props {
  data: Product[];
}

export const ProductList = ({ data }: Props) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
    getCurrentActiveItem,
  } = useSpringCarousel({
    itemsPerSlide: 4,
    items: data.map((item: Product) => {
      return {
        id: item.id,
        renderItem: <ProductTile data={item} />,
      };
    }),
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideChange") {
      setActiveItem(getCurrentActiveItem().index);
    }
  });

  return (
    <>
      <div role="list" className="overflow-hidden select-none">
        {carouselFragment}
      </div>
      <div className="flex sm:mt-4 items-center lg:items-end flex-col px-3">
        <div className="flex my-2 justify-center flex-row self-stretch sm:hidden ">
          {data.map((item: Product, index) => (
            <div className="rounded-full mx-1 bg-nav_grey" key={item.id}>
              <div
                className={`rounded-full w-2 h-2 bg-dark_grey ${
                  activeItem === index ? "opacity-1" : "opacity-0"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="hidden sm:flex shrink self-auto flex-row text-dark_grey">
          <button onClick={slideToPrevItem}>
            <ChevronCircle className="w-10 h-10 rotate-180" />
          </button>
          <div className="flex flex-col grow-0 basis-2 w-2"></div>
          <button onClick={slideToNextItem}>
            <ChevronCircle className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  );
};
