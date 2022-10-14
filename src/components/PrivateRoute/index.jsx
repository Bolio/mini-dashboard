// import { useSelector } from "react-redux";
import NotFound from "../NotFound";

const PrivateRoute = ({ children }) => {
  // const useToken = useSelector((state) => state.token);
  // console.log("useToken ---BOLIO :", useToken);
  const useAccessToken = sessionStorage.getItem("accessToken");

  return useAccessToken ? children : <NotFound />;
};

export default PrivateRoute;
