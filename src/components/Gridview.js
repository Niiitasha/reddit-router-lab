import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gridview extends Component {

render(){

return(
  <div className = "Grid" >
    <div className = "BlogItem">
    <a className="Article" href={this.props.post.url}>README</a>
   </div>
  </div>


);
}
}

function mapStateToProps (state){
return {
  posts: state.posts
}
}

export default connect(mapStateToProps)(Gridview);
