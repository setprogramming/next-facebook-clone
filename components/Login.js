import Image from "next/image"
import { signIn } from "next-auth/client"

function Login() {
  return (
    <div className="grid place-items-center mt-4 p-5">
        <Image 
            src="https://links.papareact.com/5me"
            width={100}
            height={100}
            objectFit="contain"
        />
        <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-4">
            Login with Facebook
        </h1>
    </div>
  )
}

export default Login