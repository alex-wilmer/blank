import React from 'react'
import Web3 from 'web3'

let web3 = new Web3(
  new Web3.providers.HttpProvider(`https://amini.by.ether.camp:8555/sandbox/685d91d1ca`)
)

class App extends React.Component {
  state = { result: {} }
  componentDidMount() {
    web3.eth.getBlock(48, (error, result) => {
      if (!error) this.setState({ result })
      else console.error(error)
    })
  }

  render() {
    return (
      <div>
        <h1>React App on github pages</h1>
        <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
      </div>
    )
  }
}

export default App
