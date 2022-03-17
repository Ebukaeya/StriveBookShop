import myData from "../data";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";

let data = myData;

class LatestRelease extends Component {
  state = {
    fliterValue: "",
  };

  filtere = (e) => {
    this.setState({ fliterValue: e.target.value });
  };

  render() {
    return (
      <>
        <Container className="mt-3">
          <div className="searchBar">
            {" "}
            <h5 className="mb-5">Latest Books</h5>
            <input
              placeholder="Search book"
              onChange={(e) => {
                this.filtere(e);
              }}
              value={this.state.fliterValue}
            />
          </div>
          <Row>
            {data
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.fliterValue)
              )
              .map((book) => (
                <SingleBook
                  key={book.asin}
                  asin={book.asin}
                  img={book.img}
                  category={book.title}
                  price={book.price}
                />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default LatestRelease;
