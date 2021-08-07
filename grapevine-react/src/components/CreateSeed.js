import React, { Component } from 'react'
import axios  from 'axios'

export default class CreateSeed extends Component {

    state = {
        newSeed: {
            seed: '',
            created_at: ''
        }
    }

    chaangeHandler = (e) => {
        const copyNewSeed = { ...this.state.newSeed }
        copyNewSeed[e.target.name] = e.target.value
        this.setState({ newSeed: copyNewSeed })
    }

    newSeed = (e) => {
        e.preventDefault()
        // eslint-disable-next-line no-lone-blocks
        {
            axios.post("api/grapevine", {
                seed: this.state.newSeed.seed,
                created_at: this.state.newSeed.created_at
            })
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.newSeed}>
                    <label>
                        New Grape: 
                        <input id="seed" type="text" value={this.state.newSeed.seed} onChange={this.chaangeHandler} name="seed"/>
                    </label>
                    <label>
                        Created At:
                        <input id="created at" type="text" value={this.state.newSeed.created_at} onChange={this.chaangeHandler} name="created_at"/>
                    </label>
                    <button onClick={this.newSeed}> Sumbit </button>
                </form>
            </div>
        )
    }
}