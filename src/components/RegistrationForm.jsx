import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

// Define the validation schema
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
})

const RegistrationForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const handleFormSubmit = async (data) => {
        setLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form Data:', data)
            setSuccessMessage('Registration successful!')
            reset()
        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}
            <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit(handleFormSubmit)}>
                <TextInput
                    name='name'
                    label='Name'
                    register={register}
                    errors={errors.name}
                />
                <TextInput
                    name='email'
                    label='Email'
                    register={register}
                    errors={errors.email}
                />
                <PasswordInput
                    name='password'
                    label='Password'
                    register={register}
                    errors={errors.password}
                    show={showPassword}
                    toggle={() => setShowPassword(prev => !prev )}
                />
                <PasswordInput
                    name='confirmPassword'
                    label='Confirm Password'
                    register={register}
                    errors={errors.confirmPassword}
                    show={showConfirmPassword}
                    toggle={() => setShowConfirmPassword(prev => !prev )}
                />
                <button className='w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300' type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </>
    )
}

export default RegistrationForm
