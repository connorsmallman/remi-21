import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './header';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
    body,
    html {
        margin: 0;
        width: 100%;
        height: 100%;
    }
`;

const Layout = ({ children }) => (
  <>
    <Helmet
      title={'Remi 21'}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <ThemeProvider theme={theme}>
      <>
        <Header />
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>  
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
