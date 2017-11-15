import React, { Component } from 'react';
import { connect } from 'react-redux';

class Listview extends Component {

render(){

return(
<div>
  <div className = "List">

     <div className = "BlogItem">
     <a className="Article" href={this.props.post.url}>README</a>
    </div>
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

export default connect(mapStateToProps)(Listview);
