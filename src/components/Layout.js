import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './scss/all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet"></link>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />

      <Helmet>
        <script type="text/javascript" src={ withPrefix('js/jquery/dist/jquery.min.js') }></script>
        <script type="text/javascript" src={ withPrefix('js/snap.svg.js') }></script>
        <script type="text/javascript" src={ withPrefix('js/what-input/dist/what-input.min.js') }></script>
        <script type="text/javascript" src={ withPrefix('js/foundation-sites/dist/js/foundation.min.js') }></script>
        <script type="text/javascript" src={ withPrefix('js/app.js') }></script>
      </Helmet>
    </div>
  )
}

export default TemplateWrapper
