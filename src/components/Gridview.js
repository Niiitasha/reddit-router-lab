import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gridview extends Component {

render(){

return(
<div>
  <div className = "Grid" >
    <img src ={this.props.posts.thumbnail} />
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
