import axios from "axios";
import { useEffect, useState } from "react";

const useJwtToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      // console.log(user);
      // const email = "";
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://shielded-falls-85173.herokuapp.com/getJWTtoken",
          {
            email,
          }
        );
        setToken(data.jwtAccessToken);
        localStorage.setItem("jwtAccessToken", data.jwtAccessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useJwtToken;
