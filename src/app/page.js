import AllFriendsCards from "@/component/homepage/AllFriendsCards";
import Banner from "@/component/homepage/Banner";

export const metadata = {
    title: 'KeenKeeper',
    description: '...'
}

export default function Home() {
  return (
    <div>
      <Banner/>
      <AllFriendsCards/>
    </div>
  );
}
