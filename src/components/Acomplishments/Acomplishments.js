import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Java course at Luarasi University'},
  { number: 2, text: 'Cerftificate of Web Development with Python', },
  { number: 3, text: 'Machine learning course, Udemy', },
  { number: 4, text: 'Chinese language course, BFSU Summer Camp Program', },
  { number: 5, text: 'Vlunteering Workshop Certificate at The M&M Ivanaj Foundation', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
