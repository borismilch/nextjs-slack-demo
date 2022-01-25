import { AuthStore } from "../store";
import { observer } from 'mobx-react-lite'

import Redirect from './Redirect'

const WithoutAuth: any = (Component: any) => {

  const Auth = (props:any) => {

    console.log(AuthStore.isLoaded, AuthStore.user,)
    
    if (AuthStore.isLogeed) {

      console.log('dddd')

      return  <Redirect path="/" />
    }

    return (
      <Component {...props} />
    );
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return observer(Auth);
};

export default WithoutAuth