import React from "react";
import { youtube } from "../apis/youtube";
import SearchBar from './SearchBar';
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] })

    };


    componentDidMount() {
        this.onTermSubmit('anushka shetty')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (<div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">                    
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default App;