import * as PIXI from 'pixi.js'
import CatImage from './images/cat.png'

export const senario1 = ({renderer, stage}) => {
    renderer.autoResize = true
    matchWindowSize()
    window.addEventListener('resize', matchWindowSize);
    renderer.backgroundColor = 0x061639

    createTexture(CatImage, 'CatImage')
    var coolTexture = PIXI
        .Sprite
        .fromImage("CatImage");

    renderer.render(stage)

    function createTexture(fromSrc, imageId) {
        var image = new Image()
        image.src = fromSrc
        var myBaseTexture = new PIXI.BaseTexture(image)
        const texture = new PIXI.Texture(myBaseTexture, imageId)
        PIXI.Texture.addTextureToCache(texture, imageId)
        return texture
    }

    function matchWindowSize() {
        renderer.view.style.cssText = `
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    border: none;
    `
        renderer.resize(window.innerWidth, window.innerHeight);
    }
};