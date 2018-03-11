import React from 'react';
import Intro from '../components/Intro';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import First from '../components/First';
import Second from '../components/Second';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
import { StickyContainer, Sticky } from 'react-sticky';

import '../sass/main.scss';

export default function Index({ data }) {

  return (
    <div id="wrapper">
      <Header />
      <StickyContainer>
        <Sticky>
          {
            ({
               style,
               isSticky,
               wasSticky,
               distanceFromTop,
               distanceFromBottom,
               calculatedHeight
             }) => {
              return (
                <Nav isSticky={isSticky} />
              )
            }
          }
        </Sticky>
        <Main>
          <Intro />
          <First />
          <Second />
          <GetStarted />
        </Main>
        <Footer />
      </StickyContainer>
    </div>
  );
}
