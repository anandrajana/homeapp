import React from "react";
import { Product } from "../common/Product";

interface Props {
    data: Product;
}

export const ProductTile = ({data} : Props) => {
    return <div role="listitem">{data.id}</div>;
}