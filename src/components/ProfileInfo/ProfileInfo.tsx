import React from 'react'

const getInitials = (name: string): string => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        if (words[i]) {
            initials += words[i][0];
        }
    }

    return initials.toUpperCase();
};

interface ProfileInfoProps {
    onLogout: () => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ onLogout }) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
                {getInitials("Satish Maharaj")}
            </div>
            <div className=''>
                <p className='text-sm font-medium'>Satish Maharaj</p>
                <button className='text-sm text-slate-700 underline' onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfileInfo