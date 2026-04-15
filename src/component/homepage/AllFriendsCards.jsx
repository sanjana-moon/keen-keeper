import FriendCard from "../ui/FriendCard";

const AllFriendsCards = async () => {
    const res = await fetch("http://localhost:3000/data.json", {
        cache: "no-store",
    });
    const friends = await res.json()

    return (
        <div className='bg-base-200 pb-20'>
            <div className="container mx-auto border-t border-gray-300 pt-10 ">
                <h2 className="text-xl mb-4 font-bold">Your Friends</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-center space-y-2">
                    {
                        friends.map(friend =>
                            <FriendCard key={friend.id}
                                friend={friend} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFriendsCards;