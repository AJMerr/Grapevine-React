import React, { Component } from 'react'
import axios  from 'axios'

export default class SingleSeed extends Component {

    constructor(props){
        super(props)
        this.state = {
            _id: '',
            seed: '',
            created_at: '',
            __v: ''
        }
    }

    componentDidMount(){
        this.fetchSingleSeed()
    }

    fetchSingleSeed = async () => {
        try {
            const res = await axios.get(`/api/grapevine/${this.props.match.params.id}`)
            this.setState({ 
                _id: res.data._id ,
                seed: res.data.seed,
                created_at: res.data.created_at,
                __v: res.data.__v
            })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    onDelete = async () => {
        try {
            const res = await axios.delete(`/api/grapevine/${this.props.match.params.id}`)
            res.this.props.history.push("/")
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    render(){
        return(
            <div className="messages">
                <ul>
                    <li> {this.state.seed} </li>
                    <button onClick={this.onDelete.bind(this)}>Delete</button>
                </ul>
            </div>
        )
    }
}