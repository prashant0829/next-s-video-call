import HomeClock from "@/components/HomeClock";
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <HomeClock />
      <MeetingTypeList />
    </section>
  );
};

export default Home;
