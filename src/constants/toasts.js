import { Bounce, toast } from "react-toastify"

export const notify = (message, type = 'success', theme = 'light', position = 'bottom-right') => {
    const toastFunction = type === 'success' ? toast.success : toast.error
    
    toastFunction(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      transition: Bounce,
    })
  }
  
  export const succesRegL = () => notify("Registration succesfuly!", 'success', 'light')
  export const succesRegD = () => notify("Registration succesfuly!", 'success', 'dark')
  export const errRegL = (err) => notify(err, 'error', 'light')
  export const errRegD = (err) => notify(err, 'error', 'dark')




  export const succesLogL = () => notify("Login succesfuly!", 'success', 'light')
  export const succesLogD = () => notify("Login succesfuly!", 'success', 'dark')
  export const errLogL = (err) => notify(err, 'error', 'light')
  export const errLogD = (err) => notify(err, 'error', 'dark')



  
  export const succesPostCrL = () => notify("Post succesfuly created!", 'success', 'light')
  export const succesPostCrD = () => notify("Post succesfuly created!", 'success', 'dark')
  export const errPostCrL = (err) => notify(err, 'error', 'light')
  export const errPostCrD = (err) => notify(err, 'error', 'dark')



  
  export const succesProCrL = () => notify("Your profile succesfuly created!", 'success', 'light')
  export const succesProCrD = () => notify("Your profile succesfuly created!", 'success', 'dark')
  export const errProCrL = (err) => notify(err, 'error', 'light')
  export const errProCrD = (err) => notify(err, 'error', 'dark')