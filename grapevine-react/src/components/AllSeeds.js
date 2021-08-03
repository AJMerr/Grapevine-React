import React, { Component } from 'react'
import axios  from 'axios'
import "./styles.css"

export default class AllSeeds extends Component {

    state = {
        error: '',
        seed: '',
        allSeeds: []
    }

    componentDidMount() {
        this.fetchSeeds()
    }
    
    fetchSeeds = async () => {
        try {
            const res = await axios.get("api/grapevine/")
            this.setState({ allSeeds: res.data })
            console.log("Data has been reveieced")
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    render() {
        return (
            <div>
                <h1> All Seeds </h1>
                {this.state.allSeeds.map(allSeeds =>
                    <div class="messages"> {allSeeds.seed}  </div> 
                    )}
            </div>
        )
    }
}
