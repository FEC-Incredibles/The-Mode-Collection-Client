# The Mode Collection

<!-- TABLE OF CONTENTS -->
<details open="open" id="top">
  <summary> Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#product-details">Product Details</a></li>
        <li><a href="#related-products">Related Products</a></li>
        <li><a href="#questions--answers">Questions & Answers</a></li>
        <li><a href="#ratings--reviews">Ratings & Reviews</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#meet-the-team">Meet the Team</a>
    </li>
  </ol>
</details>

&nbsp;

## About the Project

The Mode Collection is a collaborative project focused on revamping an e-commerce product details website. With each team member taking ownership of their own component, this project provided valuable opportunities to expand our expertise in building, maintaining, and optimizing a full React application.

### Built With

##### Frontend

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>

   <img src="https://img.shields.io/badge/javascript-%23563D7C.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
   <img src="https://img.shields.io/badge/scss-%23DB7093.svg?style=for-the-badge&logo=css3&logoColor=white">
</div>

##### Backend

<div>
   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
   <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
</div>

##### Devtools

<div>
   <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
   <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
   <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
</div>

&nbsp;

<!-- Features -->

## Features

The application incorporates various features to enhance the user experience, including product details, related products, questions & answers, and ratings & reviews.

### Product Details

The Product Details module provides users with comprehensive information about each product. Key features of this module include:

- Product Information: The Product Detail page presents essential details such as the product rating, category, title, price, overview, and social media links. This allows customers to quickly assess whether the product meets their requirements.
- Image Gallery: The Image Gallery offers a seamless browsing experience, allowing users to navigate through multiple product images. It includes functionality for image expansion and dynamic zooming, providing a closer look at the product.
- Style Selector: The Style Selector component guides customers in finding their preferred product style. It allows them to explore different style combinations and displays the selected style in the image gallery.

### Related Products

The Related Products module enhances the user's shopping experience by providing recommendations and the ability to create personalized outfits. Key features of this module include:

- Related Products List: The Related Products list displays items that are associated with the current product, as determined by the company. Each product card is clickable, leading users to the detail page for that specific product. The product card also includes a ☆ button, which opens a modal displaying a feature comparison between the selected card and the current product.
- Outfit Products List: The Outfit Products list allows users to create custom outfits by selecting products and grouping them together. The first card in this carousel is a custom card button that adds the current overview product. Each card is stored in the user's local storage to maintain uniqueness and preserve the list even after reloading. Each card in the carousel includes an X button, enabling users to remove products from their Outfit Products list.

### Questions & Answers

The Questions & Answers module enables users to interact with the community, seek information, and provide feedback on the selected product. Key features of this module include:

- View Questions: The View Questions section displays up to four questions and their corresponding answers. Users can mark questions and answers as helpful or report them. Clicking the More Answered Questions button expands the list to include all remaining questions, which can be scrolled through.
- Search for a Question: The search bar allows users to search for specific questions, making it easier to find relevant information.
- Ask a Question: Clicking the Add a Question button opens a modal with fields for the question body, nickname, and email. Form validation ensures that all required fields are filled out before submitting the question.
- Answer a Question: Clicking the Add Answer button opens a form modal with fields for the answer body, nickname, and email. Form validation ensures that all required fields are filled out before submitting the answer. Users can also upload up to five optional photos.

### Ratings & Reviews

The Ratings & Reviews module offers users an interactive and user-friendly interface to browse and contribute product reviews. Key features of this module include:

- Reviews List: The Reviews List displays all available reviews for the user to read. Users can sort the reviews by helpfulness, relevance, or newest. Additionally, they can filter the reviews by text or rating given.
- Rating Breakdown: The Rating Breakdown showcases the product's average rating and provides a distribution graph of ratings. Users can filter the review list by specific ratings through click or touch interactions.
- Write New Review: The Write New Review feature allows users to create a new review for the product. Users can access the review submission form by clicking the "Write a Review" button located at the bottom of the page.

<!-- GETTING STARTED -->

## Getting Started

##### Requirements

- Node 6.13.0

##### Run

1. Navigate to the project directory
   ```sh
   cd fec-incredibles
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. To start the project
   ```sh
   npm run build
   npm start
   ```
   <p align="right">(<a href="#top">back to top</a>)</p>

&nbsp;

<!-- Team Members -->

## Meet the Team

<p>
 <span style="padding-right: 10px;">Jason Quintana</span>
 <a href="https://www.linkedin.com/in/quintanajason/">
 <img src="https://img.shields.io/badge/Jason-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-bottom: -8px; padding-right: 8px;">
 </a>
 <a href="https://github.com/IamMrUnicorn">
 <img src="https://img.shields.io/badge/Jason-100000?style=for-the-badge&logo=github&logoColor=white" style="margin-bottom: -8px">
 </a>
</p>

<p>
 <span style="padding-right: 10px;">Jeffrey Parker</span>
 <a href="https://www.linkedin.com/in/parkerhjeffrey/">
 <img src="https://img.shields.io/badge/Jeffrey-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-bottom: -8px; padding-right: 8px;">
 </a>
 <a href="https://github.com/JeffHParker">
 <img src="https://img.shields.io/badge/Jeffrey-100000?style=for-the-badge&logo=github&logoColor=white" style="margin-bottom: -8px">
 </a>
</p>

<p>
 <span style="padding-right: 10px;">Brian Gage</span>
 <a href="https://www.linkedin.com/in/gage-brian/">
 <img src="https://img.shields.io/badge/Brian-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-bottom: -8px; padding-right: 8px;">
 </a>
 <a href="https://github.com/Sondersong">
 <img src="https://img.shields.io/badge/Brian-100000?style=for-the-badge&logo=github&logoColor=white" style="margin-bottom: -8px">
 </a>
</p>

<p>
 <span style="padding-right: 10px;">Shuhua Liu</span>
 <a href="https://www.linkedin.com/in/shuhua-liu/">
 <img src="https://img.shields.io/badge/Shuhua-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-bottom: -8px; padding-right: 8px;">
 </a>
 <a href="https://github.com/Shuhua-L">
 <img src="https://img.shields.io/badge/Shuhua-100000?style=for-the-badge&logo=github&logoColor=white" style="margin-bottom: -8px">
 </a>
</p>
<p align="right">(<a href="#top">back to top</a>)</p>
