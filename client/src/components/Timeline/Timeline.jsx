import React from "react";
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

const data = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardText:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.
      To save the BEF, an evacuation by sea was organised under the direction of Admiral Bertram Ramsay. Over nine days, warships of the Royal and French navies together with civilian craft, including the “little ships” made famous in a BBC broadcast by JB Priestley, successfully evacuated more than 338,000 British and Allied troops from the beaches of Dunkirk, in the remarkable Operation Dynamo. Churchill called it a “miracle of deliverance”, but warned, “Wars are not won by evacuations.”`,
    cardDetailedText: 'blalblbla',
    media: {
      name: "dunkirk beach",
      source: {
        url: "http://someurl/image.jpg"
      },
      type: "IMAGE"
    }
  }
];

function Timeline(props) {

  const { date } = useSelector(state => state.date);

  console.log(date);

  const items = [
    { title: "Event 1", cardTitle: "Event Title 1" },
    { title: "Event 2", cardTitle: "Event Title 2" }
  ]

  const width = 1340;

  return (
    <div className="Timeline">
      <div style={{ width: "100%", height: "500px" }}>
        <Chrono
          items={items}
          // theme={{primary: "red", secondary: "blue", cardBgColor: "yellow", cardForeColor: "violet" }}
          mode="HORIZONTAL"
          itemWidth={width}
          cardHeight={400}
        // allowDynamicUpdate
        >
          <div>

            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <a style={{ cursor: 'pointer', color: 'red' }} onClick={() => console.log(123)}>asdSDASDASDASD</a>
            <SubmitButton>SADASDASDA</SubmitButton>
          </div>
          {/* <div>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <button>button 2</button>
          </div>
          <div>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <button>button 3</button>
          </div>
          <div>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <button>button 1</button>
          </div>
          <div>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <p>ASDASDSKSADKADKASKDKASKDK</p>
            <button>button 1</button>
          </div> */}
          <div className="chrono-icons">
            <img src="/images/basketball.svg" alt="" />
            {/* <img src="/images/basketball.svg" alt="" /> */}
          </div>
        </Chrono>
      </div>
    </div>
  );
}

export default Timeline;
