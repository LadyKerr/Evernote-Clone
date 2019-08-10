import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebarItem/sidebarItem";

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <div>Hello from SideBar</div>;
  }
}

export default withStyles(styles)(SideBar);
