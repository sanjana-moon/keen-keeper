'use client'
import { LuPhoneCall } from 'react-icons/lu';
import { toast } from 'react-toastify';

const HandleCallBtn = ({ friend }) => {
    const CallBtn = () => {
        toast.success(`Call with ${friend.name}`)
    }

    return (
        <div 
        className='bg-gray-200 p-4 rounded-lg w-full text-center'
        onClick={CallBtn}>
            <LuPhoneCall className='text-3xl mx-auto font-bold mb-2' />
            <p className='text-lg'>Call</p>
        </div>
    );
};

export default HandleCallBtn;