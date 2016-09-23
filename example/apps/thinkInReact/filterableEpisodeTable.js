/**
 * Created by jhyu on 16-9-16.
 */

// ~ http://tagtree.tv/thinking-in-react

import React from 'react';
import $ from 'jquery';
//import boo;

var EpisodeRow = React.createClass({
    getInitialState: function() {
        return {
            viewed: false
        };
    },
    handleClick: function(){
        this.setState({viewed: true});
    },
    render: function() {
        return (
            <tr>
                <td>{this.props.episode.title}</td>
                <td><a  onClick={this.handleClick}>view {this.state.viewed ? '(viewed)' : ''}</a></td>
            </tr>
        );
    }
});

var EpisodeTable = React.createClass({
    render: function() {
        var props = this.props;
        var rows = props.episodes
            .filter(function(episode){
                return episode.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .map(function(episode){
                return <EpisodeRow key={episode.title} episode={episode} />;
            });

        return (
            <div className="row spacer">
                <div className="col-lg-4 col-lg-offset-4">
                    <table width="100%">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Link</th>
                        </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var SearchBar = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            //this.refs.filterTextInput.getDOMNode().value
            this.refs.filterTextInput.value
        ); // .bind(this)
    },
    render: function() {
        return (
            <div className="row ">
                <div className="col-lg-4 col-lg-offset-4">
                    <form onSubmit={this.handleSubmit}>
                        <input ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange} type="search" className="form-control" placeholder="Search for episode" />
                    </form>
                </div>
            </div>
        );
    }
});

var FilterableEpisodeTable = React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },

    handleUserInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },

    render: function() {
        return (
            <div className="spacer">
                <SearchBar onUserInput={this.handleUserInput} filterText={this.state.filterText} />
                <EpisodeTable filterText={this.state.filterText} episodes={this.props.episodes} />
            </div>
        );
    }
});

var episodes = [{
    title : "Angular with Yeoman"
},{
    title : "Using D3 with Rickshaw and Angular"
},{
    title : "Canvas with paper.js"
},{
    title : "Express.js middleware"
}
];

export default class FilterableEpisodeTableDemo extends React.Component {
    render() {
        return (
            <FilterableEpisodeTable episodes={episodes} />
        );
    }
};

//export default {
//    render: function() {
//        return (
//            <FilterableEpisodeTable episodes={episodes} />
//        );
//    }
//};

//export default React.createClass({
//    render: function() {
//        return (
//            <FilterableEpisodeTable episodes={episodes} />
//        );
//    }
//});
