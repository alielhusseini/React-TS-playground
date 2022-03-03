import { Component } from "react";
import { Button } from "../../common";
import { ICounterState, ICounterProp } from "./Counter.types";

export class Counter extends Component<ICounterProp, ICounterState> { // if no props ==> empty object | if no state ==> just insert the proptype

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                {this.props.message} - {this.state.count} - <Button title="Increment" handleClick={this.handleClick} />
            </div>
        )
    }
}