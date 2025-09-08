import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProductsContainer = styled(Box)({
  height: '547px',
  backgroundImage: 'url(/images/tractor.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  }
});

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '60px'
});

const MainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '50px',
  fontWeight: 700,
  textTransform: 'uppercase',
  textAlign: 'center'
}));

const ProductsGrid = styled(Stack)({
  direction: 'row',
  spacing: 4,
  alignItems: 'center'
});

const ProductCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  position: 'relative'
}));

const ProductIcon = styled(Box)<{ borderColor: string }>(({ theme, borderColor }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundColor: theme.palette.common.white,
  border: `8px solid ${borderColor}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}));

const ProductLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '26px',
  fontWeight: 700,
  lineHeight: '30px',
  textTransform: 'uppercase',
  textAlign: 'center'
}));

const ComingSoonChip = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-10px',  // adjust positioning
  right: '-10px',
  backgroundColor: '#E53935', // red
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'bold',
  padding: '6px 10px',
  borderRadius: '50%',  // ✅ makes it circular
  width: '60px',        // ✅ fixed size for perfect circle
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  lineHeight: '1.2',
}));


interface ProductItemProps {
  icon: string; // ✅ now image path instead of ReactNode
  label: string;
  borderColor: string;
  comingSoon?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({ icon, label, borderColor, comingSoon }) => (
  <ProductCard>
    <ProductIcon borderColor={borderColor}>
      <img
        src={icon}
        alt={label}
        style={{ width: '120px', height: '120px', objectFit: 'contain' }}
      />
      {comingSoon && (
        <ComingSoonChip>
          COMING<br />SOON
        </ComingSoonChip>
      )}
    </ProductIcon>
    <ProductLabel>{label}</ProductLabel>
  </ProductCard>
);

const ProductsSection: React.FC = () => {
  const products = [
    {
      icon: "/images/p1.png",
      label: "HERBICIDE",
      borderColor: "#008641"
    },
    {
      icon: "/images/p2.png",
      label: "INSECTICIDE",
      borderColor: "#FFBB00"
    },
    {
      icon: "/images/p3.png",
      label: "FUNGICIDE",
      borderColor: "#00488C"
    },
    {
      icon: "/images/p4.png",
      label: "PGR",
      borderColor: "#B9006F"
    },
    {
      icon: "/images/p5.png",
      label: "BIOLOGICAL",
      borderColor: "#861F00",
      comingSoon: true
    }
  ];

  return (
    <ProductsContainer>
      <ContentWrapper>
        <MainTitle>OUR PRODUCTS</MainTitle>
        
        <ProductsGrid direction="row" spacing={4}>
          {products.map((product, index) => (
            <ProductItem
              key={index}
              icon={product.icon}
              label={product.label}
              borderColor={product.borderColor}
              comingSoon={product.comingSoon}
            />
          ))}
        </ProductsGrid>
      </ContentWrapper>
    </ProductsContainer>
  );
};

export default ProductsSection;
