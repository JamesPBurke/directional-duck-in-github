let aDuck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    5 . . . . 5 5 5 5 5 . . . . . . 
    5 5 . . . . 5 5 1 1 5 . . . . . 
    5 5 5 5 5 5 5 5 1 f 5 4 4 4 . . 
    5 5 5 5 5 5 5 5 1 1 5 4 4 4 4 4 
    5 5 5 5 5 5 5 5 1 1 5 4 4 4 4 4 
    5 5 5 5 5 5 5 5 1 f 5 4 4 4 . . 
    5 5 . . . . 5 5 1 1 5 . . . . . 
    5 . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(aDuck)
let Goofball = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.Player)
Goofball.setPosition(31, 90)
game.onUpdate(function () {
    if (aDuck.vx < 0) {
        aDuck.setImage(assets.image`myImage1`)
    } else if (aDuck.vx > 0) {
        aDuck.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 5 . . . . . . . . 
            . . . . 5 5 5 5 5 . . . . . . . 
            5 . . . . 5 5 5 5 5 . . . . . . 
            5 5 . . . . 5 5 1 1 5 . . . . . 
            5 5 5 5 5 5 5 5 1 f 5 4 4 4 . . 
            5 5 5 5 5 5 5 5 1 1 5 4 4 4 4 4 
            5 5 5 5 5 5 5 5 1 1 5 4 4 4 4 4 
            5 5 5 5 5 5 5 5 1 f 5 4 4 4 . . 
            5 5 . . . . 5 5 1 1 5 . . . . . 
            5 . . . . 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 . . . . . . . 
            . . . 5 5 5 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (aDuck.vy < 0) {
        aDuck.setImage(assets.image`myImage`)
    } else if (aDuck.vy > 0) {
        aDuck.setImage(assets.image`myImage0`)
    }
})
game.onUpdateInterval(100, function () {
	
})
