import React, {Component} from "react";
import API from "../utils/API";

class Home extends Component {

  // state = {
  //   articles: [],
  //   q: "",
  //   begin_date: "",
  //   end_date: ""
  // }

  // handleOnChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // articleSearch = event => {
  //   event.preventDefault();
  //   API.nytSearch({
  //     q: this.state.q
  //   }).then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       articles: res.data.response.docs,
  //       q: ""
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  // saveArticle = id => {
  //   const savedArticle = this.state.articles.find(article => (article._id === id));

  //   console.log(savedArticle);
  //   API.articleSave({
  //     title: savedArticle.headline.main,
  //     url: savedArticle.web_url,
  //     date: savedArticle.pub_date || ""
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Isabella Health</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;