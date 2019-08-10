import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebarItem/sidebarItem";

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }

  newNoteBtnClick = () => {
    console.log("New Note Btn Clicked");
    this.setState({
      addingNote: !this.state.addingNote,
      title: null
    });
  };

  updateTitle = text => {
    console.log("here is the text", text);
    this.setState({ title: text });
  };

  newNote = () => {
    console.log(this.state);
  };

  selectNote = () => {
    console.log("select note");
  };

  deleteNote = () => {
    console.log("delete note");
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Enter Note Title"
                onKeyUp={e => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Submit Note
              </Button>
            </div>
          ) : null}

          <List>
            {notes.map(note => {
              return (
                <div key={note.id}>
                  <SidebarItem
                    note={note}
                    index={note.id}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}
                  />
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <div>Add a Note!</div>;
    }
  }
}

export default withStyles(styles)(SideBar);
