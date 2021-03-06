import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem" /> <span>MyPortofolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <l1>
        <Link href="#projects">
        <NavLink>Projects</NavLink>
        </Link>
      </l1>
      <l1>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </l1>
      <l1>
        <Link href="#about">
        <NavLink>About</NavLink>
        </Link>
      </l1>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/">
      <AiFillGithub size="3rem" /> 
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mart-gjepali-25939019b/">
      <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/mart.gjepali/">
      <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
