
import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends Component {
    state = {
        gifData: []
    }
    
    url = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=W574jIKMOPll6ysAz6X2m42FQX6bNqTg&rating=g'

    componentDidMount(){
        fetch(this.url)
        .then(resp => resp.json())
        .then(gifData => this.setState ({gifData: gifData.data.slice(0,3)}))
    }

    handleSubmit = (event, input) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=W574jIKMOPll6ysAz6X2m42FQX6bNqTg&rating=g`)
        .then(resp => resp.json())
        .then(gifData => this.setState({gifData: gifData.data.slice(0,3)}))
        event.target.reset()
    }
    render(){
        return(
            <div>
            <GifSearch handleSubmit={this.handleSubmit} />
            <GifList gifData={this.state.gifData}/>        
            </div>
        )
    }

}

export default GifListContainer
