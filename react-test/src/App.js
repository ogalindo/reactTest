import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './section/Movies'
import Series from './section/Series'
import Favorites from './section/Favorites'
import Menu from './section/Menu'
import './assets/styles.scss'

function viewSection (option) {
  switch ( option ) {
    case 1:
      return <Movies></Movies>
    case 2:
      return <Series></Series>
    case 3:
      return <Series></Series>
  }

}

class App extends Component {
  constructor () {
    super()
    this.state = {
      view: 1
    }
  }
  render() {  
    return (
      <div>
        <header>
          <div>Logo</div>
          <Menu></Menu>
        </header>
        <div>
          {viewSection(this.state.view)}
        </div>
      </div>
    );
  }
}

export default App;
