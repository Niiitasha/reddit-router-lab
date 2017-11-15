import React, { Component } from 'react';
import Listview from "./Listview";
import Gridview from "./Gridview";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';


class App extends Component {
  render(){

    const listStyle = this.props.posts.map((post) => (
      <div className = "listS">
        <Listview post= {post} key= {post.title} />
      </div>
    ));

    const gridStyle = this.props.posts.map((post) => (
      <div className = "gridS">
      <Gridview post= {post} key= {post.thumbnail} />
      </div>
    ));

    return(

     <Router>
     <div className = "App">
     <h1>Rich Man's Reddit</h1>

     <Link to="/Listview">List</Link>{" "}
     <Link to="/Gridview">Grid</Link>



    <Switch>
       <Route path="/Listview" component= {listStyle} />
       <Route path="/Gridview" component= {gridStyle} />

     </Switch>
     </div>
     </Router>

    );
}
}

function mapStateToProps(state){
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App);
