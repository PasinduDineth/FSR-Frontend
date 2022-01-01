// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout";
// import JumbotronCategoryPage from "../components/jumbotronCategoryPage";
// import Sidebar from "../components/sidebar";
// import ArticlesComponent from "../components/homePageArticalsList";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/main.scss'

// export default function CategoryPage(data) {
//     console.log("datazzz", data)
//     return (
//         <div>
//             {/* <div>
//                 <JumbotronCategoryPage data={data.allStrapiCategory.edges[0].node.name} />
//                 <div className="articalMain">
//                     <div className="articalSection">
//                         <ArticlesComponent articles={data.allStrapiArticle.edges} />
//                     </div>
//                     <div className="sidebarSection">
//                         <Sidebar />
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     );
//   }
//   export const query = graphql`
//   query CategoryPage($slug: String!) {
//     wordPress {
//         articleCategories(where: {slug:$slug}) {
//           nodes {
//             articles {
//               nodes {
//                 title
//               }
//             }
//           }
//         }
//       }
//   }
// `
