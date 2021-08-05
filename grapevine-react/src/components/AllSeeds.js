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

    render() {
        const plantedSeed = this.state.allSeeds.map((seeds, i) =>{
            return(
                <ul key={seeds._id} >
                    <li className="messages">
                        {seeds.seed}
                    </li>
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