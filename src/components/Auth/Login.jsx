import { useState } from "react"

const Login = () => {
    const [email, setemail] = useState('')
    const [password,setpassword] = useState('')
    const submitHandeller=(e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)

        setemail("")
        setpassword("")
    }

return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20' >
            <form 
            onSubmit={(e)=>{
                submitHandeller(e)
            }} 
            className="flex flex-col items-center justify-center">
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required 
                className="text-Black outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white" type="email" placeholder='Enter your mail' />
                <input 
                value={password}
                onChange={(e)=>
                    setpassword(e.target.value)
                }
               
                required className="text-Black outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full mt-4 py-3 px-5 placeholder:text-white"type='password' placeholder='Enter your password'/>
                <button className="text-white mt-5 border-none outline-none bg-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white">login</button>
            </form>
        </div>
    </div>
  )
}

export default Login