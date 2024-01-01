import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';
import Cart from '../components/Cart';
import logo from '../assets/images/technet-logo.png';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { setLoading, setUser } from '@/redux/features/user/userSlice';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(setLoading(true));

    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        console.log(error);
      });
  };

  return (
    <nav className="h-16 w-full fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-2 md:mx-auto md:px-6">
          <div>
            <Link to="/">
              <img className="h-8" src={logo} alt="log" />
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">Products</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              {user.email ? (
                <li className="ml-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link to="/profile">
                        <DropdownMenuItem className="cursor-pointer">
                          Profile
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className="cursor-pointer">
                        Billing
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Team
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={handleLogOut}
                        className="cursor-pointer"
                      >
                        Log out
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer">
                        Subscription
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li>
                  <Button onClick={() => navigate('/login')}>Log in</Button>
                </li>
              )}
            </ul>
          </div>

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">
                  <HiMenuAlt3 size="25" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>Products</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/products">
                  <DropdownMenuItem className="cursor-pointer">
                    Products
                  </DropdownMenuItem>
                </Link>
                <Link to="/checkout">
                  <DropdownMenuItem className="cursor-pointer mb-3">
                    Checkout
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuItem
                  onClick={handleLogOut}
                  className="cursor-pointer"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
