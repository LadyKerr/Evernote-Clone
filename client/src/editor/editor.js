import React from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: ""
    };
  }

  updateBody = async value => {
    await this.setState({ text: value });
    this.update();
  };
  update = debounce(() => {
    console.log("UPDATING DB");
    //waits for the user after 1.5 secs to stop typing before calling db
    // will update
  }, 1500);

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
