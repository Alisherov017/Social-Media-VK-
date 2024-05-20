import React from "react";
import Post from "./Post";
import { useAppSelector } from "../../helpers/Hooks";
import { ProductType } from "../../types";
import styles from "./post.module.css";

const PostList: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className={styles.postList}>
      {products.map((product: ProductType, index: number) => (
        <Post key={index} post={product} />
      ))}
    </div>
  );
};

export default PostList;
