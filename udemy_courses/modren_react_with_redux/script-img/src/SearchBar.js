import React from "react";

class SearchBar extends React.Component {
    state = { input: '' }

    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e)=>{e.preventDefault(); this.props.onSubmitFunc(this.state.input) }} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.input} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;