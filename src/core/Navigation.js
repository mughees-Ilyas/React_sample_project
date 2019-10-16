// export a navigation component (use react-router-dom)
import React from "react";
import { colors } from "../theme/colors";
import { rem } from "polished";
import { NavLink } from "react-router-dom";
import RequestPage from "../pages/RequestPage";
import HomePage from "../pages/HomePage";
import ManagerPage from "../pages/ManagerPage";
import { Route, Switch } from "react-router-dom";

import styled from "styled-components";
import { Heading } from "../styled/Heading";
import {getData} from "./Redux/action/simpleAction";
import {connect} from "react-redux";

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: ${rem(12)};
  box-sizing: border-box;
  color: ${colors.primary};
  font-size: ${rem(12)};

  &.active {
    background-color: ${colors.primary};
    color: ${colors.base};
  }

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.base};
  }
`;

const NavHeading = styled(NavItem)`
  color: ${colors.secondary};
  margin-right: auto;
  font-family: "avenir";
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

function Navigation({dispatch}) {
    dispatch(getData());
  return (
      <div>
    <NavBar>
        <NavHeading to="/" exact activeClassName="active">
            DATA GATE
        </NavHeading>
      <NavItem to="/review" exact activeClassName="active">
        Review
      </NavItem>
      <NavItem to="/Request" exact activeClassName="active">
        Request
      </NavItem>
      <NavItem to="/manager" exact activeClassName="active">
        Manager
      </NavItem>
    </NavBar>
          <Container>
              <Content>
                  <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/Request" component={RequestPage} />
                      <Route path="/Manager" component={ManagerPage} />
                      <Route render={() => <Heading>404 Page not found</Heading>} />
                  </Switch>
              </Content>
          </Container>
      </div>
  );
}
const mapStateToProps = (state, ownProps) => ({...ownProps, ...state.simpleReducer});

export default connect(mapStateToProps)(Navigation);