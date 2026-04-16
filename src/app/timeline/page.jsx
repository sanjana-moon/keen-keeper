'use client'
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "@/component/ui/TimelineCard";
import Link from "next/link";

const TimelinePage = () => {
    const { communicationList, filteredSection, handleFilterBtn } = useContext(TimelineContext)

    const filterBtn = <>
        <li><a onClick={() => handleFilterBtn("call")}>Call</a></li>
        <li><a onClick={() => handleFilterBtn("text")}>Text</a></li>
        <li><a onClick={() => handleFilterBtn("video")}>Video Call</a></li>
        <li><a onClick={() => handleFilterBtn("all")}>All</a></li>
    </>

    const dataToShow = filteredSection !== null ? filteredSection : communicationList;

    if (communicationList.length === 0) {
        return <div className="bg-gray-100 ">
            <div className="container mx-auto min-h-[80vh] py-10 flex items-center justify-center flex-col">
                <h2 className="text-3xl md:text-5xl font-bold text-[#244D3F] text-center">
                    No Data in This Section</h2>
                <Link href="/">
                    <button className="mt-6 px-6 py-2 rounded-lg text-white bg-[#244D3F] hover:opacity-90 transition">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div >
    }

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto min-h-[80vh] py-10">
                <h2 className="text-5xl font-bold mb-4">TimeLine</h2>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {filterBtn}
                    </ul>
                </div>
                {
                    dataToShow.length === 0 ? (
                        <div className="flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-[#244D3F] text-center">
                                No Data Found in This Section</h2>
                        </div>) : (
                        dataToShow.map((friend, ind) =>
                            <TimelineCard key={ind} friend={friend} />))
                }
            </div>
        </div>
    );
};

export default TimelinePage;