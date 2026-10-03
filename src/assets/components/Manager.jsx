import React from 'react'
import { useRef, useState, useeffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { v4 as uuida4 } from 'uuid'



const Manager = () => {
    const ref = useref()
    const passwordref = userRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useeffect(() => {
        let password = localStorage.getItem("passwords");
        if (password) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        navigation.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "icons/eyecross.png"
        }
    }













    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <div className="bg-slate-50 mycontainer">
                <h1 className="text-4xl text font-bold text-center">
                    <span className='text-green-700' >&lt;</span>
                    Pass
                    <span className='text-green-700' >OP &gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>


                <div className='text-black flex flex-col p-4 gap-8 items-center'>
                    <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" />

                    <div className="flex w-full justify-between gap-8">
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" />
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" />

                    </div>

                    <button className='h-10 flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-4 w-fit'>
                        <img src="./public/add.svg" alt="" />
                        Save Password

                    </button>

                </div>


            </div>
        </>
    )
}

export default Manager
