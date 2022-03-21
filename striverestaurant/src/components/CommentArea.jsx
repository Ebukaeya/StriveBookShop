import { Component } from "react";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  /*    fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDc1NTUwOTAsImV4cCI6MTY0ODc2NDY5MH0.OPvEoJ2nO5FdsD5pSpSOzeYRmrB9h7kf5y6Qa6iBHik"
}
}) */

  state = {
    fetchedComment: false,
    comments: [],
  };

  fetchComments = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDc1NTUwOTAsImV4cCI6MTY0ODc2NDY5MH0.OPvEoJ2nO5FdsD5pSpSOzeYRmrB9h7kf5y6Qa6iBHik",
          },
        }
      );
      let comment = await res.json();
     /*  console.log(comment); */
      this.setState({ comments: comment, fetchedComment: true });
    } catch (error) {
      alert("sentwent wrong");
    }
  };

  deleteComments = async (id,event) => {
    console.log("delete trigger");
    event.preventDefault()
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDc1NTUwOTAsImV4cCI6MTY0ODc2NDY5MH0.OPvEoJ2nO5FdsD5pSpSOzeYRmrB9h7kf5y6Qa6iBHik",
          },
          method: "DELETE",
        }
      );
      if (res.ok) {
        
      }
    } catch (error) {
      alert("couldnt delete, try again");
    }
  };

  componentDidMount = () => {
    console.log("monted");
    this.fetchComments();
  };

  render() {
    return (
      <>
        <div className="comment">
          <div>
            {" "}
            <p>
              <strong>Comments</strong>
            </p>
          </div>
          <div>
            {this.state.comments.length === 0 ? (
              <div className="Nocomment">
                {" "}
                <p>No comment to show</p>
                <p>Add comment</p>
              </div>
            ) : (
              <ul>
                {this.state.comments.map((e) => (
                  <li key={e._id}>
                    <span className="listComment">
                      {e.comment}{" "}
                      <button
                        onClick={(event) => {
                          this.deleteComments(e._id,event);
                        }}
                      >
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
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button>Add Comment</button>
          </div>

          {!this.state.fetchedComment && (
            <span className="spinner">
              <Spinner animation="border" variant="primary" />
            </span>
          )}
        </div>
      </>
    );
  }
}

export default CommentArea;
