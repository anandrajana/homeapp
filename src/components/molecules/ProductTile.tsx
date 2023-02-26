import { Product } from "../../models/Product";
import { Link } from "../atoms/Link";

interface Props {
  data: Product;
}

export const ProductTile = ({ data }: Props) => {
  return (
    <div role="listitem" className="pt-0.5 pb-4" aria-describedby={`Car model ${data.modelName}`}>
      <a
        href={`/cars/${data.id}`}
        className="group flex flex-auto flex-col text-grey hover:text-blue"
      >
        <div className="flex flex-auto flex-col">
          <em className="text-xs font-medium not-italic">
            {data.bodyType.toUpperCase()}
          </em>
          <h3 className="flex flex-wrap mb-1 text-base">
            <span className="mr-1 font-medium text-dark_grey group-hover:text-blue">
              {data.modelName}
            </span>
            <span className="font-light">{data.modelType}</span>
          </h3>
        </div>
        <div className="flex shrink basis-auto grow-0 my-4 overflow-hidden">
          <picture className="h-auto w-296 sm:w-full">
            <img
              src={data.imageUrl}
              alt={data.modelName}
              className="object-cover object-center scale-101 group-hover:scale-108 transition-transform"
            />
          </picture>
        </div>
      </a>
      <div className="-mx-3 flex flex-wrap justify-center shrink">
        <Link href={`/learn/${data.id}`} label="Learn" />
        <Link href={`/shop/${data.id}`} label="Shop" />
      </div>
    </div>
  );
};
