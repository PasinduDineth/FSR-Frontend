// import React from "react";
// import PropTypes from "prop-types";
// import { Helmet } from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

// const SEO = ({ seo = {} }) => {
//   const { strapiGlobal } = useStaticQuery(query);
//   const { defaultSeo, siteName, favicon } = strapiGlobal;

//   // Merge default and page-specific SEO values
//   const fullSeo = { ...defaultSeo, ...seo };

//   const getMetaTags = () => {
//     const tags = [];

//     if (fullSeo.metaTitle) {
//       tags.push(
//         {
//           property: "og:title",
//           content: fullSeo.metaTitle,
//         },
//         {
//           name: "twitter:title",
//           content: fullSeo.metaTitle,
//         }
//       );
//     }
//     if (fullSeo.metaDescription) {
//       tags.push(
//         {
//           name: "description",
//           content: fullSeo.metaDescription,
//         },
//         {
//           property: "og:description",
//           content: fullSeo.metaDescription,
//         },
//         {
//           name: "twitter:description",
//           content: fullSeo.metaDescription,
//         }
//       );
//     }
//     if (fullSeo.shareImage) {
//       const imageUrl =
//         (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
//         fullSeo.shareImage.publicURL;
//       tags.push(
//         {
//           name: "image",
//           content: imageUrl,
//         },
//         {
//           property: "og:image",
//           content: imageUrl,
//         },
//         {
//           name: "twitter:image",
//           content: imageUrl,
//         }
//       );
//     }
//     if (fullSeo.article) {
//       tags.push({
//         property: "og:type",
//         content: "article",
//       });
//     }
//     tags.push({ name: "twitter:card", content: "summary_large_image" });

//     return tags;
//   };

//   const metaTags = getMetaTags();

//   return (
//     <Helmet
//       title={fullSeo.metaTitle}
//       titleTemplate={`%s | ${siteName}`}
//       link={[
//         {
//           rel: "icon",
//           href: favicon.publicURL,
//         },
//         {
//           rel: "stylesheet",
//           href: "https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
//         },
//         {
//           rel: "stylesheet",
//           href:
//             "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
//         },
//         {
//           rel: "stylesheet",
//           href:
//             "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
//         }
//       ]}
//       script={[
//         {
//           src:
//             "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
//         },
//         {
//           src:
//             "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
//         },
//         {
//           src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
//         },
//       ]}
//       meta={metaTags}
//     />
//   );
// };

// export default SEO;

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   article: PropTypes.bool,
// };

// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   article: false,
// };

// const query = graphql`
//   query {
//     strapiGlobal {
//       siteName
//       favicon {
//         publicURL
//       }
//       defaultSeo {
//         metaTitle
//         metaDescription
//         shareImage {
//           publicURL
//         }
//       }
//     }
//   }
// `;


import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query);
  const { defaultSeo, siteName, favicon } = strapiGlobal;
  const url = "http://www.findsomereviews.com"
  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  const imageUrl =
        (process.env.GATSBY_ROOT_URL || url) +
        fullSeo.shareImage.publicURL;
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
            <title>{fullSeo.metaTitle}</title>
            <meta name="description" content={fullSeo.metaDescription} />
            <meta name="image" content={imageUrl} />
             {/* OpenGraph tags */}
             <meta property="og:url" content={url} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={fullSeo.metaTitle} />
            <meta property="og:description" content={fullSeo.metaDescription} />
            <meta property="og:image" content={imageUrl} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
            <meta name="twitter:title" content={fullSeo.metaTitle} />
            <meta name="twitter:description" content={fullSeo.metaDescription} />
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

const query = graphql`
  query {
    strapiGlobal {
      siteName
      favicon {
        publicURL
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;
