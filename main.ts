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
