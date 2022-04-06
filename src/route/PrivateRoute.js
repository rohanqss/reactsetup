import React from "react";
import { Route, Navigate  } from "react-router-dom";

const PrivateRoute = ({ LoadComponent, ...rest }) => {
  // const token = localStorage.getItem('accessToken')
  var user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  var token = parsedUser?.sessionId;
  return (
    <React.Fragment>
      <Route
        render={(props) =>
          token && token.length > 0 ? (
            <LoadComponent {...props} />
          ) : (
            <Navigate 
              to={{
                from: "*",
                pathname: "/",
              }}
            />
          )
        }
      />
    </React.Fragment>
  );
};
export default PrivateRoute;
