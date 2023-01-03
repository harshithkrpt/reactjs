import React from "react";

class SearchBar extends React.Component {
    state = { videoInput: '' };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.videoInput);
    };

    render() {
        return <div className="search-bar ui segment container" style={{ marginTop: "10px" }}>
            <form className="ui form" onSubmit={this.onFormSubmit}> 
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.videoInput} onChange={(e) => this.setState({ videoInput: e.target.value })} />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;