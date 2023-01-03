import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component {
  state = { images: [] };

  onSubmitFunc = (value) => {
    axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID gG-bG5-xXBmynUH93Dv6lj2yAHKTMP9N4PlQq9aKxUI'
      },
      params: { query: value }
    }).then((res) => {
      this.setState({images : res.data.results})
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmitFunc={this.onSubmitFunc} />

        
      </div>
    )
  }
}


// const App = () => {
//   const onSubmitFunc = (value) => {
//     axios.get('https://api.unsplash.com/search/photos', {
//       headers: {
//         Authorization: 'Client-ID gG-bG5-xXBmynUH93Dv6lj2yAHKTMP9N4PlQq9aKxUI'
//       },
//       params: { query: value }
//     }).then((res) => {
//       const resp = res.data.results
//     }).catch((err) => {
//       console.log(err)
//     })
//   }

//   return (
//     <div className="ui container" style={{ marginTop: '10px' }}>
//       <SearchBar onSubmitFunc={onSubmitFunc} />
//     </div>
//   )
// }


export default App;
