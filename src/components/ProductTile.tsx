import React from "react";
import { ReactComponent as ChevronRight } from "../common/chevron-small.svg";
import { Product } from "../common/Product";

interface Props {
    data: Product;
}

export const ProductTile = ({data} : Props) => {
    return (
        <div role="listitem" className="pt-0.5 pb-4">
            <a href={`/cars/${data.id}`} className="group flex flex-auto flex-col text-grey hover:text-blue">
                <div className="flex flex-auto flex-col">
                    <em className="text-xs font-medium not-italic">{data.bodyType.toUpperCase()}</em>
                    <h3 className="flex flex-wrap mb-1 text-base">
                        <span className="mr-1 font-medium text-dark_grey group-hover:text-blue">{data.modelName}</span>
                        <span className="font-light">{data.modelType}</span>
                    </h3>
                </div>
                <div className="flex shrink basis-auto grow-0 my-4 overflow-hidden">
                    <picture>
                        <img
                            src={data.imageUrl}
                            alt={data.modelName}
                            className="object-cover object-center scale-101 hover:scale-108"/>
                    </picture>
                </div>
            </a>
            <div className="-mx-3 flex flex-wrap justify-center shrink">
                <div className="mx-4 self-start">
                    <a
                        className="flex font-medium no-underline tracking-wide uppercase text-sm py-3 leading-snug text-blue hover:text-dark_grey"
                        href={`/cars/${data.id}`}>
                        Learn
                        <span className="inline whitespace-nowrap leading-snug">
                            <ChevronRight className="w-3 h-3 ml-2 relative top-0.75" fill="red"/>
                        </span>
                    </a>
                </div>
                <div className="mx-4 self-start">
                    <a
                        className="flex font-medium no-underline tracking-wide uppercase text-sm py-3 leading-snug text-blue hover:text-dark_grey"
                        href={`/cars/${data.id}`}>
                        Shop
                        <span className="inline whitespace-nowrap leading-snug relative top-px">
                            <ChevronRight className="w-3 h-3 ml-2 relative top-0.75"/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}