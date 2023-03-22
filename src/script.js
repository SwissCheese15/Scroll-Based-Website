import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Scene
const scene = new THREE.Scene()

const parameters = {
    particlesColor: "black",
    materialColor: "gold",
    // bowlColor: "peru",
    innerFlowerRadius: 0.3,
    orbRadius: 0.8,
    bowlRadius: 1,
    soundMakerRadius: 0.18
}

// Textures ---------------------------------------------------------------
const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const gradientTexture = textureLoader.load("Textures/gradients/3.jpg")
gradientTexture.magFilter = THREE.NearestFilter

// Gold Textures
const goldColorTexture = textureLoader.load("/Textures/goldBall/goldColor.png")
const goldRoughnessTexture = textureLoader.load("/Textures/goldBall/goldRoughness.png")
const goldMetalnessTexture = textureLoader.load("/Textures/goldBall/goldMetalness.png")
const goldNormalTexture = textureLoader.load("/Textures/goldBall/goldNormal.png")
const brassColorTexture = textureLoader.load("/Textures/goldBall/brassColor.png")
goldColorTexture.minFilter = THREE.NearestFilter
goldColorTexture.generateMipmaps = false
goldRoughnessTexture.minFilter = THREE.NearestFilter
goldRoughnessTexture.generateMipmaps = false
goldMetalnessTexture.minFilter = THREE.NearestFilter
goldMetalnessTexture.generateMipmaps = false
goldNormalTexture.minFilter = THREE.NearestFilter
goldNormalTexture.generateMipmaps = false
brassColorTexture.minFilter = THREE.NearestFilter
brassColorTexture.generateMipmaps = false

// Sound Maker Textures
const woodColorTexture = textureLoader.load("/Textures/soundmaker/woodColor.png")
const feltColorTexture = textureLoader.load("/Textures/soundmaker/felt.png")
woodColorTexture.minFilter = THREE.NearestFilter
woodColorTexture.generateMipmaps = false
feltColorTexture.minFilter = THREE.NearestFilter
feltColorTexture.generateMipmaps = false

// orb textures
// environment Map texture import
// order is x,y,z, p/n like the following
const environmentMapTexture = cubeTextureLoader.load([
    "/textures/cubeMap/px.png",
    '/textures/cubeMap/nx.png',
    '/textures/cubeMap/py.png',
    '/textures/cubeMap/ny.png',
    '/textures/cubeMap/pz.png',
    '/textures/cubeMap/nz.png'
])


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Objects
const objectsDistance = 4

// Material
const material = new THREE.MeshStandardMaterial({
    color: parameters.materialColor,
    map: goldColorTexture,
    metalnessMap: goldMetalnessTexture,
    roughnessMap: goldRoughnessTexture,
    normalMap: goldNormalTexture,
})

const bowlMaterial = new THREE.MeshStandardMaterial({
    color: parameters.bowlColor,
    map: brassColorTexture,
    metalnessMap: goldMetalnessTexture,
    roughnessMap: goldRoughnessTexture,
    normalMap: goldNormalTexture,
    side: THREE.DoubleSide,
})

const handleMaterial = new THREE.MeshStandardMaterial({
    map: woodColorTexture,
    color: "beige",
})

const tipMaterial = new THREE.MeshStandardMaterial({
    map: feltColorTexture,
    color: "red"
})

// Flower of life ----------------------------------------------------------------------------

// Flower Geometry
const flowerGroup = new THREE.Group()
scene.add(flowerGroup)

const flowerDisplacement = Math.sqrt(
    (parameters.innerFlowerRadius * parameters.innerFlowerRadius) - ((parameters.innerFlowerRadius / 2) * (parameters.innerFlowerRadius / 2))
)

const innerFlowerGeometry = new THREE.TorusGeometry(parameters.innerFlowerRadius, 0.01, 16, 30)
const outer1FlowerGeometry = new THREE.TorusGeometry(parameters.innerFlowerRadius * 3, 0.010, 16, 50)
const outer2FlowerGeometry = new THREE.TorusGeometry((parameters.innerFlowerRadius * 3 + 0.08), 0.010, 16, 50)

// instanciating the outer rings
const outerRing1 = new THREE.Mesh(outer1FlowerGeometry, material)
const outerRing2 = new THREE.Mesh(outer2FlowerGeometry, material)

// instanciating the inner rings
const innerRing1 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing2 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing3 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing4 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing5 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing6 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing7 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing8 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing9 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing10 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing11 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing12 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing13 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing14 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing15 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing16 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing17 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing18 = new THREE.Mesh(innerFlowerGeometry, material)
const innerRing19 = new THREE.Mesh(innerFlowerGeometry, material)

// positioning the rings
// middle column
innerRing2.position.y = parameters.innerFlowerRadius * -2
innerRing3.position.y = parameters.innerFlowerRadius * 2
innerRing4.position.y = parameters.innerFlowerRadius * -1
innerRing5.position.y = parameters.innerFlowerRadius

// right column
innerRing6.position.y = parameters.innerFlowerRadius * 0.5
innerRing6.position.x = flowerDisplacement
innerRing7.position.y = parameters.innerFlowerRadius * -0.5
innerRing7.position.x = flowerDisplacement
innerRing8.position.y = parameters.innerFlowerRadius * 1.5
innerRing8.position.x = flowerDisplacement
innerRing9.position.y = parameters.innerFlowerRadius * -1.5
innerRing9.position.x = flowerDisplacement

// far right column
innerRing10.position.y = parameters.innerFlowerRadius * -1
innerRing11.position.y = parameters.innerFlowerRadius * 1
innerRing10.position.x = flowerDisplacement * 2
innerRing11.position.x = flowerDisplacement * 2
innerRing12.position.x = flowerDisplacement * 2

// left column
innerRing13.position.y = parameters.innerFlowerRadius * 0.5
innerRing13.position.x = - flowerDisplacement
innerRing14.position.y = parameters.innerFlowerRadius * -0.5
innerRing14.position.x = - flowerDisplacement
innerRing15.position.y = parameters.innerFlowerRadius * 1.5
innerRing15.position.x = - flowerDisplacement
innerRing16.position.y = parameters.innerFlowerRadius * -1.5
innerRing16.position.x = - flowerDisplacement

// far left column
innerRing17.position.y = parameters.innerFlowerRadius * -1
innerRing18.position.y = parameters.innerFlowerRadius * 1
innerRing17.position.x = - flowerDisplacement * 2
innerRing18.position.x = - flowerDisplacement * 2
innerRing19.position.x = - flowerDisplacement * 2

flowerGroup.add
(
    outerRing2,
    outerRing1,
    innerRing1,
    innerRing2,
    innerRing3,
    innerRing4,
    innerRing5,
    innerRing6,
    innerRing7,
    innerRing8,
    innerRing9,
    innerRing10,
    innerRing11,
    innerRing12,
    innerRing13,
    innerRing14,
    innerRing15,
    innerRing16,
    innerRing17,
    innerRing18,
    innerRing19,
)

// Orb -------------------------------------------------------------------------

const orbGeometry = new THREE.SphereGeometry(parameters.orbRadius, 64, 80)

const orbMaterial = new THREE.MeshStandardMaterial({
    envMap: environmentMapTexture
})
orbMaterial.metalness = 1
orbMaterial.roughness = 0

const orb = new THREE.Mesh(orbGeometry, orbMaterial)

// Bowl ------------------------------------------------------------------------------------------

const bowlGroup = new THREE.Group()
const soundMakerGroup = new THREE.Group()
const bowlSubGroup = new THREE.Group()


const bowlGeometry = new THREE.SphereGeometry(parameters.bowlRadius, 64, 80, 0, Math.PI);
const handleGeometry = new THREE.CylinderGeometry(parameters.soundMakerRadius, parameters.soundMakerRadius, parameters.soundMakerRadius * 5, 16)
const tipGeometry = new THREE.CylinderGeometry(parameters.soundMakerRadius + 0.0025, parameters.soundMakerRadius - 0.058, parameters.soundMakerRadius * 3, 16)
const handle = new THREE.Mesh(handleGeometry, handleMaterial)
handle.position.y += 0.7
const tip =  new THREE.Mesh(tipGeometry, tipMaterial)
const innerBowl = new THREE.Mesh(bowlGeometry, bowlMaterial)
const outerBowl = new THREE.Mesh(bowlGeometry, bowlMaterial)
const connection = new THREE.Mesh(
    new THREE.RingGeometry(parameters.bowlRadius, parameters.bowlRadius * 1.05, 50),
    bowlMaterial
)
outerBowl.scale.x += 0.05
outerBowl.scale.y += 0.05
outerBowl.scale.z += 0.05
bowlSubGroup.polygonOffset = true;
bowlSubGroup.polygonOffsetUnits = 1;
bowlSubGroup.polygonOffsetFactor = 1;
bowlSubGroup.rotation.x = Math.PI * 0.6
bowlSubGroup.add(innerBowl, outerBowl, connection)
soundMakerGroup.add(handle, tip)
bowlGroup.add(bowlSubGroup, soundMakerGroup)

flowerGroup.position.y = objectsDistance * 0
orb.position.y = objectsDistance * - 1
bowlGroup.position.y = objectsDistance * - 2

flowerGroup.position.x = 2
orb.position.x = - 2
bowlGroup.position.x = 2

scene.add(flowerGroup, orb, bowlGroup)

// for the scroll  animation
const sectionMeshes = [flowerGroup, orb, bowlGroup]

// Particles ---------------------------------------------------------

const count = 1000

const particleGeometry = new THREE.BufferGeometry
const particleMaterial = new THREE.PointsMaterial
({
    color: parameters.particlesColor,
    sizeAttenuation: true,
    size: 0.02
})

const positions = new Float32Array(count * 3)

for (let i = 0; i < count; i++)
{
    const i3 = i * 3

    positions[i3 + 0] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = objectsDistance* 0.5 - Math.random() * objectsDistance * sectionMeshes.length
    positions[i3 + 2] = (Math.random() - 0.5) * 10
}

particleGeometry.setAttribute( "position", new THREE.BufferAttribute(positions, 3))

const particle = new THREE.Points(particleGeometry, particleMaterial)
scene.add(particle)

// Lights ---------------------------------------------------------------

const directionalLight1 = new THREE.DirectionalLight("white", 2.5)
directionalLight1.position.set(1, 1, 0)
scene.add(directionalLight1)

const directionalLight2 = new THREE.DirectionalLight("white", 1)
directionalLight2.position.set(-1, -4, 0)
scene.add(directionalLight2)

const ambientLight = new THREE.AmbientLight("white", 0.3)
scene.add(ambientLight)


// Sizes

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


// Camera

// Camera Group to have scroll and parallax working at the same time ----------------
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)


// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

// Renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Scroll
let scrollY = window.scrollY
// Scroll dependent animation
let currentSection = 0

window.addEventListener("scroll", () =>
{
    // this value is used in the animation to move the camera
    scrollY = window.scrollY

    // This is for the scroll based animation
    // Round up or down to get the section the user is mostly in
    const newSection = Math.round(scrollY / sizes.height)

    if (newSection != currentSection)
    {    
        currentSection = newSection


        if (currentSection === 0) {
            gsap.to(
                sectionMeshes[currentSection].rotation,
                {
                    duration: 2,
                    ease: "power2.inOut",
                    x: "+=3",
                    y: "+=3",
                }
            )
        }
    }
})

// Cursor
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener("mousemove", (event) =>
{
    cursor.x = (event.clientX / sizes.width - 0.5) * 1.5
    cursor.y = (event.clientY / sizes.height - 0.5) * 1.5
})

// Animate

const clock = new THREE.Clock()
// Time stuff to account for diffrent framerates
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    // Time stuff to account for diffrent framerates
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // animate camera
    camera.position.y = - scrollY / sizes.height * objectsDistance

    // Paralax
    const parallaxX = cursor.x * 0.4
    const parallaxY = - cursor.y * 0.4
    // create a Camera Group further up
    // make it smoother by finding the total distance to cover and makeing it smaller
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 4 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 4 * deltaTime

    // animate meshes
        // flower movement
        flowerGroup.rotation.x += deltaTime * 0.1
        flowerGroup.rotation.y += deltaTime * 0.12

        const yConst = elapsedTime + Math.PI * 1.5

        // sound maker movement
        soundMakerGroup.position.x = ((Math.sin(elapsedTime)) * (parameters.bowlRadius - parameters.soundMakerRadius - 0.05))
        soundMakerGroup.position.z = ((Math.cos(elapsedTime)) * (parameters.bowlRadius - parameters.soundMakerRadius - 0.058))
        soundMakerGroup.position.y = (Math.sin((yConst))) * 0.3 * parameters.bowlRadius
        soundMakerGroup.rotation.z = (Math.sin((elapsedTime + Math.PI))) * 0.5

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()