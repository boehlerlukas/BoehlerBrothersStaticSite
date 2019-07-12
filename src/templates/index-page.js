import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  title,
}) => (
  <div id="content">
      <div id="header" className="header-svg">
        <h1 className="center-x center-y">
          App &<br />
          Web - Entwicklung<br />
          aus Vorarlberg
        </h1>
        <img className="parallax-element fist center-x" data-parallax-deep="1000" src="img/@stock/fist.png" alt="" />
        <img className="parallax-element circle-multiply" data-parallax-deep="100" src="img/circle-multiply.png" alt="" />
        <img className="parallax-element wave animo" data-parallax-deep="150" data-parallax-speed="1.2" data-animo-rotate="120deg" data-animo-bottom="-70%" data-animo-right="18%" src="img/wave.png" alt="" />
        <img className="parallax-element triangle animo" data-animo-right="25%" data-animo-bottom="-65%" data-animo-rotate="360deg" data-parallax-deep="200" src="img/triangle.png" alt="" />
        <img className="parallax-element circle-dissolve animo" data-parallax-speed="0.5" data-animo-bottom="-74%" data-parallax-deep="20" src="img/circle-dissolve.png" alt="" />

        <svg preserveAspectRatio="none meet" viewBox="0 0 160 100">
          <path d="M6.2,0c0,0,1,0.3,1.7,0.7s1.2,1,3.5,1.4s5.2,1.1,6.2,3.3c1,2.2-0.1,5.8-2.6,7.4s-4.6,1-7.9-0.3S0,9.8,0,9.8L0,0H6.2z"

          data-mouseover="M46.6,0c0,0,7.4,2.1,12.8,5.2s8.9,7.5,26.1,10.9s39.1,8.4,46.5,25.1s-0.8,43.6-19.6,55.9s-34.4,7.2-59.8-2S0,73.4,0,73.4L0,0H46.6z"
          fill="#ff4552" />

          <path d="M160,90.8c0,0-9.3-3.5-13.2-3.4c0,0-1.1,0.1-2.6,0.4c-1.5,0.3-4.7,0.9-6.1,1.5c-1.4,0.6-4,1.4-4.5,5c-0.5,3.6,0,7.9,0.9,9.5c1,1.6,1.9,1.9,4.6,2.3c2.6,0.4,4.9,0.5,7.9,0.5c3,0,13.1,0,13.1,0L160,90.8z"
          data-mouseover="M160,24.2c0,0-48.5-18.1-69-17.6c0,0-5.9,0.4-13.6,2s-24.2,4.6-31.8,7.6s-21,7.2-23.5,26.2s-0.2,41.2,4.8,49.4s10.1,9.8,23.8,12s25.5,2.8,41.2,2.7s68.1,0,68.1,0L160,24.2z"
          fill="#0606ff" />
        </svg>
      </div>
      <div className="full">
        <div className="intro-text">
          <div className="row">
            <div className="large-6 columns">
              <h2>Hi there!</h2>
            </div>
            <div className="large-6 columns">
              <p>
              Wir bieten innovative Softwarelösungen, Prototypen
              und Konzepte, die Ihr Unternehmen oder Vorhaben
              in die Zukunft begleiten!
              <br /><br />#web #app #ai #vorarlberg
              </p>
              <p><a href="about.html" className="text-link">How we work</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="full white">
        <div className="row">
          <div className="large-8 large-centered columns">
            <div className="section-title small-margin">
              <h2>
              Wir arbeiten für die Besten
              </h2>
              <p>
              Innovative, digitale Lösungen für anspruchsvolle Kunden.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/raiffeisen.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/wko.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/heron.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/hypo-il.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/mcv.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/boneco.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/escatec.jpg" />
              </div>
            </div>
            <div className="large-3 columns">
              <div className="customer-client">
                <img src="img/customers/vkw.jpg" />
              </div>
            </div>
          </div>
      </div>

      <div className="full">
        <div className="works">
          <div className="row">
            <div className="large-12 columns">
              <div className="work-item">
                <h3><a href="case-study.html">Richtpreise App</a></h3>
                <a href="case-study.html"><img src="img/richtpreise-app-teaser.jpg" alt="" /></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <div className="work-item">
                <h3><a href="case-study.html">WeatherWheel</a></h3>
                <a href="case-study.html"><img src="img/weatherwheel.jpg" alt="" /></a>
              </div>
            </div>
            <div className="large-6 columns">
              <div className="work-item">
                <h3><a href="case-study.html">Wetterring</a></h3>
                <a href="case-study.html"><img src="img/wetterring.jpg" alt="" /></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-12 columns">
              <div className="work-item">
                <h3><a href="case-study-2.html">WKV App</a></h3>
                <a href="case-study.html"><img src="img/wkvnews-app-teaser.jpg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all"><a className="text-link" href="works.html">View all works</a></div>
      </div>

      <div className="full no-sides white">
        <div className="row">
          <div className="large-8 large-centered columns">
            <div className="section-title">
              <h2>
                App, Web & AI/ML Entwicklung
              </h2>
              <p>
               Gemeinsam großes Erschaffen
              </p>
            </div>
          </div>
        </div>

        <div className="large-6 columns">
          <div className="playground-left">
            <img src="img/office-3.jpg" alt="BoehlerBrothers Team" />
          </div>
        </div>
        <div className="large-6 columns">
          <div className="playground-right-doggoy">
            <img src="img/office-6.jpg" alt="Office dog Freija" />
          </div>
        </div>
        <div className="clear"></div>
        <div className="view-services"><a className="text-link" href="service.html">View our services</a></div>
      </div>
      <div className="new-footer full white">
        <h1>
          <a href="works.html">
            Projekt anfragen
          </a>
        </h1>
        <svg preserveAspectRatio="none meet" viewBox="0 0 400 100">
          <path d="M47.5,100c0,0,50.1-73.9,118.8-56.4c0,0,33.9,7.9,43.6,28.4c9.7,20.5-3.2,28-3.2,28H47.5z"
            data-mouseout="M47.5,100c0,0,50.1-73.9,118.8-56.4c0,0,33.9,7.9,43.6,28.4c9.7,20.5-3.2,28-3.2,28H47.5z"
            data-mouseover="M-163,100c0,0,195.3-290.1,462.9-221.5c0,0,132,31.1,170,111.4S457.2,100,457.2,100H-163z"
            fill="#24e394" />
        </svg>
      </div>

    </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
