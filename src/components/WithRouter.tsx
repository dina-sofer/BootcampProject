import React from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

function WithRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} {...{location, navigate, params}} />;
  }

  return ComponentWithRouterProp;
}

export default WithRouter;