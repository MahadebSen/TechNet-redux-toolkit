'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { signInWithGoogle, loginUser } from '@/redux/features/user/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const { user, isLoading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.path || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(location);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  const handleSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(form, { replace: true });
    }
  }, [form, isLoading, navigate, user.email]);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <Button>Login with email</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        className="flex items-center justify-between"
        onClick={() => handleSignInWithGoogle()}
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
    </div>
  );
}
