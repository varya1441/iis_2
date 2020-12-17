import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dishes : []
        }
    }

    render() {
        return(
            <div>
                <footer className="footer">
                    <span className="text-muted">Cancer footer!</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent