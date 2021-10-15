import logo from './logo.svg';
import './App.css';
import Message from "./Message";
import React from "react";

// const messages = {title: "Dune", text: "The sandworms are eating us alive"}
// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//
//       <>
//       <h1>Hi</h1>
//       <h4>world</h4>
//           <Message title="Dune" text="The sandworms are eating us alive">
//               testing things
//           </Message>
//           <Message/>
//           {
//               [1,2,3,4].map(() => {
//           return <Message/>})
//           }
//       </>
//   );
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [{title: "Dune", text: "The sandworms are eating us alive"}]
        }
    }

    handleAddMessagesClick () {
        this.setState({
            messages: [{title: "Batman", text: "The Darkest Night Falls"}]
        })
    }

    render() {
        return (
            <>
                <h1>Hi</h1>
                <h4>world</h4>
                <button onClick={() => this.handleAddMessagesClick() }>Add Messages</button>
            {/*<Message title="Dune" text="The sandworms are eating us alive">*/}
                {/*testing things*/}
            {/*</Message>*/}
            {/*<Message/>*/}
            {
                this.state.messages.map((object) => {
                    return <Message title={object.title} text={object.text} />;
                })
                    // [1,2,3,4].map(() => {
                    // return <Message/>})
            }
            </>
        )
    }
}

export default App;
