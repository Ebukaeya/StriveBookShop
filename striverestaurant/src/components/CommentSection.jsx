import { Component } from "react";
import CommentArea2 from "./CommentArea2";



class CommntSection extends Component{

    state = {
        selectedBook: false,
        idofSelected: "",
        img: ""
    }

  /*   componentDidMount = ()=>{
          this.props.clickbookID && this.setState({
              ...this.state,
              selectedBook:true,
              idofSelected:this.props.clickbookID
          }) 
    } */

    componentDidUpdate = (prevprops, prevstate)=>{



        if(prevprops.clickbookID !== this.props.clickbookID){
            this.setState({
                ...this.state,
                  selectedBook:true,
                  idofSelected:this.props.clickbookID
            })
        }
        
        

    }


    




    render (){
        return (

            <>

              <div>
              <div className="commentTitle">
                  <h5> <strong>Comment section</strong></h5>
              </div>
              <div className="ImageHolder">
                    <img src={this.props.img}></img>
              </div>
              
                <CommentArea2 bookID = {this.state.idofSelected}/>

              
              
              
           { !this.state.selectedBook && <div className="selectedBook2">
                  <div>
                      <p className="ml-5">To see a comment</p>
                      <p> <strong>Please select a book on the right</strong></p>
                  </div>
              </div>}
              </div>
            </>



        )
    }
}


export default CommntSection