import React, { useState } from 'react';
import { Box, Typography, Container, Tabs, Tab, Button, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NewsContainer = styled(Box)(() => ({
  background: `linear-gradient(
    180deg,
    #f9fdf5 50%,      /* White top */
    #f9fdf5 40%,     /* Light greenish */
    #ffffff  100%     /* Peachy green bottom */
  )`,
  padding: '80px 0',
  marginTop: '50px'
}));


const ContentWrapper = styled(Container)({
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px'
});

const MainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '50px',
  fontWeight: 700,
  textTransform: 'capitalize',
  textAlign: 'center'
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: '20px',
  fontStyle: 'italic',
  fontWeight: 500,
  fontFamily: '"Noto Sans", sans-serif',
  textAlign: 'center',
  marginBottom: '20px'
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '100px',
  boxShadow: 'inset 0px 4px 4px rgba(12, 12, 13, 0.05)',
  padding: '8px',
  minHeight: '60px',
  '& .MuiTabs-indicator': {
    display: 'none'
  }
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '20px',
  textTransform: 'none',
  color: theme.palette.text.disabled,
  borderRadius: '100px',
  minHeight: '44px',
  padding: '12px 24px',
  '&.Mui-selected': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  }
}));

const NewsCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.common.white,
  borderRadius: '500px',
  boxShadow: theme.shadows[1],
  overflow: 'hidden',
  width: '100%',
  maxWidth: '900px',
  height: '313px',
  position: 'relative'
}));

const NewsImage = styled('img')({
  width: '517px',
  height: '313px',
  objectFit: 'cover',
  borderRadius: '200px 0px 0px 200px'
});

const NewsContent = styled(Box)({
  flex: 1,
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px'
});

const NewsDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: '16px',
  fontWeight: 700,
}));

const NewsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '23px',
  fontWeight: 700,
  lineHeight: '25px'
}));

const NewsExcerpt = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '23px'
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '15px',
  fontWeight: 700,
  textTransform: 'none',
  padding: 0,
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  }
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'transparent',
  color: theme.palette.secondary.main,
  fontSize: '40px',
  '&:hover': {
    backgroundColor: 'rgba(237, 28, 36, 0.1)'
  }
}));

const LeftNavButton = styled(NavigationButton)({
  left: '15px'
});

const RightNavButton = styled(NavigationButton)({
  right: '15px'
});

const ViewMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  fontSize: '19px',
  fontWeight: 700,
  textTransform: 'none',
  padding: '12px 32px',
  borderRadius: '100px',
  marginTop: '40px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  }
}));

const NewsSection: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <NewsContainer>
      <ContentWrapper>
        <MainTitle>Latest From IFFCO-MC</MainTitle>
        <Subtitle>Latest Highlights and Initiatives from IFFCO-MC</Subtitle>
        
        <StyledTabs value={tabValue} onChange={handleTabChange}>
          <StyledTab label="News & Media" />
          <StyledTab label="Awards & Recognition" />
          <StyledTab label="Event Gallery" />
          <StyledTab label="Videos" />
        </StyledTabs>

        <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <NewsCard>
            <NewsImage 
              src="/images/news-foundation-day.png" 
              alt="Group of people at IFFCO-MC foundation day event"
            />
            <NewsContent>
              <NewsDate>29 August, 2024 9:24 AM IST</NewsDate>
              <NewsTitle>
                IFFCO-MC Celebrates 10th Foundation Day: A Decade of 
                Commitment to Farmers
              </NewsTitle>
              <NewsExcerpt>
                Manoj Varshney, MD & CEO of IFFCO-MC, celebrated the company's 10th 
                Foundation Day by highlighting....
              </NewsExcerpt>
              <ReadMoreButton
                endIcon={<ArrowForwardIcon sx={{ fontSize: '12px' }} />}
              >
                Continue Reading
              </ReadMoreButton>
            </NewsContent>
          </NewsCard>
          
          <LeftNavButton>
            <ArrowBackIosIcon fontSize="inherit" />
          </LeftNavButton>
          
          <RightNavButton>
            <ArrowForwardIosIcon fontSize="inherit" />
          </RightNavButton>
        </Box>

        <ViewMoreButton>View More</ViewMoreButton>
      </ContentWrapper>
    </NewsContainer>
  );
};

export default NewsSection;