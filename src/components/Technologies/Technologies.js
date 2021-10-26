import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>I have worked with various technologies in web development world.
  From Back-end to Front-end design.</SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with HTML, CSS, Javascript, React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiJava size="3rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with Java, Python, C++, PHP
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>MySql</ListTitle>
        <ListParagraph>
          Experience with MariaDB
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
