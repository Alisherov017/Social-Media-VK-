import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { StringLiteral } from "typescript";
import { API } from "../../helpers/consts";
import { getCurrentUser } from "./user.actions";
import { CardData } from "../../types";

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (
    { post, userId }: { post: CardData; userId: number | string },
    { getState, dispatch }
  ) => {
    const { users } = getState() as any;
    console.log(users);

    try {
      await axios.patch(`${API}/${userId}`, {
        posts: [...users.currentUser.posts, post],
      });
      dispatch(getCurrentUser(userId));
    } catch (error) {
      console.log(error);
    }
  }
);
