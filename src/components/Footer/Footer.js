import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+355694050097">+355694050097</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:gjepalimart@gmail.com">gjepalimart@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Knowledge is power.”</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
        <SocialIcons href="https://github.com/">
      <AiFillGithub size="3rem" /> 
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mart-gjepali-25939019b/">
      <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/mart.gjepali/">
      <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
