import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { createPost } from '../api/postRequests';
import { useDispatch } from 'react-redux';

const CreatePost = () => {
  const dispatch = useDispatch()
  const url = 'https://medium-database.onrender.com'

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required').min(3, 'Min characters 3').max(50, 'Very long!'),
    excerpt: Yup.string().required('Excerpt is required').min(10, 'Min characters 10').max(100, 'Very long!'),
    image: Yup.string().url('Invalid image address'),
    // content: Yup.string().min(20, 'Min characters 20').max(500, 'Very long!'),
  });


  return (
    <div className='w-full py-5'>
      <Formik
        initialValues={{
          title: '',
          excerpt: '',
          image: '',
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          dispatch(createPost(url, values,  resetForm ))
        }}>
        {({ isSubmitting, errors, touched, setFieldValue, values }) => (
          <Form className='w-[100%] flex flex-col gap-4'>
            <div className=''>
              <label className='text-[16px] font-medium pb-2' htmlFor="title">Title *</label>
              <Field
                id='title'
                className={`${errors.title && touched.title ? "border-red-400 focus:border-red-600" : "focus:border-blue-600"} w-full px-3 py-2 font-medium outline-none rounded-md bg-transparent border-2`}
                type="text"
                name="title" />
              <ErrorMessage className='text-red-500 font-medium' name="title" component="span" />
            </div>

            <div className=''>
              <label className='text-[16px] font-medium pb-2' htmlFor="excerpt">Excerpt *</label>
              <Field
                id='excerpt'
                className={`${errors.excerpt && touched.excerpt ? "border-red-400 focus:border-red-600" : "focus:border-blue-600"} w-full px-3 py-2 font-medium outline-none rounded-md bg-transparent border-2`}
                type="text"
                name="excerpt" />
              <ErrorMessage className='text-red-500 font-medium' name="excerpt" component="span" />
            </div>

            <div className=''>
              <label className='text-[16px] font-medium pb-2' htmlFor="image">Image</label>
              <Field
                id='image'
                className={`${errors.image && touched.image ? "border-red-400 focus:border-red-600" : "focus:border-blue-600"} w-full px-3 py-2 font-medium outline-none rounded-md bg-transparent border-2`}
                type="text"
                name="image" />
              <ErrorMessage className='text-red-500 font-medium' name="image" component="span" />
            </div>

            <div className='max-w-full min-h-[200px] z-0'>
              <label className='text-[16px] font-medium pb-2' htmlFor="content">Content</label>
              <FroalaEditorComponent
                id='content'
                tag='textarea'
                model={values.content}
                onModelChange={(model) => setFieldValue('content', model)}
                className="w-full bg-transparent border border-red-900 rounded-md p-4"
                required
              />
              <ErrorMessage className='text-red-500 font-medium' name="content" component="span" />
            </div>

            <div className='flex justify-end '>
              <button className='text-[16px] rounded-md font-semibold border px-6 hover:dark:bg-gray-700 duration-300 active:scale-95 py-2' type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePost;
