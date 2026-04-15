'use client'
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineCard from "@/component/ui/TimelineCard";

const TimelinePage = () => {
    const { communicationList, filteredSection, handleFilterBtn } = useContext(TimelineContext)

    if (communicationList.length === 0) {
        return <div className="bg-gray-100 ">
            <div className="container mx-auto min-h-[80vh] py-10 flex items-center justify-center flex-col">
                <h2 className="text-5xl font-bold text-[#244D3F] text-center">No Communication Done Yet</h2>
            </div>
        </div>
    }

    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto min-h-[80vh] py-10">
                <h2 className="text-5xl font-bold mb-4">TimeLine</h2>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleFilterBtn("call")}>Call</a></li>
                        <li><a onClick={() => handleFilterBtn("text")}>Text</a></li>
                        <li><a onClick={() => handleFilterBtn("video")}>Video Call</a></li>
                    </ul>
                </div>
                {
                    (filteredSection.length > 0 ? filteredSection : communicationList).map((friend, ind) =>
                        <TimelineCard key={ind} friend={friend} />)
                }
            </div>
        </div>
    );
};

export default TimelinePage;