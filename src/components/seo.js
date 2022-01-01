import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({seo}) => {
  const data = seo.article ? seo : seo.allWpPage.nodes[0].basicSettings;

  const url = "http://www.findsomereviews.com"
  // Merge default and page-specific SEO values
  const fullSeo = { ...data };

  const imageUrl = fullSeo.favicon ? fullSeo.favicon.link : "";
  return (
    <Helmet
    htmlAttributes={{ lang: 'en-US' }}
    link={[
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      }
    ]}
    script={[
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
      },
    ]}
      >
            {/* General tags */}
            <title>{fullSeo.siteTitle}</title>
            <meta name="description" content={fullSeo.siteMetaDescription} />
            <meta name="image" content={imageUrl} />
             {/* OpenGraph tags */}
             <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={fullSeo.siteTitle} />
            <meta property="og:description" content={fullSeo.siteMetaDescription} />
            <meta property="og:image" content={imageUrl} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
            <meta name="twitter:title" content={fullSeo.siteTitle} />
            <meta name="twitter:description" content={fullSeo.siteMetaDescription} />
            <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

