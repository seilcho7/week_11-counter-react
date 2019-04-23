import React from 'react';

class BounceCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            count: props.countBy,
            lower: props.lowerLimit,
            upper: props.upperLimit
        };
    }

    componentDidMount() {
        let direction = 1;
        setInterval(() => {
            if (direction === 1) {
                this._incrementNumber()
                if (this.state.number > this.state.upper) {
                    direction = 0;
                }
            }
            if (direction === 0) {
                this._decrementNumber()
                if (this.state.number <= this.state.lower) {
                    direction = 1;
                }
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
            number: this.state.number + this.state.count
        });
    }

    _decrementNumber = () => {
        this.setState({
            number: this.state.number - this.state.count
        });
    }


}


export default BounceCounter;