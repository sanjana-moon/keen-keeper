import Image from "next/image";

const FriendCard = ({ friend }) => {
    return (
        <div className="card bg-base-100 shadow-sm p-6 h-81">
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
                        {friend.status}</div>
                </div>
            </div>
        </div>)

};

export default FriendCard;