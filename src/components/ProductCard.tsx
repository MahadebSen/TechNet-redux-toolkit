import { IProduct } from '@/types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { addToCart } from '@/redux/features/cart/cartSlice';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();

  console.log(product);

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
    toast({
      description: 'Product Added',
    });
  };
  return (
    <div>
      <div className="rounded-2xl flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-3">
        <Link to={`/product-details/${product._id}`} className="w-full">
          <img className="w-full" src={product?.image} alt="product" />
          <h1 className="text-xl font-semibold">{product?.name}</h1>
        </Link>

        <p>
          <span className="text-md font-semibold">Rating:</span>{' '}
          <span>{product?.rating}</span>
        </p>

        <p className="text-sm">
          <span className="font-semibold">Availability:</span>{' '}
          {product?.status ? 'In stock' : 'Out of stock'}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Price: </span> {product?.price}
        </p>

        <Button
          disabled={!product.status}
          variant="default"
          onClick={() => handleAddProduct(product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
