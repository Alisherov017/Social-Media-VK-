import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../helpers/consts";
import { getUsers } from "../../store/actions/user.actions";

const PostList: React.FC = () => {
  
  return (
    <div className="container">
      {/* {current?.posts?.map((item, index) => (
        <Post post={item} key={index} currentUser={currentUser} />
      ))} */}
    </div>
  );
};

export default PostList;
