import React, { useState } from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StoryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: '80px 0',
  position: 'relative',
  overflow: 'hidden',
}));

const ContentWrapper = styled(Container)({
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
});

const MainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '50px',
  fontWeight: 700,
  textTransform: 'capitalize',
  textAlign: 'center',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: '20px',
  fontStyle: 'italic',
  fontWeight: 500,
  fontFamily: '"Noto Sans", sans-serif',
  textAlign: 'center',
  marginBottom: '40px',
}));

const TestimonialBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  borderRadius: '500px',
  boxShadow: '0px 0px 30px rgba(0,0,0,0.15)',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  height: '280px',
}));

const QuoteImageTop = styled('img')({
  position: 'absolute',
  top: '-30px',
  left: '-140px',
  width: '150px',
  height: '110px',
  zIndex: 0,
});

const QuoteImageBottom = styled('img')({
  position: 'absolute',
  bottom: '-80px',
  right: '-90px',
  width: '150px',
  height: '110px',
  zIndex: 2,
});

const ContentBox = styled(Box)({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0px',
  position: 'relative',
  zIndex: 1,
});

const TextContent = styled(Box)({
  flex: 1,
  maxWidth: '700px',
  paddingLeft: '100px',
  boxSizing: 'border-box',
});

const TestimonialText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '25px',
  marginBottom: '0px',
}));

const FarmerImage = styled('img')({
  width: '300px',
  height: '280px',
  borderRadius: '0px 450px 450px 0px',
  objectFit: 'cover',
  marginLeft: '60px',
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  color: theme.palette.secondary.main,
  fontSize: '40px',
  zIndex: 3,
  '&:hover': {
    backgroundColor: 'rgba(237, 28, 36, 0.1)',
  },
}));

const LeftNavButton = styled(NavigationButton)({
  left: '-90px',
});

const RightNavButton = styled(NavigationButton)({
  right: '-90px',
});

const CompanyStory: React.FC = () => {
  const farmerImages = [
    '/images/farmer-testimonial.png',
    '/images/Farmer2.png',
    '/images/Farmer3.png',
    '/images/Farmer4.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % farmerImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? farmerImages.length - 1 : prev - 1
    );
  };

  return (
    <StoryContainer>
      <ContentWrapper>
        <MainTitle>IFFCO-MC Kisan</MainTitle>
        <Subtitle>Empowering Fields, Earning Trust</Subtitle>

        <TestimonialBox>
          <QuoteImageTop src="/images/Upper.png" alt="Opening quote" />

          <ContentBox>
            <TextContent>
              <TestimonialText>
                IFFCO-MC is a name that resonates with quality, reliability, and
                consistent performance in Indian agriculture. Our crop protection
                and nutrition products are designed to deliver measurable results — 
                helping farmers protect their crops and improve yields, season after
                season.
              </TestimonialText>
            </TextContent>

            <FarmerImage
              src={farmerImages[currentIndex]}
              alt={`Farmer testimonial ${currentIndex + 1}`}
            />
          </ContentBox>

          <QuoteImageBottom src="/images/Lower.png" alt="Closing quote" />

          <LeftNavButton onClick={handlePrev}>
            <ArrowBackIosIcon fontSize="inherit" />
          </LeftNavButton>

          <RightNavButton onClick={handleNext}>
            <ArrowForwardIosIcon fontSize="inherit" />
          </RightNavButton>
        </TestimonialBox>
      </ContentWrapper>
    </StoryContainer>
  );
};

export default CompanyStory;
