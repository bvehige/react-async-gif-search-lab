import React, {Component} from 'react'

class GifSearch extends Component {
    state={
        input: ''
    }

    handleChange(event){
        this.setState({input: event.target.value})
    }

    render(){
        return(
        <div>
            <form onSubmit={event => this.props.handleSubmit(event, this.state.input)}>
                <label>Enter a search term:</label>
                <input type='text' onChange={event => this.handleChange(event)}/>
                <input type='submit' value='Find Gifs'/>
            </form>
        </div>
        )
    }
}

export default GifSearch