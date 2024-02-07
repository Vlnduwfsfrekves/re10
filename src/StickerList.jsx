import React, { Component } from 'react';
import Choice from './Choice';
import stickers from './stickers.json';
class StickerList extends Component{
    state={
        text:'',
        stickers:stickers
    }
    changeText=(textF)=>{
        this.setState({text:textF})
    }
    render(){
    return (
    <div>
    <h1>{this.state.text}</h1>
    <ul>
        {this.state.stickers.map((sticker, index) => (
        <li key={index}>
          <button onClick={()=>{this.changeText(sticker.label)}}>
          <Choice image={sticker.img} index={index} label={sticker.label} fun={this.changeText}/>
          </button>
        </li>
        ))}
    </ul>
    </div>
  )}
}

export default StickerList;