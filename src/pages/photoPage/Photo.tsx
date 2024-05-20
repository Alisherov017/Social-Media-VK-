// // Photo.tsx
// import React from "react";
// import styles from "./photo.module.css";
// import Post from "../../ui/posts/Post";
// import { useAppSelector } from "../../helpers/Hooks";
// import { log } from "console";

// const Photo = () => {
//   const { products } = useAppSelector((state) => state.products);
//   console.log(products, "products");

//   // Выбираем первый продукт из списка для отображения в Post
//   const postToDisplay = products.length > 0 ? products[0] : null;

//   return (
//     <div className={styles.photo}>
//       {postToDisplay && <Post post={postToDisplay} />}
//     </div>
//   );
// };

// export default Photo;

import React from "react";
import PostList from "../../ui/posts/PostList";

const Photo = () => {
  return <PostList />;
};

export default Photo;
