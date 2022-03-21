import { Component } from "react";
import { Spinner } from "react-bootstrap";

class CommentArea2 extends Component {
  state = {
    id: "",
    loading: true,
    comment: [],
  };

  componentDidUpdate = (prevprops, prevstate) => {
    if (prevprops.bookID !== this.props.bookID) {
      this.setState({
        ...this.state,
        id: this.props.bookID,
      });
      this.fetchBookcomment();
    }
  };

  fetchBookcomment = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.state.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDc1NTUwOTAsImV4cCI6MTY0ODc2NDY5MH0.OPvEoJ2nO5FdsD5pSpSOzeYRmrB9h7kf5y6Qa6iBHik",
          },
        }
      );
      let comment = await res.json();
      console.log(comment);
      this.setState({
        ...this.state,
        comment: comment,
        loading:false     });
    } catch (error) {
      alert("couldnt delete, try again");
    }
  };

  render() {
    return (
      <>
        <div className="commetnwrap2">
          <p>
            Comments for: <strong>{this.state.id}</strong>
          </p>
       <ul>
            {this.state.comment.length && !this.state.loading ? (
              this.state.comment.map((comment) => 
              
                
             <li>{comment.comment}</li>
              
              )
            ) : (
              <div>No comment to show</div>
            )}

            {this.state.loading && (
              <span className="spinner2">
                <Spinner animation="border" variant="primary" />
              </span>
            )}
          </ul>
          <div className="addCommetn2">
            <button style={{ display: this.state.loading && "none" }}>
              Add Comment
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CommentArea2;
