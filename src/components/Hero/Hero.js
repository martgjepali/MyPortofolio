import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle>
      Welcome to <br/>
      My Personal Portofolio
    </SectionTitle>
    <SectionText>
    Hello! My name is Mart Gjepali and welcome to my personal portofolio, if you want to know more about me and my experience just scroll down. I hope you have a nice trip in here!
    </SectionText>
  </LeftSection>
  </Section>
);

export default Hero;