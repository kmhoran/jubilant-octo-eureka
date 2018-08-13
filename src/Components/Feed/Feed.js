import React from 'react';

import Button from '@material-ui/core/Button';

import Loading from '../Shared/Loading';

import JsonProvider from '../Shared/JsonProvider';

class Feed extends React.Component {

    provider = null;
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            app: props.app,
            items: null
        }
    }

    componentDidMount() {
        this.provider = new JsonProvider();
        this.refreshState();
    }

    refreshState = () => {
        const json = this.provider.getJson();
        this.setState({
            isLoaded: true,
            app: json.app,
            items: json.feed
        });
    }

    // toggleIsOnboarded = () => {
    //     this.provider.toggleIsOnboarded();
    //     this.refreshState();
    // }



    notOnboardedWarning = () => {
        if(!this.props.app.isOnboarded)
            return(<h2>Not Onboarded!</h2>);
        else{
            return(<h2>Onboarded successfully!</h2>);
        }
    }



    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (<h1>There shouldn't be any errors</h1>);
        } else if (!isLoaded) {
            return (<Loading />);
        }
        return (
            <div>
                <h1>This is the Feed page!</h1>
                <h3>{items.data}</h3>
                <Button onClick={this.props.methods.toggleIsOnboarded}>Click</Button>
                {this.notOnboardedWarning()}
            </div>
        );
    }
}

export default Feed;