import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Container,
  makeStyles,
  Box
} from '@material-ui/core';
import Page from 'src/components/Page';
import usersService from 'src/services/usersService';
import Header from './Header';
import UsersTable from './UsersTable';
import useIsMountedRef from 'src/hooks/useIsMountedRef'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6)
  }
}));

function UsersListView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [usersCount, setUsersCount] = useState(0);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    usersService.listUsers()
      .then((res) => {
        if (isMountedRef.current) {
          setUsers(res);
          setUsersCount(res.length);
        }
      });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const testButtonClicked = () => {
    console.log('aaaaaaaaaaaa');
  };

  return (
    <Page
      className={classes.root}
      title="Users List"
    >
      <Container>
        <Header usersCount={usersCount} />

        <Box mt={3}>
          <UsersTable users={users} testButtonClicked={testButtonClicked} />
        </Box>
      </Container>
    </Page>
  );
}

export default UsersListView;
