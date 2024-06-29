// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// class App extends React.Component {
//   state = {
//     angle: 0
//   };

//   render() {
//     const { angle } = this.state;
//     const transform = `rotate(${-angle}deg)`;
//     return (
//       <div className="App">
//         <input
//           style={{ marginBottom: 50 }}
//           type="text"
//           placeholder="Enter rotation angle..."
//           onChange={e => {
//             if (e.target) {
//               this.setState({ angle: Number(e.target.value) });
//             }
//           }}
//         />
//         <h2 style={{ transform }}>I'm rotated to {angle} degrees</h2>
//         <div style={{ display: "flex", width: "200px" }}>
//           <hr style={{ width: "100px" }} />
//           <hr style={{ width: "100px", transform, transformOrigin: "left" }} />
//         </div>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


