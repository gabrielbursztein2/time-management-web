import React from 'react';
import { func, number, object } from 'prop-types';
import { isUserManager, isAdminUser } from 'utils/helpers';
import { Container, Button } from './styles';

const TopBar = ({ changeTab, tab, openSettingsModal, user, logout }) => (
  <Container>
    <div>
      <Button selected={tab == 0} onClick={() => changeTab(0)}>
        Time
      </Button>
      {(isUserManager(user) || isAdminUser(user)) && (
        <Button selected={tab == 1} onClick={() => changeTab(1)}>
          Users
        </Button>
      )}
      {isAdminUser(user) && (
        <Button selected={tab == 2} onClick={() => changeTab(2)}>
          All Time Entries
        </Button>
      )}
    </div>
    <div>
      <Button className="settings" onClick={openSettingsModal}>
        Settings
      </Button>
      <Button onClick={logout}>Logout</Button>
    </div>
  </Container>
);

TopBar.propTypes = {
  changeTab: func.isRequired,
  tab: number.isRequired,
  openSettingsModal: func.isRequired,
  user: object.isRequired,
  logout: func.isRequired
};

export default TopBar;
