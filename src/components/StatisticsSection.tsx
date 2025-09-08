import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StatisticsContainer = styled(Container)({
  padding: '80px 0',
  maxWidth: '1200px'
});

const StatisticsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '60px 40px',
  alignItems: 'center'
});

const StatCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '16px'
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '114px',
  height: '114px',
  borderRadius: '50%',
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '40px',
  fontWeight: 700,
  lineHeight: 1
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '22px'
}));

interface StatItemProps {
  icon: string; // ✅ now using image path instead of ReactNode
  number: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, number, description }) => (
  <StatCard>
    <IconWrapper>
      <img src={icon} alt={description} style={{ width: 68, height: 68 }} />
    </IconWrapper>
    <StatNumber>{number}</StatNumber>
    <StatDescription>{description}</StatDescription>
  </StatCard>
);

const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      icon: "/images/1.png",
      number: "10+",
      description: "Years of Excellence"
    },
    {
      icon: "/images/2.png",
      number: "18",
      description: "States Covered"
    },
    {
      icon: "/images/3.png",
      number: "4",
      description: "Manufacturing Facilities (Tollers)"
    },
    {
      icon: "/images/4.png",
      number: "3 Cr +",
      description: "KSBY Claims Settled"
    },
    {
      icon: "/images/5.png",
      number: "12000+",
      description: "Unique Distribution Network"
    },
    {
      icon: "/images/6.png",
      number: "500+",
      description: "Dedicated Workforce"
    },
    {
      icon: "/images/7.png",
      number: "85+",
      description: "Product Basket"
    },
    {
      icon: "/images/8.png",
      number: "75+",
      description: "Farmer Service Centers"
    },
    {
      icon: "/images/9.png",
      number: "350+",
      description: "IFFCO Bazaar Outlets"
    },
    {
      icon: "/images/10.png",
      number: "3000+",
      description: "Primary Agriculture Co-operative Societies"
    }
  ];

  return (
    <StatisticsContainer>
      <StatisticsGrid>
        {statistics.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </StatisticsGrid>
    </StatisticsContainer>
  );
};

export default StatisticsSection;
