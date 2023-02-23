import React from "react";
import { Product } from "../common/Product";

interface Props {
    data: Product;
}

export const ProductTile = ({data} : Props) => {
    return (
        <div role="listitem" className="product-list-item">
            <a href={`in/cars/${data.id}`}>
                <div className="product-info">
                    {data.bodyType.toUpperCase()}
                </div>
                <div className="product-image">
                    <picture>
                        <img src={data.imageUrl} alt={data.modelName}></img>
                    </picture>
                </div>
            </a>
            <div className="product-nav-links"></div>
        </div>
    );
}