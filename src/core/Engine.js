import Renderer from './Renderer'
import Scene from './Scene'
import Camera from './Camera'

export default class Engine {

    constructor() {

        this.scene = new Scene()

        this.camera = new Camera()

        this.renderer = new Renderer()

        this.animate = this.animate.bind(this)

        window.addEventListener(

            "resize",

            () => this.resize()

        )

    }

    start() {

        this.animate()

    }

    animate() {

        requestAnimationFrame(

            this.animate

        )

        this.renderer.render(

            this.scene.scene,

            this.camera.camera

        )

    }

    resize() {

        this.camera.resize()

        this.renderer.resize()

    }

}