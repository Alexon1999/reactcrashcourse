import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Title from './components/Title';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import About from './components/pages/About';
import Axios from 'axios';

// * Class based component
class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Take out the trash',
      //   completed: false,
      // },
      // {
      //   id: 2,
      //   title: 'Play Fortnite',
      //   completed: false,
      // },
      // {
      //   id: 3,
      //   title: 'Learn React framework',
      //   completed: false,
      // },
    ],
  };

  // + HTTP request
  componentDidMount() {
    //* Axios : ajax http library
    Axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=15'
    ).then((res) => this.setState({ todos: res.data }));

    //* avec fetch
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((result) => console.log(result));
  }

  //* Async / Await
  // async componentDidMount() {
  //   const response = await fetch(
  //     'https://jsonplaceholder.typicode.com/todos?_limit=15'
  //   );
  //   const data = await response.json();

  //   return this.setState({ todos: data });
  // }

  // + Toggle complete
  finishTask = (id) => {
    // * Pas bonne idée , utilise setstate and map
    // this.state.todos.forEach((todo) => {
    //   if (todo.id === id) {
    //     todo.completed = !todo.completed;
    //   }
    // });

    // * setstate and map
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // !todo.completed : contraire de completed , à chaque fois qu'on check
          todo.completed = !todo.completed;
        }
        // * on retourne ce todo pour le mettre à jour dans le tableau Todos dans state
        return todo;
      }),
    });
  };

  // + Delete todo
  delTodo = (id) => {
    //* on retourne tt ce qui ne correspond pas au id dans le parametre
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });

    //* on efface dans le server et dans UI
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
  };

  // + Add todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: 4,
    //   title,
    //   completed: false,
    // };
    // this.setState({ todos: [...this.state.todos , newTodo] })

    // add todo to Api and UI
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    console.log(this.state.todos);

    return (
      // * tout ce qui est dans renders , retourne JSX  (Html markup in JavaScript)
      <Router>
        <div className='App'>
          <h1
            style={{ textAlign: 'center', background: '#555', color: '#fff' }}>
            Welcome to React
          </h1>
          <div className='container'>
            <Header />
            <Title />

            {/* Landing page '/' */}
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  {/* props : proprieté , on va le passer dans Todos comme un Html attribut*/}
                  <Todos
                    todos={this.state.todos}
                    finishTask={this.finishTask}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            {/* About page */}
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
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

//! examples async

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { data: [] };
//   }

//   async componentDidMount() {
//     const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
//     const json = await response.json();
//     this.setState({ data: json });
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.data.map(el => (
//             <li>
//               {el.name}: {el.price_usd}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// ReactDOM.render(<App />, document.getElementById("app"));
