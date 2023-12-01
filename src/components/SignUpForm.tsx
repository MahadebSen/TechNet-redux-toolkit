'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
<<<<<<< HEAD
import { auth } from '@/lib/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
=======
import { useAppDispatch } from '@/redux/hook';
import { createUser } from '@/redux/features/user/userSlice';
>>>>>>> 54cc45621411b74c23e5668ef119ab39b7fa6725

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || '/';

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate(form, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();

  const onSubmit = (data: SignupFormInputs) => {
<<<<<<< HEAD
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setError('confirmPassword', {
        type: 'custom',
        message: 'Confirm password is wrong',
      });
    }
=======
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
>>>>>>> 54cc45621411b74c23e5668ef119ab39b7fa6725
  };

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
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
            <Input
              id="confirmPassword"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          {error && <p>{error.message}</p>}
          <Button disabled={loading}>Create Account</Button>
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
      >
        <p>Google</p>
        <FcGoogle />
      </Button>
    </div>
  );
}
