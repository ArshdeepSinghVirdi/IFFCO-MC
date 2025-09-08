import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SectionContainer = styled(Box)({
  position: 'relative',
  backgroundColor: '#ffffff',
  paddingTop: '80px',
  paddingBottom: '40px',
  overflow: 'hidden',
});

const BackgroundVector = styled(Box)({
  position: 'absolute',
  top: 100,
  left: 0,
  right: 500,
  bottom: 0,
  backgroundImage: `url('/images/Vector.png')`,
  backgroundSize: 'cover', // ✅ fills entire background with angled shape
  backgroundPosition: 'right center',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
});

const ContentContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: '1200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '60px',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '40px',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '500px',
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingLeft: '40px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const CoinPlantImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '700px',
  height: 'auto',
  objectFit: 'contain',
  marginRight: '20px', // ✅ keeps inside vector
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    maxWidth: '350px',
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '58px',
  marginTop: '80px',
  marginBottom: '20px',
  fontFamily: '"Roboto", sans-serif',
  whiteSpace: 'nowrap', // ✅ force one-line heading
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    lineHeight: '40px',
    whiteSpace: 'normal', // allow wrap on very small screens
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '28px',
  marginBottom: '32px',
  textAlign: 'justify',
}));

const LearnMoreLink = styled(Button)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
    '& svg': {
      fontSize: '16px',
    },
  },
}));

const CompanyDescription: React.FC = () => {
  return (
    <SectionContainer>
      <BackgroundVector />
      <ContentContainer>
        <TextSection>
          <MainTitle>
            Genuine Quality Agrochemicals<br/> at Reasonable Price !
          </MainTitle>

          <DescriptionText>
            IFFCO-MC stands out in the Agrochemical Industry by offering
            Genuine, High-Quality Crop Protection Products at Reasonable
            Prices for Farmers. Unlike the traditional multi-Tier distribution
            system where Distributors, Wholesalers and Retailers are involved
            each adding margins, IFFCO-MC operates a Single-Tier distribution
            Model. This Streamlined approach eliminates middle-tier and relies
            on trusted channels such as Cooperative Societies, IFFDC, FSC,
            IFFCO Bazar, and CCDU to directly reach farmers.
          </DescriptionText>

          <LearnMoreLink endIcon={<ArrowForwardIcon />}>
            Learn More
          </LearnMoreLink>
        </TextSection>

        <ImageSection>
          <CoinPlantImage
            src="/images/Coinplant.png"
            alt="Stack of golden coins with plants growing from them"
          />
        </ImageSection>
      </ContentContainer>
    </SectionContainer>
  );
};

export default CompanyDescription;
