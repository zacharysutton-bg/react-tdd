"use client"

import { useState } from "react"

const Form = () => {
    const [form, setForm] = useState({})

    const handleForm = (e) => [
        setForm({...form, [e.target.name]: e.target.value})
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div className="w-2/12 border-2 flex justify-center bg-white text-black py-8 rounded-xl">
            <form className="flex flex-col items-center w-8/12">
                <h1 className="py-4 w-full text-center">Please enter your contact details:</h1>
                <input onChange={(e)=> handleForm(e)} className="mb-6 px-2 w-full border-2" type="text" placeholder="name" name="name" />
                <input onChange={(e)=> handleForm(e)} className="mb-6 px-2 w-full border-2" type="tel" placeholder="tel" name="tel" />
                <input onChange={(e)=> handleForm(e)} className="mb-6 px-2 w-full border-2" type="email" placeholder="email" name="email" />
                <button onClick={(e) => handleSubmit(e)} className="p-2 px-8 border-2 rounded-xl hover:bg-black hover:text-white">Submit</button>
            </form>
        </div>
    )
}

export default Form