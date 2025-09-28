// Wine's Asset Pack Template
// This template demonstrates how to use the images from this asset pack

// Create a sprite using one of the drone images
let mySprite = sprites.create(myImages.drone1, SpriteKind.Player)

// Position the sprite in the center of the screen
mySprite.setPosition(80, 60)

// Set up some basic movement controls
controller.moveSprite(mySprite)

// You can switch between different drone images for animation
// Example: mySprite.setImage(myImages.drone2)

// Other available images in this pack:
// - myImages.drone1, myImages.drone2, myImages.drone3, myImages.drone4, myImages.drone5
// - myImages.ship1, myImages.ship2, myImages.ship3
// - myImages.sonarBuoy
// - myImages.shipData
// And many more!

game.onUpdate(() => {
    // Add your game logic here
})
