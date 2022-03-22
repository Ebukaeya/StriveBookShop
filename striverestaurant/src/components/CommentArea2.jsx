import { Component } from "react";
import { Spinner } from "react-bootstrap";
/* needs to be changed to cla */

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
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookID,
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
        loading: false,
      });
    } catch (error) {
      alert("couldnt delete, try again");
    }
  };

  render() {
    return (
      <>
        <div className="commetnwrap2">
          <p>
            Comments for: <strong>{this.props.bookID}</strong>
          </p>
          <ul>
            {this.state.comment.length && !this.state.loading ? (
              this.state.comment.map((comment) => (
                <li>
                  <p>{comment.comment}</p>{" "}
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </p>
                </li>
              ))
            ) : (
              <div className="nothingt">
                <strong>No comment to show</strong>
              </div>
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
