import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: "Default text",
        }
    }
    componentWillMount(){
        const self = this;
        (async function getFromApi() {
            let result = await fetch("api/hi");
            result = await result.text();
            console.log(result);
            self.setState(()=>({
                text: result,
            }));
        })();
    }

    render(){
        return <h1 className={css.text}>{this.state.text}</h1>
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));