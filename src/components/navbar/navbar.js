import React from 'react';
import { Link } from 'react-router';
import {
  ResponsiveNavigation,
  Row,
  Column,
  TopBarTitle,
  TopBarLeft,
  TopBarRight,
  Menu,
  MenuItem
} from 'react-foundation';

export const Navbar = () => (
  <ResponsiveNavigation className="navbar">
    <Row>
      <Column large={12}>
        <TopBarTitle>
          <Link to="/">React + Foundation</Link>
        </TopBarTitle>
        <div>
          <TopBarLeft>
            <Menu>
              <MenuItem>
                <Link to="/">Components</Link>
              </MenuItem>
            </Menu>
          </TopBarLeft>
          <TopBarRight>
            <Menu>
              <MenuItem>
                <a href="//npmjs.org/package/react-foundation" target="_blank">NPM</a>
              </MenuItem>
              <MenuItem>
                <a href="//github.com/nordsoftware/react-foundation" target="_blank">GitHub</a>
              </MenuItem>
            </Menu>
          </TopBarRight>
        </div>
      </Column>
    </Row>
  </ResponsiveNavigation>
);
