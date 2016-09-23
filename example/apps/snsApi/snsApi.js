/**
 * Created by cup on 23/09/2016.
 */

import React from 'react';
import $ from 'jquery';
import {
    Cells,
    Cell,
    CellsTitle,
    CellsTips,
    CellHeader,
    CellBody,
    CellFooter
} from '../../../src/components/cell/index';
//import * as WCell from '../../../src/components/cell/index';


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

//export default className FilterableEpisodeTableDemo extends React.Component {
//    render() {
//        return (
//            <FilterableEpisodeTable episodes={episodes} />
//        );
//    }
//};


//------------------------------

let SectionM = React.createClass({
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
            <section>
                <div className="weui_cells_title">商户名称</div>
                <div className="weui_cells weui_cells_access">
                    <div className="weui_cell">
                        <input className="weui_input" placeholder="格瓦拉生活科技有限公司"/>
                    </div>
                </div>
            </section>
        )
    }
});

let SectionM2 = React.createClass({
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
            <section>
                <CellsTitle> 商户名称 </CellsTitle>

                <Cells className="weui_cells_access">
                    <Cell>
                        <input className="weui_input" placeholder="格瓦拉生活科技有限公司"/>
                    </Cell>
                </Cells>
            </section>
        )
    }
});



export default class SnsApiDemo extends React.Component {
    render() {
        return (
            <div>
                <SectionM episodes={episodes} />
                <SectionM2 episodes={episodes} />
            </div>
        );
    }
};

