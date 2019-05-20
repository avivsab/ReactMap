import React, {Component} from 'react';
import NavComponent from './components/Nav';
import './App.css';

class App extends Component {
//   constructor(props){
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//   }
// }
  
// toggle() {
//   this.setState({
//     isOpen: !this.state.isOpen
//   });
// }
  render() {
    return (
      <div className="App">
       <NavComponent/>
      </div>
    );
  }
}
  

export default App;
