controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    направление = -100
    mySprite.setImage(img`
        . . . . . . 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . 
        5 5 5 5 . . 5 5 . . 4 5 5 5 
        4 4 4 4 . 4 5 5 5 . 4 4 4 4 
        5 5 5 5 4 5 5 5 5 5 5 5 5 5 
        4 4 4 4 5 5 1 1 5 5 4 4 4 4 
        5 5 5 5 5 1 4 4 1 5 5 5 5 5 
        4 4 4 4 5 1 1 4 1 5 4 4 4 4 
        5 5 5 5 5 5 1 1 5 5 5 5 5 5 
        4 4 4 4 5 5 5 5 5 5 4 4 4 4 
        5 5 5 5 4 5 5 5 5 5 5 5 5 5 
        4 4 4 4 . 4 5 5 5 . 4 4 4 4 
        5 5 5 5 . . . . . . 5 5 5 5 
        `)
    mySprite.y += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.abs(направление) == 100) {
        projectile = sprites.createProjectileFromSprite(img`
            1 1 
            1 1 
            `, mySprite, 0, направление)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            1 1 
            1 1 
            `, mySprite, направление, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    направление = 200
    mySprite.setImage(img`
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        . . 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        `)
    mySprite.x += 1
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    направление = 100
    mySprite.setImage(img`
        . . . . . . 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . 
        . . . . . . 5 5 . . . . . . 
        5 5 5 5 . . 5 5 . . 4 5 5 5 
        4 4 4 4 . 4 5 5 5 . 4 4 4 4 
        5 5 5 5 4 5 5 5 5 5 5 5 5 5 
        4 4 4 4 5 5 1 1 5 5 4 4 4 4 
        5 5 5 5 5 1 4 4 1 5 5 5 5 5 
        4 4 4 4 5 1 1 4 1 5 4 4 4 4 
        5 5 5 5 5 5 1 1 5 5 5 5 5 5 
        4 4 4 4 5 5 5 5 5 5 4 4 4 4 
        5 5 5 5 4 5 5 5 5 5 5 5 5 5 
        4 4 4 4 . 4 5 5 5 . 4 4 4 4 
        5 5 5 5 . . . . . . 5 5 5 5 
        `)
    mySprite.image.flipY()
    mySprite.y += 1
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    направление = -200
    mySprite.setImage(img`
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        . . 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        5 . 5 . 5 . 5 . 5 . 5 . . . 
        `)
    mySprite.image.flipX()
    mySprite.x += -1
})
let projectile: Sprite = null
let направление = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . 5 5 . . . . . . 
    . . . . . . 5 5 . . . . . . 
    . . . . . . 5 5 . . . . . . 
    5 5 5 5 . . 5 5 . . 4 5 5 5 
    4 4 4 4 . 4 5 5 5 . 4 4 4 4 
    5 5 5 5 4 5 5 5 5 5 5 5 5 5 
    4 4 4 4 5 5 1 1 5 5 4 4 4 4 
    5 5 5 5 5 1 4 4 1 5 5 5 5 5 
    4 4 4 4 5 1 1 4 1 5 4 4 4 4 
    5 5 5 5 5 5 1 1 5 5 5 5 5 5 
    4 4 4 4 5 5 5 5 5 5 4 4 4 4 
    5 5 5 5 4 5 5 5 5 5 5 5 5 5 
    4 4 4 4 . 4 5 5 5 . 4 4 4 4 
    5 5 5 5 . . . . . . 5 5 5 5 
    `, SpriteKind.Player)
направление = -100
