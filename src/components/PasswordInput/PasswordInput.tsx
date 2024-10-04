import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleIsShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }
    return (
        <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
            <input
                type={isShowPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder || "Password"}
                className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none' />
            {isShowPassword ?
                (<FaRegEye size={22} className='text-primary cursor-pointer' onClick={() => toggleIsShowPassword()} />) :
                (<FaRegEyeSlash size={22} className='text-slaye-400 cursor-pointer' onClick={() => toggleIsShowPassword()} />)
            }
        </div>
    )
}

export default PasswordInput