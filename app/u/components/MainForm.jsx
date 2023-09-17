/* eslint-disable react/no-unescaped-entities */
'use client';

import Logo from '../login/components/Logo';
import Button from '@/app/components/Button';
import IconsLogin from '../login/components/IconsLogin';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsApple } from 'react-icons/bs';
import Input from '../login/components/Input';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { signIn, useSession } from 'next-auth/react';

function MainForm({ variant }) {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/users');
    }
  }, [session?.status, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    setIsLoading(true);
    if (variant === 'sign up') {
      axios
        .post('/api/register', data)
        .then(() => signIn('credentials', data))
        .catch(() => toast.error('Please fill the form carefully'))
        .finally(() => {
          setIsLoading(false);
          if (data) toast.success('successfully registered');
        });
    }
    if (variant === 'login') {
      signIn('credentials', {
        ...data,
        redirect: false,
      })
        .then(callback => {
          if (callback?.error) toast.error('invalid Credentials');
          if (callback?.ok && !callback?.error)
            toast.success('Sucessfully logged in');
          router.push('/users');
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = action => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then(callback => {
        console.log(callback);
        if (callback?.error) toast.error('invalid Credentials');
        if (callback?.ok && !callback?.error)
          toast.success('Sucessfully logged in');
      })
      .finally(() => setIsLoading(false));
  };

  const changeVariant = () => {
    if (variant === 'login') {
      router.push('/u/signup');
    } else {
      router.push('/u/login');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-between h-full max-w-[400px] p-4 mx-auto "
    >
      <div className="w-8">
        <Logo />
      </div>

      <div className="w-full text-center ">
        <h1
          className={`${
            variant === 'login' && 'mb-6'
          } text-3xl font-semibold`}
        >
          {variant === 'login'
            ? 'Welcome back'
            : 'Create your account'}
        </h1>
        {variant === 'sign up' && (
          <p className="text-[13px] mb-4 p-9">
            Note that phone verification may be required for signup.
            Your number will only be used to verify your identity for
            security purposes.
          </p>
        )}

        <div className="w-full mb-4">
          <Input
            register={register}
            id="email"
            errors={errors}
            label="Email Address"
            type="email"
          />
        </div>

        <div className="w-full mb-4">
          <Input
            register={register}
            id="password"
            errors={errors}
            label="Password"
            type="password"
          />
        </div>

        <div className="w-full mb-6">
          <Button
            disabled={isLoading}
            type="submit"
            fullWidth
            secondary
          >
            Continue
          </Button>

          {variant === 'login' ? (
            <p className="mt-4">
              Don't have an account?{' '}
              <span
                className="transition hover:cursor-pointer hover:text-blue-400"
                onClick={changeVariant}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p className="mt-4">
              Already have an account?{' '}
              <span
                className="transition hover:cursor-pointer hover:text-blue-400"
                onClick={changeVariant}
              >
                Log in
              </span>
            </p>
          )}

          {/* <p className="mt-4">
              {variant === 'login'
                ? "Don't have an account? <span>Sign up</span>"
                : 'Already have an account?' <span>Log in</span>}
            </p> */}
        </div>

        <div className="flex mb-[24px]  gap-2 w-full justify-center before:mt-1 after:mt-1 before:border-b before:h-2 before:border-slate-400 before:w-[160px] before:block after:block after:border-b after:h-2 after:border-slate-400 after:w-[160px]   ">
          <span>OR</span>
        </div>

        <IconsLogin
          onClick={() => socialAction('google')}
          Icon={FcGoogle}
        >
          Continue with Google
        </IconsLogin>
        <IconsLogin
          onClick={() => socialAction('github')}
          Icon={BsGithub}
        >
          Continue with Git-Hub
        </IconsLogin>
        <IconsLogin Icon={BsApple}>Continue with Apple</IconsLogin>
      </div>

      <footer className="text-slate-400">
        Terms of use | Privacy policy
      </footer>
    </form>
  );
}

export default MainForm;
