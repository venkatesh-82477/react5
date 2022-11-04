import './App.css'
import Hoc from './Hoc';
import React, { PureComponent } from 'react'


export default class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      count :0
    }
  }

  componentDidMount(){
    console.log('Rendering');
  }

  componentDidUpdate(){
    console.log('Re-rendering');
  }

  render() {
    
    return (
      <>
      <p><b>Pure Component :</b>When a class component extends React.PureComponent base class then React treated the component as Pure component. The major difference between React.Component class and React.PureComponent is the implementation of shouldComponentUpdate(). In React.Component shouldComponentUpdate() will always returns true on the other hand in React.PureComponent it will compare the current state and props with new state and props.</p>
      <h4>Example :</h4>
      <h3>Counter = {this.state.count} </h3>
      <button className='but1' onClick={()=>{this.setState({count:this.state.count +1})}} >Increment</button>
      <button className='but2' onClick={()=>{if (this.state.count !==0){
        this.setState({count:this.state.count -1})
      }else{
        this.setState({count:this.state.count})
      }
      }} >Decrement</button>
      <br></br><br></br>
      <hr></hr>
        <Hoc/>
      </>
    )
  }
}

