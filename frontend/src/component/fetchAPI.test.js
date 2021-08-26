// fetch API get data

const fetch = require("node-fetch");
// Defining async function
async function getapi() {
    
    // Storing response
    const response = await fetch("http://localhost:4000/students");
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        console.log(data)
        // do setState
        this.setState({
            students: data
          }, () => {
          console.log("state: "+this.state.students) // undefined
          })
    }
}
// Calling that async function
getapi();