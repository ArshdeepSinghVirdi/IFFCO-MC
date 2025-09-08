import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)({
  height: '650px',
  display: 'flex',
  position: 'relative'
});

const HeroPanel = styled(Box)<{ backgroundImage: string }>(({ backgroundImage }) => ({
  flex: 1,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: '40px 20px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1
  }
}));

const HeroText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '30px',
  fontWeight: 700,
  zIndex: 2,
  position: 'relative'
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroPanel backgroundImage="images/Left.png">
        <HeroText>WHO</HeroText>
      </HeroPanel>
      
      <HeroPanel backgroundImage="/images/Middle.png">
        <HeroText>WHAT</HeroText>
      </HeroPanel>
      
      <HeroPanel backgroundImage="/images/Right.png">
        <HeroText>WHERE</HeroText>
      </HeroPanel>
    </HeroContainer>
  );
};

export default HeroSection;