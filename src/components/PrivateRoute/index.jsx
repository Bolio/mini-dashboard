// import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // const useToken = useSelector((state) => state.token);
  // console.log("useToken ---BOLIO :", useToken);
  const useAccessToken = sessionStorage.getItem("accessToken");

  return useAccessToken ? children : "";
};

export default PrivateRoute;
