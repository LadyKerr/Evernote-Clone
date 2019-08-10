import React from "react";
import SideBar from "./sidebar/sidebar";
import Editor from "./editor/editor";
import "./App.css";

const firebase = require("firebase");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: null,
      selectedNoteIndex: null,
      selectedNote: null
    };
  }

  deleteNote = (note) => {

  }

  selectNote = () => {

  }

  newNote = () => {

  }


  render() {
    return (
      <div className="app-container">
        <SideBar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        <Editor />
      </div>
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes") //name of the collection/table
      .onSnapshot(serverUpdate => {
        //automatically gets called when nites collection is updated in firebase
        //docs is a prop of the serverUpdate object being passed in the function
        const notes = serverUpdate.docs.map(doc => {
          const data = doc.data(); //function which grabs data from doc
          data["id"] = doc.id;
          return data; //now we have an array of all the notes
        });
        console.log(notes);
        this.setState({ notes: notes }); //resetting state to the array of notes we just grabbed
      });
  };
}

export default App;
