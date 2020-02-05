import React from 'react';
import { connect } from "react-redux";
import { NewPostContainer, StyledButton, StyledTextArea, StyledTitle, ButtonPost, StyledTitlePost } from "./style";
import { createPost } from "../../Actions/post";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
    }
  }

  onSubmitForm = (event) => {
    const { text, title } = this.state;
    this.props.createPost(text, title);
    event.preventDefault();
  }

  onHandleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { text, title } = this.state
    return (
      <NewPostContainer onSubmit={this.onSubmitForm}>
        <StyledTitle>Postar no Feed</StyledTitle>
        <StyledTitlePost
          required
          label="Título do post..."
          margin="normal"
          name="title"
          value={title}
          variant="outlined"
          onChange={this.onHandleFieldChange}
        />
        <StyledTextArea
          required
          label="Digite seu texto..."
          multiline
          rowsMax="5"
          margin="normal"
          variant="outlined"
          name="text"
          value={text}
          onChange={this.onHandleFieldChange}
        />
        <StyledButton color="primary" variant="contained" type="submit">POSTAR</StyledButton>
      </NewPostContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (text, title) => { dispatch(createPost(text, title)) }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);