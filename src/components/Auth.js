import React, {
  useEffect,
  useState
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import authService from 'src/services/authService';
import { updateUserData } from 'src/actions/accountActions';

function Auth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const initUserInfo = async () => {
      if (authService.isAuthenticated()) {
        const userId = authService.getConnectedUserId();

        const user = await authService.getUserData(userId);

        await dispatch(updateUserData(user));
      }
    };

    initUserInfo();
  }, [dispatch]);

  return children;
}

Auth.propTypes = {
  children: PropTypes.any
};

export default Auth;
