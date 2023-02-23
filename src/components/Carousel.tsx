import React from "react";
import { useSpringCarousel } from 'react-spring-carousel'
import { Product } from "../common/Product";
import { ProductTile } from "./ProductTile";

interface Props {
    data: Product[];
}

export const Carousel = ({data} : Props) => {

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: true,
        items: data.map((item : Product) => {
          return {
            id: item.id,
            renderItem: <ProductTile data={item}/>
          }
        }),
    });

    return (
        <div className="product-list-carousel">
            <div role="list">{carouselFragment}</div>
            <button onClick={slideToPrevItem}>Prev item</button>
            <button onClick={slideToNextItem}>Next item</button>
        </div>
    );
}