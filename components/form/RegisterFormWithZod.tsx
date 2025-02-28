"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema } from "@/lib/types";


type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

const RegisterFormWithZod = () => {
  const { 
    register, 
    handleSubmit, 
    reset, 
    getValues,
    formState: { 
      errors, 
      isLoading, 
      isSubmitting, 
      isSubmitSuccessful, 
      isSubmitted, 
      isDirty, 
      isValidating, 
      isValid, 
      submitCount, 
      touchedFields, 
      dirtyFields 
    } 
  } = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema)
  });

  const onSubmit = async (data: RegisterFormSchemaType) => {
    const response =  await fetch("/api/signup", {  
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      } 
    });   

    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      // handle error
      alert("Error: Submitting form failed " + JSON.stringify(responseData));
      return; 
    }

    // reset form after submit
    if (isSubmitSuccessful){
      // add data to useContext or global state
      // form reset();
      // do something after successful submit
      // e.g. go to next step in multi-step form
      console.log("Form submitted successfully");
    }
  }

  return (
    <div>
      {/* create register form with react-hook-form validation here */}

      {/* example: */}
      <div className="flex flex-col justify-center ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
        <h1>Register</h1>
        <input 
          {...register('userName')}
          type="text" 
          placeholder="Username" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.userName &&  (
          <span className='text-red-500'>{`${errors.userName.message}`}</span>
        )}
  

        <input 
          {...register('email')}
          type="email" 
          placeholder="Email" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.email &&  (
          <span className='text-red-500'>{`${errors.email.message}`}</span>
        )}

        <input 
          {...register('password')}
          type="password" 
          placeholder="Password" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.password &&  (
          <span className='text-red-500'>{`${errors.password.message}`}</span>
        )}

        <input 
          {...register('confirmPassword')}
          type="password" 
          placeholder="Confirm Password" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.confirmPassword &&  (
          <span className='text-red-500'>{`${errors.confirmPassword.message}`}</span>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  )
}

export default RegisterFormWithZod;