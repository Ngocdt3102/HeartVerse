import * as THREE from 'three'

export default class Renderer {

    constructor() {

        this.renderer = new THREE.WebGLRenderer({

            antialias: true,
            alpha: true,
            powerPreference: "high-performance"

        })

        this.renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        )

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        )

        this.renderer.outputColorSpace = THREE.SRGBColorSpace

        document.body.appendChild(
            this.renderer.domElement
        )

    }

    render(scene, camera) {

        this.renderer.render(scene, camera)

    }

    resize() {

        this.renderer.setSize(

            window.innerWidth,

            window.innerHeight

        )

        this.renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        )

    }

}