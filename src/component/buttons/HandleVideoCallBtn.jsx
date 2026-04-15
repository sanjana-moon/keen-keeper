'use client'
import { LuVideo } from 'react-icons/lu';
import { toast } from 'react-toastify';

const HandleVideoCallBtn = ({ friend }) => {
    const VideoCallBtn = () => {
        toast.success(`Video Call with ${friend.name}`)
        
    }

    return (
        <div 
        className='bg-gray-200 p-4 rounded-lg w-full text-center'
        onClick={VideoCallBtn}>
            <LuVideo className='text-3xl mx-auto font-bold mb-2' />
            <p className='text-lg'>Call</p>
        </div>
    );
};

export default HandleVideoCallBtn;