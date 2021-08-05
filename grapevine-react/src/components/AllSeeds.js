import React, { Component } from 'react'
import axios  from 'axios'

export default class AllSeeds extends Component {

    constructor(){
        super()
        this.state = {
            allSeeds: []
        }
    }

    componentDidMount() {
        this.fetchSeeds()
    }
    
    fetchSeeds = async () => {
        try {
            const res = await axios.get("api/grapevine/")
            this.setState({ allSeeds: res.data })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    onDelete = async () => {
        try {
            const res = await axios.delete(`api/grapevine/${this.props.match.params.id}`)
            this.setState({ allSeeds: res.data })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    render() {
        const plantedSeed = this.state.allSeeds.map((seeds, i) =>{
            return(
                <ul key={seeds._id} >
                <li className="messages">
                    {seeds.seed}
                </li>
                <button onClick={this.onDelete.bind(this)}>Delete</button>
                </ul>
            )
        })
        return(
            <div>
                <header>Grape<span className= "v">vine</span> </header> 
                        {plantedSeed}
            </div>
        )
    }
}