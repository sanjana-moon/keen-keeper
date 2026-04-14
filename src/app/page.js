import AllFriendsCards from "@/component/homepage/AllFriendsCards";
import Banner from "@/component/homepage/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AllFriendsCards/>
    </div>
  );
}
