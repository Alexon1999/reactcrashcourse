import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

// * Class based component
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Play Fortnite',
        completed: false,
      },
      {
        id: 3,
        title: 'Learn React framework',
        completed: false,
      },
    ],
  };

  render() {
    console.log(this.state.todos);
    return (
      // * tout ce qui est dans renders , retourne JSX  (Html markup in JavaScript)
      <div className='App'>
        <h1>Welcome to React</h1>
        {/* props : proprieté , on va le passer dans Todos comme un Html attribut*/}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

// * function component
// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'>
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
