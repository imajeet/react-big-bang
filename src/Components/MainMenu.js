import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, Icon, Menu} from "semantic-ui-react";

import PropTypes from 'prop-types';

const MainMenu = (props) => {

  return (
    <div className="homeNavBarContainer">
      <Container>
        <Menu size='huge' inverted className="homeNavBar">
          <Link className={props.history.location.pathname == '/' || props.history.location.pathname == '/home'  ? "item active" : "item"} to="/home">Home</Link>
          <Link className={props.history.location.pathname == '/documentation' ? "item active" : "item"} to="documentation">Documentation</Link>
          <Link className={props.history.location.pathname == '/example' ? "item active" : "item"} to="example">API Example</Link>
          <Menu.Menu position='right'>
            <Menu.Item>
              <a href="https://alkanyx.com/" target="_blank"  rel="noopener noreferrer">
                <Button inverted color='green' style={{display:'inline-block'}} size='large'>Alkanyx</Button>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://github.com/theqdev/react-big-bang" target="_blank"  rel="noopener noreferrer">
                <Button inverted color='blue' size='large'><Icon name="github"></Icon>Github</Button>
              </a>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
};

MainMenu.propTypes = {
  history : PropTypes.object,
};

export default MainMenu;
