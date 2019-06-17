import React, { Component } from 'react';
import PoemListPage from './PoemListPage';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <a href='/'>Poem List</a>
        </nav>
        <header>
          <h1>William Setstatespear</h1>
        </header>
        <main>
          <PoemListPage />
        </main>
        <footer>
          <p>© William Setstatespear, 2019. All rights reserved.</p>
        </footer>
      </div>
    )
  }
}

export default App;