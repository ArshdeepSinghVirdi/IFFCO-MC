import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from './theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyDescription from './components/CompanyDescription';
import StatisticsSection from './components/StatisticsSection';
import ProductsSection from './components/ProductsSection';
import CompanyStory from './components/CompanyStory';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

const App: React.FC = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <HeroSection />
        <CompanyDescription />
        <StatisticsSection />
        <ProductsSection />
        <CompanyStory />
        <NewsSection />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;