import React from 'react'
import Head from 'next/head'
import { Flex, Box } from 'rebass'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import Header from './header'
import Footer from './footer'
import css from 'styled-jsx/css'

const globalStyle = css.global`
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap");
  :global(body) {
    font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
    margin: 0;
  }
`

const layout = ({
  children,
  header = false,
  waves = false,
  instructorAd = true
}) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Flex
          sx={{
            flexDirection: 'column',
            minHeight: '100vh'
          }}
        >
          <Header waves={waves} header={header}></Header>

          <Flex
            sx={{
              flex: 1,
              flexDirection: ['column', 'row']
            }}
          >
            <Box
              sx={{
                flex: 1,
                minWidth: 0
              }}
              bg="#ffffff"
            >
              {children}
            </Box>
            {/*
        <Box
          sx={{
            flexBasis: ["auto", 64],
            order: -1
          }}
        >
          Nav
        </Box>
        <Box
          sx={{
            flexBasis: ["auto", 64]
          }}
        >
          Ads
        </Box>*/}
          </Flex>
          <Footer instructorAd={instructorAd} waves={waves} />
        </Flex>
        <style jsx global>
          {globalStyle}
        </style>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default layout
