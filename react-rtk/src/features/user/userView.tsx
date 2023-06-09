import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List Of Users</h2>
      <h2>{user.loading && <div>Loading.....</div>}</h2>
      <h2>
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      </h2>
      {!user.loading && user.users.length > 0 ? (
        <div>
          <ul style={{ listStyleType: "none" }}>
            {user.users.map((usr) => (
              <li key={usr.id}>{usr.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
