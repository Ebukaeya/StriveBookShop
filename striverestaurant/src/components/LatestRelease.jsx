import myData from "../data";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";
import CommntSection from "./CommentSection"


let data = myData;

class LatestRelease extends Component {
  state = {
    img:"",
    clickedBookedID :"",
    fliterValue: "",
  };

  updateState = (bookID,img)=>{
      this.setState({
        ...this.state,
        clickedBookedID:bookID,
        img:img
      })
  }

  filtere = (e) => {
    this.setState({...this.state, fliterValue: e.target.value });
  };

  render() {
    return (
      <>
        <div className="mt-3">
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
          
        <div className="divider">
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
                    passBookID ={this.updateState}
                  />
                ))}
            </Row>
            
            <CommntSection img={this.state.img} clickbookID = {this.state.clickedBookedID} />
        </div>

        </div>
      </>
    );
  }
}

export default LatestRelease;
