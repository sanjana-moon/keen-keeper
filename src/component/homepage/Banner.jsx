import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-base-200 pt-20 pb-10'>
            <div className="container mx-auto">
                <div className="mx-auto text-center flex items-center justify-center">
                    <div className="max-w">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-gray-600">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                            relationships that matter most.
                        </p>
                        <button className="btn btn-primary bg-[#244D3F] mb-10"><FaPlus />Add a Friend</button>
                    </div>
                </div>
                <div className='flex items-center gap-6 justify-center'>
                    <div className='bg-white rounded-2xl text-center p-6 px-15'>
                        <h2 className="text-[#244D3F] text-2xl font-medium">10</h2>
                        <p className="text-gray-600 text-lg">Total Friends</p>
                    </div>
                    <div className='bg-white rounded-2xl text-center p-6 px-15'>
                        <h2 className="text-[#244D3F] text-2xl font-medium">10</h2>
                        <p className="text-gray-600 text-lg">Total Friends</p>
                    </div>
                    <div className='bg-white rounded-2xl text-center p-6 px-15'>
                        <h2 className="text-[#244D3F] text-2xl font-medium">10</h2>
                        <p className="text-gray-600 text-lg">Total Friends</p>
                    </div>
                    <div className='bg-white rounded-2xl text-center p-6 px-15'>
                        <h2 className="text-[#244D3F] text-2xl font-medium">10</h2>
                        <p className="text-gray-600 text-lg">Total Friends</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;