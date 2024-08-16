import { Fragment, useState, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>[Thursday 18:10] Khushi Mehta
 
 Today's Update - [18/07/2024]
  
   1. Completing practice for section 7
   
   Tomorrow's agenda- [19/07/2024]
   
   Continuing with further React sections and its respective practices.
  
  
 [Thursday 18:10] Khushi Mehta
   Today's Update - [18/07/2024]
  
   Completing practice for section 7
   
   Tomorrow's agenda- [19/07/2024]
   
   Continuing with further React sections and its respective practices.
  
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;




