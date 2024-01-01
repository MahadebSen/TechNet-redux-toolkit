import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { useGetSingleProductQuery } from '@/redux/features/products/productApi';
// import { IProduct } from '@/types/globalTypes';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isError } = useGetSingleProductQuery(id as string);
  console.log('details:', product, isError, id);

  return (
    <>
      <div className="flex flex-col md:flex-row xl:max-w-7xl xl:mx-auto m-5 items-center border-b border-gray-300">
        <div className="md:w-[50%]">
          <img className="w-full" src={product?.image} alt="" />
        </div>

        <div className="md:w-[50%] space-y-3 my-5">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <p>
            <span className="text-xl">Features: </span>
          </p>
          <ul className="space-y-1 text-lg list-inside list-disc">
            {product?.features?.map((feature: string) => (
              <li className="text-[15px] xl:text-base" key={feature}>
                {feature}
              </li>
            ))}
          </ul>
          <Button disabled={!product?.status}>Add to cart</Button>
        </div>
      </div>
      <ProductReview id={id} />
    </>
  );
}
