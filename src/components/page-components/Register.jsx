import { AiOutlineEyeInvisible } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { authorization } from '../../store/action'
import * as Yup from 'yup'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { registration } from './../../api/postRequests'

const Register = () => {
    const dispatch = useDispatch()
    const url = 'https://medium-database.onrender.com'
    const navigate = useNavigate()
    const [pasType, setPasType] = useState(true)  //!* true === password false === text
    const [confPasType, setConfPasType] = useState(true)  //!* true === password false === text
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        username: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    })

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='min-w-[250px] border  px-4 py-6 forma md:w-[60%] sm:w-[70%] w-[90%] ss:w-[80%] rounded-xl lg:w-[50%] h-max'>
                <div className="text-[26px] text-center font-normal">Sign up</div>
                <Formik
                    initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async (valuesReg, { resetForm }) => {
                        const { confirmPassword, ...dataToSend } = valuesReg 
                        await dispatch(registration(url, dataToSend, { resetForm }))
                    }}>

                    {({ isSubmitting, errors, touched }) => (
                        <Form className='flex flex-col gap-4'>
                            <div>
                                <label className='text-lg font-semibold' htmlFor="email">Email</label>
                                <Field
                                    placeholder="Enter your email"
                                    id='email'
                                    name='email'
                                    type='email'
                                    className={`w-full p-2 border outline-none ${errors.email && touched.email ? 'border-red-500 focus:border-red-600 ' : '  border-gray-300'} bg-transparent rounded-md`} />
                                <ErrorMessage name="email" component="span" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <label className='text-lg font-semibold' htmlFor="username">Username</label>
                                <Field
                                    placeholder="Enter your username"
                                    id='username'
                                    name='username'
                                    type='text'
                                    className={`w-full p-2 border outline-none ${errors.username && touched.username ? 'border-red-500 focus:border-red-600  ' : ' border-gray-300'} bg-transparent rounded-md`} />
                                <ErrorMessage name="username" component="span" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <label className='text-lg font-semibold' htmlFor="password">Password</label>
                                <div className="relative">
                                    <Field
                                        placeholder="Enter your password"
                                        id='password'
                                        name='password'
                                        type={pasType ? "password" : "text"}
                                        className={`w-full p-2 border outline-none ${errors.password && touched.password ? 'border-red-500 focus:border-red-600 ' : '  border-gray-300'} bg-transparent rounded-md`} />
                                    <div
                                        onClick={() => setPasType(!pasType)}
                                        className="cursor-pointer absolute top-0 right-2 bottom-0 text-[22px] flex justify-center items-center">
                                        {pasType ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>
                                <ErrorMessage name="password" component="span" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <label className='text-lg font-semibold' htmlFor="confirmPassword">Confirm Password</label>
                                <div className="relative">
                                    <Field
                                        placeholder="Confirm your password"
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        type={confPasType ? "password" : "text"}
                                        className={`w-full p-2 border outline-none ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500 focus:border-red-600 ' : ' border-gray-300'} bg-transparent rounded-md`} />
                                    <div
                                        onClick={() => setConfPasType(!confPasType)}
                                        className="cursor-pointer absolute top-0 right-2 bottom-0 text-[22px] flex justify-center items-center">
                                        {confPasType ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                                    </div>
                                </div>
                                <ErrorMessage name="confirmPassword" component="span" className="text-red-500 text-sm" />
                            </div>

                            <div
                                onClick={() => {
                                    dispatch(authorization('login'))
                                    navigate('/authentication/login')
                                }}
                                className="cursor-pointer w-max border-b dark:border-gray-400">
                                Are you already registered?
                            </div>
                            {errors.server && <div className="text-red-500 text-sm">{errors.server}</div>}

                            <div className='flex justify-end '>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='px-6 bg-blue-600 text-white py-2 rounded-md'>
                                    Sign Up
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register