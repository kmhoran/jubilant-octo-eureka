import FeedJson from '../Feed/FeedJson';

class JsonProvider {
    Json = null;
    constructor() {
        this.Json = _buildJson();
    }

    getJson = () => {
        var result = this.Json;
        return result;
    }

    toggleIsOnboarded = () => {
        if(this.Json && this.Json.app.isOnboarded !== null){
            this.Json.app.isOnboarded = !this.Json.app.isOnboarded;
        }
    }
}

function _buildJson() {
    var app = AppJson();
    var feed = FeedJson();

    return {
        app: app,
        feed: feed
    }
};

const AppJson = () => {
    return {
        isOnboarded: true
    };
}

export default JsonProvider;