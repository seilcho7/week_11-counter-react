import React from 'react';

class BounceCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    componentDidMount() {
        let direction = 1;
        setInterval(() => {
            if (direction === 1) {
                this._incrementNumber()
            } if (this.state.number === 101) {
                direction = 0;
            }
            if (direction === 0) {
                this._decrementNumber()
            } if (this.state.number === -101) {
                direction = 1;
            }
        }, 100);
    }

    render () {
        return (
            <h1>{this.state.number}</h1>
        );
    }

    _incrementNumber = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    _decrementNumber = () => {
        this.setState({
            number: this.state.number - 1
        });
    }


}


export default BounceCounter;