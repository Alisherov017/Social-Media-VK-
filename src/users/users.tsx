import React, { useEffect } from "react";
import styles from "./users.module.css";

import Friend from "../ui/friend/Friend";
import { useAppDispatch, useAppSelector } from "../helpers/consts";
import { getUsers } from "../store/actions/user.actions";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, currentUser } = useAppSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="container">
      {users
        .filter((item) => item.id !== currentUser?.id)
        .map((item) => (
          <Friend key={item.id} user={item} />
        ))}
    </div>
  );
};

export default Users;
