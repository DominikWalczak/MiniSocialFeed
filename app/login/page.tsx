"use client";

import { useStringKeys } from '@/src/i18n/i18nKeys';
import { validationMiddleware } from '@/src/middlewares/validation.middleware';
import { mutationFunction } from '@/src/utils/reactUseMutationFunc';
import { UseMutationSchema } from '@/src/utils/zodSchemas/UseMutationSchema';
import { useMutation } from '@tanstack/react-query';
import React, {useState} from 'react'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const stringKeys = useStringKeys();

    function handleSubmit(e: React.FormEvent){
        console.log(form.email, form.password);
        e.preventDefault();

        loginMutation.mutate();
        alert(form.email + form.password);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const loginMutation = useMutation({
        mutationFn: async () => {
          const result = validationMiddleware(UseMutationSchema, {
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, 
              options: {
                method: "POST",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify({
                  email: form.email,
                  password: form.password
                })
              }
            }
          )

          return await mutationFunction(result);
        },
        
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        }
    })

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-black">
        <h1 className='text-2xl font-bold mb-4'>{stringKeys.login}</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">{stringKeys.password}</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 border rounded shadow-sm"
            required
          />
        </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>{stringKeys.loginSubmit}</button>
        </form>
    </div>
  )
}

export default Login