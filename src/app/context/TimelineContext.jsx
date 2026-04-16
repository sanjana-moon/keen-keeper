'use client'
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {
    const [communicationList, setCommunicationList] = useState([]);
    const [filteredSection, setFilteredSection] = useState(null);

    const CallBtn = (friend) => {
        setCommunicationList([...communicationList, {friend, communicationType: "call"}]);
        toast.success(`Call with ${friend.name}`)
        // console.log(communicationList);        
    }
    const TextBtn = (friend) => {
        setCommunicationList([...communicationList, {friend, communicationType: "text"}]);
        toast.success(`Text with ${friend.name}`)
        // console.log(communicationList);
        
    }
    const VideoCallBtn = (friend) => {
        setCommunicationList([...communicationList, {friend, communicationType: "video"}]);
        toast.success(`Video Call with ${friend.name}`)
        // console.log(communicationList);
    }

    const handleFilterBtn = (communicationType) => {
         if (communicationType === "all") {
        setFilteredSection(null); // reset filter
        return;
    }
        setFilteredSection(communicationList.filter((friend)=> friend.communicationType === communicationType))
    }

    const data = {
        communicationList,
        setCommunicationList,
        filteredSection,
        CallBtn,
        TextBtn,
        VideoCallBtn,
        handleFilterBtn,
    };

    return (
        <TimelineContext.Provider value={data}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineContextProvider;