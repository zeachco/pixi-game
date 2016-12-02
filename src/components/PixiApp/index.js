import './style.css'
import React from 'react'
import * as PIXI from 'pixi.js'

const CONTAINER_ID = 'canvas'

export class PixiApp extends React.Component {
    componentDidMount() {
        this.renderer = PIXI.autoDetectRenderer(this.props.width, this.props.height)
        this.stage = new PIXI.Container();

        document
            .getElementById(CONTAINER_ID)
            .append(this.renderer.view)

        this.props.game(this)
    }

    render() {
        return (
            <div id={CONTAINER_ID}></div>
        )
    }
}
