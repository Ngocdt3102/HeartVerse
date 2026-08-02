import * as THREE from 'three'

export default class Camera {

    constructor() {

        this.camera = new THREE.PerspectiveCamera(

            45,

            window.innerWidth / window.innerHeight,

            0.1,

            100

        )

        this.camera.position.set(

            0,

            0,

            8

        )

    }

    resize() {

        this.camera.aspect =

            window.innerWidth /

            window.innerHeight

        this.camera.updateProjectionMatrix()

    }

}