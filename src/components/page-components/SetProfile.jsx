import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createProfile } from './../../api/postRequests'
import { setUpdPro } from '../../store/action'


const SetProfile = () => {
    const { updPro } = useSelector(state => state.pageActions)
    const dispatch = useDispatch()
    const url = 'https://medium-database.onrender.com'
    const validationSchema = Yup.object({
        fullName: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters').test('first-letter-uppercase', 'First letter must be uppercase', function (value) {
            return /^[A-Z]/.test(value)
        }),
        job: Yup.string().required('Job is required').min(3, 'Job must be at least 3 characters').test('first-letter-uppercase', 'First letter must be uppercase', function (value) {
            return /^[A-Z]/.test(value)
        }),
        avatar: Yup.string().url('Invalid URL specified'),
        age: Yup.number().required('Age is required').min(18, 'Age must be at least 18')
    })


    
    return (
        <div className='w-full flex justify-center items-center bg-transparent'>
            <div className='min-w-full px-2 py-3 forma md:w-[60%] sm:w-[70%] w-[90%] ss:w-[80%] rounded-xl lg:w-[50%] h-max'>
                <Formik
                    initialValues={{ fullName: '', job: '', avatar: '', age: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        const regData = new Date().toLocaleDateString()
                        const fullDate = { ...values, regData }
                        dispatch(createProfile(url, fullDate, resetForm))
                        dispatch(setUpdPro())
                        console.log(fullDate)
                    }}>

                    {({ isSubmitting, errors, touched }) => (
                        <Form className='flex flex-col gap-2'>
                            <div className='h-[75px]'>
                                <label className='text-[14px] font-semibold' htmlFor="fullName">Name</label>
                                <Field
                                    placeholder="Enter your Full name"
                                    id='fullName'
                                    name='fullName'
                                    type='fullName'
                                    className={`w-full p-2 border outline-none ${errors.fullName && touched.fullName ? 'border-red-500 focus:border-red-600 ' : '  border-gray-300'} bg-transparent rounded-md`} />
                                <ErrorMessage name="fullName" component="span" className="text-red-500 text-[10px]" />
                            </div>

                            <div className='h-[75px]'>
                                <label className='text-[14px] font-semibold' htmlFor="job">Job</label>
                                <Field
                                    placeholder="Enter your job"
                                    id='job'
                                    name='job'
                                    type='text'
                                    className={`w-full p-2 border outline-none ${errors.job && touched.job ? 'border-red-500 focus:border-red-600  ' : ' border-gray-300'} bg-transparent rounded-md`} />
                                <ErrorMessage name="job" component="span" className="text-red-500 text-[10px]" />
                            </div>

                            <div className='h-[75px]'>
                                <label className='text-[14px] font-semibold' htmlFor="avatar">Image</label>
                                <div className="">
                                    <Field
                                        placeholder="Enter image URL"
                                        id='avatar'
                                        name='avatar'
                                        type='text'
                                        className={`w-full p-2 border outline-none ${errors.avatar && touched.avatar ? 'border-red-500 focus:border-red-600 ' : '  border-gray-300'} bg-transparent rounded-md`} />
                                </div>
                                <ErrorMessage name="avatar" component="span" className="text-red-500 text-[10px]" />
                            </div>

                            <div className='h-[75px]'>
                                <label className='text-[14px] font-semibold' htmlFor="age">Age</label>
                                <div className="">
                                    <Field
                                        placeholder="Enter your age"
                                        id='age'
                                        name='age'
                                        type='number'
                                        className={`w-full p-2 border outline-none ${errors.age && touched.age ? 'border-red-500 focus:border-red-600 ' : ' border-gray-300'} bg-transparent rounded-md`} />
                                </div>
                                <ErrorMessage name="age" component="span" className="text-red-500 text-[10px]" />
                            </div>

                            {errors.server && <div className="text-red-500 text-[10px]">{errors.server}</div>}

                            <div className='flex justify-end '>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='px-6 bg-blue-600 text-white py-2 rounded-md'>
                                    Save
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SetProfile
