import React, { Component } from "react";

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };

    this.handleTitleCharacter = this.handleTitleCharacter.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleTitleCharacter(e) {
    if (e.target.value.length <= 50) {
      this.setState({ title: e.target.value });
    }
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const newNote = {
      id: new Date().getTime().toString(),
      title: this.state.title,
      body: this.state.description,
      createdAt: new Date(),
      archived: false,
    };

    console.log(newNote);

    this.props.onAddNote(newNote);

    this.setState({
      title: "",
      description: "",
    });
  }

  render() {
    const character = 50 - this.state.title.length;

    return (
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat catatan</h2>
          <p className="note-input__title__char-limit">
            Sisa karakter: {character}
          </p>
          <form onSubmit={this.handleSubmitForm}>
            <input
              type="text"
              name="title"
              placeholder="Ini adalah judul ..."
              className="note-input__title"
              value={this.state.title}
              onChange={this.handleTitleCharacter}
            />
            <textarea
              name="description"
              placeholder="Tuliskan catatanmu di sini ..."
              className="note-input__body"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <button type="submit">Buat</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteInput;
