import React, { Component } from 'react';
import './post.css';


class Post extends Component {






  render() {
    let item = this.props.item
    return (

      <div className="post">
           {/*<div id="id">{this.props.item.id}I'm iron man</div> SE SCRIVIAMO SOLO ITEM FUNZIONA 
           PERCHE' LET ITEM è UGUALE A THIS.PROPS.ITEM*/}

        <div id='title'>{item.title}I'M IRON MAN</div>
        <div id='body'>{item.body}Tony Stark: "I'm playboy philanthropist quote!"</div>

        </div>

    )
  }
}
export default Post;