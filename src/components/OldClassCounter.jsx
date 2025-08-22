import { Component } from "react";

class OldClassCounter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            count2: 0
        }
        // this.timerId = null
        console.log('constructor')
    }
    componentDidMount(){
        console.log('componentDidMount')
        // this.timerId = setInterval(() => {
        //     console.log('hi')
        // }, 2000);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        // clearInterval(this.timerId)
    }
    deacreaseCount(){
        this.setState({count2 : this.state.count2 - 1})
    }
    render(){ 
        console.log('render')
        const {name} = this.props
        const {count, count2} = this.state
        return <>
            <h1 className="mt-4">{name}</h1>

            <div className="flex items-center gap-4 mt-2">
                <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                        onClick={()=> this.setState({count : count - 1})}>-</button>
                <h2>{count}</h2>
                <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                        onClick={()=> this.setState({count : count + 1})}>+</button>
            </div>

            <div className="flex items-center gap-4 mt-2">
                <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                        onClick={this.deacreaseCount.bind(this)}>-</button>
                <h2>{count2}</h2>
                <button className="bg-blue-600 text-white px-2 rounded-md cursor-pointer" 
                        onClick={function(){
                            this.setState({count2 : count2 + 1})
                        }.bind(this)}>+</button>
            </div>
        </>
    }
}

export default OldClassCounter