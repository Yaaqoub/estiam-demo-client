import React, {useState} from 'react';
import {
  makeStyles,
  Card,
  Box,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import UserModal from 'src/components/UserModal';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

function UsersTable({ className, users, testButtonClicked, ...rest }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    username: '',
    phone: '',
    companyName: ''
  });

  const handleUserProfile = (profile) => {
    setUserProfile({
      name: profile.name,
      username: profile.username,
      phone: profile.phone,
      companyName: profile.company.name
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Email
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users && users.map((user) => {
                return (
                  <TableRow
                    key={user.id}
                  >
                    <TableCell>
                      {user.name}
                    </TableCell>
                    <TableCell>
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="secondary"
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={() => handleUserProfile(user)}
                      >
                        Profile
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Box>

      <UserModal
        open={open}
        handleClose={handleClose}
        userProfile={userProfile}
      />
    </Card>
  );
}

UsersTable.prototype = {
  className: PropTypes.string,
  users: PropTypes.array,
  testButtonClicked: PropTypes.any,
};

UsersTable.defaultProps = {
  users: []
};

export default UsersTable;
