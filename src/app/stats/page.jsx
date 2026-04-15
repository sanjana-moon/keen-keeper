'use client'
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../context/TimelineContext";

const Stats = () => {
    const { communicationList, filteredSection } = useContext(TimelineContext)

    const callCount = communicationList.filter(item => item.communicationType === "call").length;
    const textCount = communicationList.filter(item => item.communicationType === "text").length;
    const videoCount = communicationList.filter(item => item.communicationType === "video").length;

    if (callCount === 0 && textCount === 0 && videoCount ===0) {
        return <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
            <h2 className="text-5xl text-[#244D3F] font-bold">No Communication Done Yet</h2>
        </div>
    }

    const data = [
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Text", value: textCount, fill: "#7E35E1" },
        { name: "Video Call", value: videoCount, fill: "#37A163" },
    ];

    return (
        <div className="bg-base-100 container mx-auto py-15 text-center">
            <h2 className="text-3xl text-[#244D3F] font-bold mb-10">Chart View of Your Communication</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Stats;