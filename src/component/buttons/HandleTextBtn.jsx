'use client'
import { MdTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';

const HandleTextBtn = ({ friend }) => {
    const TextBtn = () => {
        toast.success(`Text with ${friend.name}`)
    }

    return (
        <div 
        className='bg-gray-200 p-4 rounded-lg w-full text-center'
        onClick={TextBtn}>
            <MdTextsms className='text-3xl mx-auto font-bold mb-2' />
            <p className='text-lg'>Text</p>
        </div>
    );
};

export default HandleTextBtn;