import { Route, Redirect } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
