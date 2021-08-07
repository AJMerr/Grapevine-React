import React, { Component } from 'react'
import axios  from 'axios'

export default class EditSeed extends Component {

    constructor(props){
        super(props)
        this.state = {
            _id: '',
            seed: '',
            created_at: '',
            __v: ''
        }

        this.changeHandler = this.changeHandler.bind(this)

    }

    componentDidMount(){
        this.fetchSeed()
    }
    
    fetchSeed = async () => {
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
            this.setState({ error: err.message })
            console.log(err)
        }
    }

    editSeed = async (newSeed) => {
        try {
            const res = await axios.request({
                method: 'put',
                url: `/api/grapevine/${this.state._id}`,
                data: newSeed
            })
            res.this.props.history.push(`/`)
        }
        catch (err) {
            this.setState({ error: err.message })
            console.log(err)
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newSeed = {
            seed: this.state.seed,
            created_at: this.state.created_at
        }
        this.editSeed(newSeed)
    }

    changeHandler = (e) => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
            <h1>Edit Seed</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>
                    Edit Message:
                    <input type="text" name="seed" value={this.state.seed} onChange={this.changeHandler} />
                    <input type="text" name="created_at" value={this.state.created_at} onChange={this.changeHandler} />
                </label>
                <input type="submit" value="Save" />
            </form>
            </div>
        )
    }
}

