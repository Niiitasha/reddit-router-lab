import React, { Component } from 'react';
import { connect } from 'react-redux';

class Listview extends Component {

render(){

return(
<div>
     <div className = "List">
     <img src={this.props.post.thumbnail} />
     <div className = "BlogItem">
     <h3 className ="Title">{this.props.post.title}</h3>
     <a className="Article" href={this.props.post.url}>Article</a>
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
