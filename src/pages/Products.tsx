import ProductCard from '@/components/ProductCard';
import ProductLoading from '@/components/productLoading';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
// import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import {
  setPriceRange,
  toggleState,
} from '@/redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';

export default function Products() {
  const { data, isLoading } = useGetProductsQuery(undefined);

  // const { toast } = useToast();
  const { status, priceRange } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
  };

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { status: boolean; price: number }) =>
        item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data?.data.filter(
      (item: { price: number }) => item.price < priceRange
    );
  } else {
    productsData = data.data;
  }

  return (
    <div className="grid md:grid-cols-12 gap-8 max-w-7xl m-4 md:mx-auto">
      <div className="md:col-span-3 rounded-lg md:rounded-none md:mr-10 md:space-y-5 border border-gray-200/80 p-5 self-start md:w-full md:sticky md:top-16 md:h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            onClick={() => dispatch(toggleState())}
            className="flex items-center space-x-2 mt-3"
          >
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>

      {isLoading ? (
        <ProductLoading />
      ) : (
        <div className="md:col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {productsData?.map((product: IProduct) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
