import React from "react";
import TopBanner from "./homepages/TopBanner";
import BottomBanner from "./homepages/BottomBanner";
import VehicleList from "./homepages/VehicleList";
const Home = () => {
    return (
        <>
            <TopBanner />
            <BottomBanner />
            <VehicleList />
        </>
    );
};

export default Home;
