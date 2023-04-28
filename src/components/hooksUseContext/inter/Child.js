import { useContext, useEffect } from "react";
import UserContext from "./context";

const Child = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.github.com/users/vic0627");
      const data = await res.json();
      setUser(data);
    })();
  }, [setUser]);

  return (
    <div>
      {user ? (
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
          />
          <h2>{user.login}</h2>
          <p>{user.id}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
export default Child;
