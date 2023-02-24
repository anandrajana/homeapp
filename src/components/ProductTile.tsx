import React from "react";
import { ReactComponent as ChevronRight } from "../common/chevron-small.svg";
import { Product } from "../common/Product";

interface Props {
    data: Product;
}

export const ProductTile = ({data} : Props) => {
    return (
        <div role="listitem" className="pt-0.5 pb-4">
            <a href={`in/cars/${data.id}`} className="flex flex-auto flex-col hover:text-blue">
                <div className="flex flex-auto flex-col">
                    <em className="text-xs font-medium not-italic text-grey">{data.bodyType.toUpperCase()}</em>
                    <h3 className="flex flex-wrap mb-1 text-base">
                        <span className="mr-1 font-medium">{data.modelName}</span>
                        <span className="text-grey font-light">{data.modelType}</span>
                    </h3>
                </div>
                <div className="my-4">
                    <picture>
                        <img src={data.imageUrl} alt={data.modelName}></img>
                    </picture>
                </div>
            </a>
            <div className="-mx-3 flex flex-wrap justify-center shrink">
                <div className="mx-4 self-start">
                    <a
                        className="font-medium block no-underline tracking-wide uppercase text-sm py-3 leading-snug text-blue stroke-blue hover:text-dark_grey"
                        href={`in/cars/${data.id}`}>
                        Learn
                        <span className="inline whitespace-nowrap">
                            <ChevronRight className="w-3 h-3"/>
                        </span>
                    </a>
                </div>
                <div className="mx-4 self-start">
                    <a
                        className="font-medium block no-underline tracking-wide uppercase text-sm py-3 leading-snug text-blue stroke-blue hover:text-dark_grey"
                        href={`in/cars/${data.id}`}>
                        Order Online
                        <span className="inline whitespace-nowrap">
                            <ChevronRight className="w-3 h-3 ml-2"/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}