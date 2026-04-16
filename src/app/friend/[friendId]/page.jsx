import HandleCallBtn from '@/component/buttons/HandleCallBtn';
import HandleTextBtn from '@/component/buttons/HandleTextBtn';
import HandleVideoCallBtn from '@/component/buttons/HandleVideoCallBtn';
import Image from 'next/image';
import { FiArchive } from 'react-icons/fi';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const metadata = {
    title: 'KeenKeeper Details Page',
    description: '...'
}


const FriendDetails = async ({ params }) => {
    const { friendId } = await params

    const res = await fetch("https://keen-keeper-blush.vercel.app//data.json", {
        cache: "no-store",
    });
    const friends = await res.json();

    const friend = friends.find((friend) => String(friend.id) === friendId);

    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 min-h-[80vh] gap-y-6 md:gap-6 py-20'>
                <div className='col-span-1 grid grid-rows-5 gap-4 mx-auto md:mx-0'>
                    <div className='bg-white row-span-3 rounded-lg card shadow-sm p-6 text-center'>
                        <figure>
                            <Image className="rounded-full mx-auto"
                                src={friend.picture}
                                alt={friend.name}
                                width={100}
                                height={100} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">
                                {friend.name}
                            </h2>
                            <p>{friend.days_since_contact}d ago</p>
                            <div className="flex flex-col mx-auto gap-4 items-center justify-center">
                                <div className="flex items-center justify-between gap-3">
                                    {
                                        friend.tags.map((tag, ind) => <div key={ind} className="badge badge-soft bg-green-300 text-green-900 font-medium pb-1 rounded-3xl">{tag}</div>)
                                    }
                                </div>
                                <div
                                    className={`badge badge-soft font-medium pb-1 rounded-3xl 
                                    ${friend.status === 'overdue' ? 'bg-red-500 text-white' :
                                            friend.status === 'almost due' ? 'bg-yellow-500 text-white' :
                                                friend.status === 'on-track' ? 'bg-green-800 text-white' : ''}`}>
                                    {friend.status}
                                </div>
                                <div className='text-gray-600'>
                                    <p className='text-lg italic'>{friend.bio}</p>
                                    <p>Email: {friend.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-span-2 grid grid-rows-3 gap-4'>
                        <div className='bg-white row-span-1 rounded-lg text-xl font-semibold flex items-center justify-center gap-2'><HiOutlineBellSnooze className='text-2xl' /> Snooze 2 weeks</div>
                        <div className='bg-white row-span-1 rounded-lg text-xl font-semibold flex items-center justify-center gap-2'><FiArchive className='text-2xl' /> Archive</div>
                        <div className='bg-white row-span-1 rounded-lg text-xl text-red-500 font-semibold flex items-center justify-center gap-2'><RiDeleteBin6Line className='text-2xl' /> Delete</div>
                    </div>
                </div>

                <div className='col-span-2 grid grid-rows-3 gap-4 mx-auto md:mx-0'>
                    <div className='col-row-1 grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className='flex flex-col items-center justify-center bg-white col-span-1 rounded-lg text-center p-5'>
                            <h2 className="text-[#244D3F] text-2xl font-medium">{friend.days_since_contact}</h2>
                            <p className="text-gray-600 text-lg">Days Since Contact</p>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-white col-span-1 rounded-lg text-center p-5'>
                            <h2 className="text-[#244D3F] text-2xl font-medium">{friend.goal}</h2>
                            <p className="text-gray-600 text-lg">Goal (Days)</p>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-white col-span-1 rounded-lg text-center p-5'>
                            <h2 className="text-[#244D3F] text-2xl font-medium">{friend.next_due_date}</h2>
                            <p className="text-gray-600 text-lg">Next Due</p>
                        </div>
                    </div>
                    <div className='bg-white p-4 col-row-1 rounded-lg flex flex-col justify-center px-20 md:px-10'>
                        <div className=' flex items-center justify-between flex-col-reverse gap-5 md:flex-row'>
                            <h2 className="text-xl font-medium text-[#244D3F]">Relationship Goal</h2>
                            <button className="btn btn-soft">Edit</button>
                        </div>
                        <div className="">
                            <p className='text-gray-600 text-lg'>Connect every <span className='font-bold text-black'>30 days</span></p>
                        </div>
                    </div>
                    <div className='bg-white p-4 col-row-1 rounded-lg flex flex-col justify-center px-10'>
                        <h2 className="text-xl font-medium text-[#244D3F] mb-4">Quick Check-In</h2>
                        <div className='flex gap-5 justify-between flex-col md:flex-row'>
                            <HandleCallBtn friend={friend}/>
                            <HandleTextBtn friend={friend}/>
                            <HandleVideoCallBtn friend={friend}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;