import React from "react";
import { useSpringCarousel } from 'react-spring-carousel'
import { ReactComponent as ChevronCircle } from "../common/chevron-circled.svg";
import { Product } from "../common/Product";
import { ProductTile } from "./ProductTile";

interface Props {
    data: Product[];
}

export const Carousel = ({data} : Props) => {

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        itemsPerSlide: 4,
        items: data.map((item : Product) => {
          return {
            id: item.id,
            renderItem: <ProductTile data={item}/>
          }
        }),
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="m-auto max-w-screen-xl bg-white py-5">
                <div role="list" className="overflow-hidden">{carouselFragment}</div>
                <div className="flex mt-4 items-end flex-col px-3">
                    <div className="flex shrink self-auto flex-row text-dark_grey">
                        <button onClick={slideToPrevItem}>
                            <ChevronCircle className="w-10 h-10 rotate-180"/>
                        </button>
                        <div className="flex flex-col grow-0 basis-2 w-2"></div>
                        <button onClick={slideToNextItem}>
                            <ChevronCircle className="w-10 h-10"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}