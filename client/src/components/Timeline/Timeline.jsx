import React, { useEffect, useState } from "react";
import "./Timeline.css";
import { Chrono } from "react-chrono";
import { useSelector } from "react-redux";
import tw from "twin.macro";
import styled from "styled-components";

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

function Timeline() {
  const { eventsData } = useSelector(state => state.events);
  return (
    <div className="Timeline">
      <div style={{ width: "100%", height: "500px" }}>
        <Chrono
          mode="HORIZONTAL"

          itemWidth={1340/eventsData.length}
          cardHeight={400}
          allowDynamicUpdate
          items = {eventsData}
        >
      {eventsData?.map((el) => {
        return  <div key={performance.now()}><p>{el.title}</p><p>{el.cardTitle}</p><p>{el.cardText}</p><p>{el.cardDetailedText}</p><SubmitButton>Присоединиться</SubmitButton></div>
      })}
      <div className="chrono-icons" key={performance.now()}>
      {eventsData?.map(() => {
        return  <img src="/images/basketball.svg" alt="" />
      })}
      </div>
        </Chrono>
      </div>
    </div >
  );
}

export default Timeline;
