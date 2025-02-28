"use client";

import { useForm } from "react-hook-form";


const RegisterForm = () => {
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
  } = useForm();

  return (
    <div>
      {/* create register form with react-hook-form validation here */}

      {/* example: */}
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h1>Register</h1>
        <input 
          {...register('userName', { 
            required: "Username is required",
            minLength: { value: 3, message: "Username must be at least 3 characters" },
            maxLength: { value: 20, message: "Username must be less than 20 characters" },
            pattern: { value: /^[A-Za-z0-9]+$/, message: "Username must be alphanumeric" }
          }
        )}
          type="text" 
          placeholder="Username" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.userName &&  (
          <span className='text-red-500'>{`${errors.userName.message}`}</span>
        )}
  

        <input 
          {...register('email', { 
            required: "Email is required",
            pattern: { value: /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/, message: "Invalid email address" }
          }
          )}
          type="email" 
          placeholder="Email" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.email &&  (
          <span className='text-red-500'>{`${errors.email.message}`}</span>
        )}

        <input 
          {...register('password', { 
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
            maxLength: { value: 20, message: "Password must be less than 20 characters" },
            pattern: { value: /^[A-Za-z0-9]+$/, message: "Password must be alphanumeric" }
          }
          )}
          type="password" 
          placeholder="Password" 
          className='p-2 border border-gray-300 rounded-md'
        />
        { errors.password &&  (
          <span className='text-red-500'>{`${errors.password.message}`}</span>
        )}

        <input 
          {...register('confirmPassword', { 
            required: "Confirm Password is required",
            validate: (value) => 
              value ===   getValues("password") || "The passwords do not match" 
            }
          )}
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
  )
}

export default RegisterForm;