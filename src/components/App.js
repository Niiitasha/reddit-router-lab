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
      <Listview post= {post} key= {post.thumbnail} />
      </div>
    ));

    return(
      <Router>
     <div className = "App">
     <h1>Reddit</h1>

     <Link to="/listview">List</Link>{' '}
     <Link to="/gridview">Grid</Link>

    </div>

     <Switch>
       <Route path="/listview" component= "Listview" />
        {listStyle}

      <Route path="/gridview" component= "Gridview" />
        {gridStyle}

     </Switch>
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
