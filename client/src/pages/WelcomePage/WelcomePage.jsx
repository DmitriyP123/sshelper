import React from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useHistory } from 'react-router-dom'
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from '../../components/headers/light.js';

// import history from '../../utils/history';
import Navbar from 'components/Navbar/Navbar';

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/69/e8/lebron-james-dunks-against-the-houston-rockets_1dhr67o0nxqon1rrueli8yt3y9.jpg?t=583136832&quality=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const history = useHistory()

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
      <Navbar />
        <Content>
          <Heading style={{ position: 'unset' }}>
          WELCOME
          </Heading>
          {/* если что можно сделать PrimaryLink и тогда хистори пуш не нужен?  */}
          <PrimaryAction
            onClick={() => history.push('/map')}>
            SHOW MAP
          </PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
