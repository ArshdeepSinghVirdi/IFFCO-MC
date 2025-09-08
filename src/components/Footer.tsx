import React from 'react';
import { Box, Typography, Container, Stack, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '60px 0 40px 0',
  position: 'relative',
  backgroundImage: 'linear-gradient(rgba(0, 90, 68, 0.6), rgba(0, 90, 68, 0.6)), url(/images/footerimage.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}));

const ContentWrapper = styled(Container)({
  maxWidth: '1200px'
});

const FooterContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '40px'
});

const LeftSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
});

const Logo = styled('img')({
  height: '68px',
  width: '112px'
});

const SocialIcons = styled(Stack)({
  direction: 'row',
  spacing: 2
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  width: '37px',
  height: '37px',
  '&:hover': {
    backgroundColor: theme.palette.grey[100]
  }
}));

const LinksSection = styled(Box)({
  display: 'flex',
  gap: '80px'
});

const LinkColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
});

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '35px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const WebsiteLinks = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '24px'
});

const WebsiteLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '14px',
  fontWeight: 300,
  lineHeight: '18px',
  textDecoration: 'underline',
  fontFamily: '"Noto Sans", sans-serif'
}));

const Divider = styled(Box)(({ theme }) => ({
  height: '1px',
  backgroundColor: theme.palette.common.white,
  margin: '24px 0'
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '18px',
  fontWeight: 300,
  textAlign: 'center'
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterContent>
          <LeftSection>
            <Logo src="/images/iffco-logo.svg" alt="IFFCO-MC Logo" />
            
            <SocialIcons direction="row" spacing={2}>
              <SocialIcon>
                <YouTubeIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <XIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <FacebookIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <InstagramIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
            </SocialIcons>
          </LeftSection>

          <LinksSection>
            <LinkColumn>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About IFFCO-MC</FooterLink>
              <FooterLink href="#">Vision and Mission</FooterLink>
              <FooterLink href="#">Quality Policy</FooterLink>
              <FooterLink href="#">Board of Directors</FooterLink>
            </LinkColumn>
            
            <LinkColumn>
              <FooterLink href="#">Products</FooterLink>
              <FooterLink href="#">Events/Testimonials</FooterLink>
              <FooterLink href="#">CSR Policy</FooterLink>
              <FooterLink href="#">Video</FooterLink>
              <FooterLink href="#">KSBY</FooterLink>
            </LinkColumn>
            
            <LinkColumn>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Career</FooterLink>
            </LinkColumn>
          </LinksSection>
        </FooterContent>

        <WebsiteLinks>
          <WebsiteLink href="https://www.iffco.in/en/corporate">
            https://www.iffco.in/en/corporate
          </WebsiteLink>
          <WebsiteLink href="https://www.mitsubishielectric.com/en/index.html">
            https://www.mitsubishielectric.com/en/index.html
          </WebsiteLink>
        </WebsiteLinks>

        <Divider />

        <Copyright>
          ™ ® Trademarks of IFFCO-MC Crop Science Pvt. Ltd. and its affiliated companies. 
          ©2025 IFFCO-MC Crop Science Pvt. Ltd.
        </Copyright>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;