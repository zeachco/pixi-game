import * as PIXI from 'pixi.js'
import CatImage from './images/cat.png'

export const senario1 = ({renderer, stage}) => {
    renderer.autoResize = true
    matchWindowSize();
    window.addEventListener('resize', matchWindowSize);
    renderer.backgroundColor = 0x061639

    // createTexture(CatImage, 'CatImage') var sprite = PIXI     .Sprite
    // .fromImage("CatImage");

    const catUrl = '/static/media/cat.78bc2f71.png'
    var texture = PIXI
        .Texture
        .fromImage(catUrl);

    // create a new Sprite using the texture
    var sprite = new PIXI.Sprite(texture);

    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;

    // move the sprite to the center of the screen
    sprite.position.x = 200;
    sprite.position.y = 150;

    stage.addChild(sprite);

    animate();
    function animate() {
        requestAnimationFrame(animate);

        // just for fun, let's rotate mr rabbit a little
        sprite.rotation += 0.1;

        // render the container
        renderer.render(stage);
    }

    function createTexture(fromSrc, imageId) {
        var image = new Image()
        image.src = fromSrc
        var myBaseTexture = new PIXI.BaseTexture(image)
        const texture = new PIXI.Texture(myBaseTexture, imageId)
        PIXI
            .Texture
            .addTextureToCache(texture, imageId)
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