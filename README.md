# Project

Weekend Challenge **weekend-react-gallery** from Prime Academy

## Description

*What problem did you solve? How did you solve it?*

In this assignment, I created a React gallery page that showcases images of significant personal importance. The project involved multiple components - `App`, `GalleryList`, and `GalleryItem`. The `App` component managed the application state by using `axios` to retrieve data from the server endpoint `/gallery` and storing it. The `GalleryList` component, designed to be reusable, received the gallery data as props from `App` and iterated through it, creating individual `GalleryItem` components for each image. The `GalleryItem` component, in turn, received individual gallery items as props and displayed the image with the ability to toggle between image and description on click. It also included a like button that, when clicked, used `axios` to update the like count on the server (`/gallery/like/:id`). This dynamic updating of likes was reflected in the UI, providing a seamless user experience. 
