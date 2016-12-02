import * as PIXI from 'pixi.js'
import CatImage from './images/triangle.png'

export const senario1 = ({renderer, stage}) => {
    renderer.autoResize = true

    // matchWindowSize(); window.addEventListener('resize', matchWindowSize);

    renderer.backgroundColor = 0x061639

    var sprite = PIXI
        .Sprite
        .fromImage(CatImage);

    stage.addChild(sprite);

    function game() {
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        sprite.position.x = renderer.width / 2;
        sprite.position.y = renderer.height / 2;
        sprite.rotation += 0.1;
    }

    animate();
    function animate() {
        requestAnimationFrame(animate);
        game()
        // just for fun, let's rotate mr rabbit a little render the container
        renderer.render(stage);
    }

    // function matchWindowSize() {
    //     renderer.view.style.cssText = `
    // position: absolute;
    // display: block;
    // left: 0;
    // top: 0;
    // border: none;
    // `
    //     renderer.resize(window.innerWidth, window.innerHeight);
    // }
};