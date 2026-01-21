"use client";

import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { mutationFunction } from '@/src/utils/extractedFunctions';
import { UseMutationType } from '@/src/utils/zodSchemas/Schema';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { LoginDataSchema, LoginDataType } from '@/src/utils/zodSchemas/Schema';

type LoginForm = {
  email: string;
  password: string;
}

const Login = () => {
    const { t } = useTranslation();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
      defaultValues: { email: '', password: '' }
    });

    const loginMutation = useMutation({
        mutationFn: async (formData: LoginForm) => {
          const result: UseMutationType = {
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, 
              options: {
                method: "POST",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({
                  email: formData.email,
                  password: formData.password
                })
              }
            }
          

          return await mutationFunction(result);
        },
        onSuccess: (data: LoginDataType) => {
          const dataCheck = LoginDataSchema.safeParse(data);

          if (!dataCheck.success) {
            throw {
            error: "Invalid data",
              details: dataCheck.error.issues.map(i => ({
                  path: i.path.join('.'),
                  message: i.message,
                  code: i.code,
              })),
            }
          }

          Cookies.set("id", dataCheck.data.data.user.id.toString(), { expires: 7 });

          Cookies.set("accessToken", dataCheck.data.data.accessToken, { expires: 7 });

          Cookies.set("refreshToken", dataCheck.data.data.refreshToken, { expires: 7 });
        },
        onError: (error) => {
          console.log(error);
        }
    })

    function onSubmit(data: LoginForm){
        loginMutation.mutate(data);
    }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-black">
        <h1 className='text-2xl font-bold mb-4'>{t('login')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' } })}
            className="w-full p-2 border rounded shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">{t('password')}</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required', minLength: { value: 1, message: 'Password is required' } })}
            className="w-full p-2 border rounded shadow-sm"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
            <button disabled={isSubmitting || loginMutation.status === 'pending'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>{t('loginSubmit')}</button>
        </form>
    </div>
  )
}

export default Login