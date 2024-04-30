import { Link } from "react-router-dom"

const LoginMessage = () => {
  return (
    <div className='mt-5 xl:w-3/4 text-center'>
    <Link to='/signup' className='text-sm text-gray-500 hover:text-blue-500'>
      Don&apos;t have an account? Sign Up
    </Link>
  </div>
  )
}

export default LoginMessage