import React from 'react'
import * as PIXI from 'pixi.js'

export class PixiApp extends React.Component {
    componentDidMount() {

        this.renderer = PIXI.autoDetectRenderer(256, 256)
        this.stage = new PIXI.Container();

        document
            .getElementById('canvas')
            .append(this.renderer.view)

        this
            .renderer
            .render(this.stage);
    }

    render() {
        return (
            <div id="canvas">
                <h1>Game</h1>
            </div>
        )
    }
}
