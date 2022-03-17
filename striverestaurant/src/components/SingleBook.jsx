import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selectedMove: false,
  };

  handleClick = (e) => {
    this.state.selectedMove
      ? this.setState({ selectedMove: false })
      : this.setState({ selectedMove: true });
  };

  render() {
    return (
      <>
        <Col className="mb-5" key={this.props.asin} sm={12} md={4} lg={3}>
          <div
            onClick={(e) => {
              this.handleClick(e);
            }}
            key={this.props.asin}
            className={this.state.selectedMove ? "selected" : "cardWrapper"}
          >
            <div className="imageDiv">
              <img
                src={this.props.img}
                height="100%"
                width="100%"
                style={{ objectFit: "cover" }}
              ></img>
            </div>
            <div className="content">
              <div>
                <p>
                  <strong>Title</strong>
                </p>
                <p>
                  <strong>Price</strong>
                </p>
              </div>
              <div>
                <p className="title">{this.props.category}</p>
                <p>{this.props.price}</p>
              </div>
            </div>
            <div className="button">
              <button>Buy</button>
            </div>
          </div>
        </Col>
      </>
    );
  }
}

export default SingleBook;
