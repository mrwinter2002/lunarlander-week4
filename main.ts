controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    rocket.vy = -10
    rocket.setImage(img`
        ......b111c.....
        ....bb11111ccc..
        ...b111111111cc.
        ..b11111111111c.
        ..b11111111111c.
        ..b1111bbb1111c.
        ..b111bcccd111c.
        ..b111bcccd111c.
        ..b111bcccd111c.
        ..b1111ddd1111c.
        ..b11111111111c.
        ..b11111111111c.
        ..b11111111111c.
        ...2211111222c..
        .b122111112421c.
        b11221111124211c
        ...24.....2422..
        ..2442....24422.
        .224442..2244422
        .2455442.2425422
        `)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.over(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rocket.setImage(img`
        ......b111c.....
        ....bb11111ccc..
        ...b111111111cc.
        ..b11111111111c.
        ..b11111111111c.
        ..b1111bbb1111c.
        ..b111bcccd111c.
        ..b111bcccd111c.
        ..b111bcccd111c.
        ..b1111ddd1111c.
        ..b11111111111c.
        ..b11111111111c.
        ..b11111111111c.
        ...1111111222c..
        .b111111112421c.
        b11111111124211c
        ..........2422..
        ..........24422.
        .........2244422
        .........2425422
        `)
    rocket.vx = -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rocket.vx = 10
    rocket.setImage(img`
        ......b111c.....
        ....bb11111ccc..
        ...b111111111cc.
        ..b11111111111c.
        ..b11111111111c.
        ..b1111bbb1111c.
        ..b111bcccd111c.
        ..b111bcccd111c.
        ..b111bcccd111c.
        ..b1111ddd1111c.
        ..b11111111111c.
        ..b11111111111c.
        ..b11111111111c.
        ...2211111111c..
        .b122111111111c.
        b11221111111111c
        ...24...........
        ..2442..........
        .224442.........
        .2455442........
        `)
})
let rocket: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5], TileScale.Sixteen))
rocket = sprites.create(img`
    . . . . . . b 1 1 1 c . . . . . 
    . . . . b b 1 1 1 1 1 c c c . . 
    . . . b 1 1 1 1 1 1 1 1 1 c c . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
    . . b 1 1 1 1 b b b 1 1 1 1 c . 
    . . b 1 1 1 b c c c d 1 1 1 c . 
    . . b 1 1 1 b c c c d 1 1 1 c . 
    . . b 1 1 1 b c c c d 1 1 1 c . 
    . . b 1 1 1 1 d d d 1 1 1 1 c . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
    . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
    . . . b 1 1 1 1 1 1 1 1 1 c . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 1 c . 
    b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
    `, SpriteKind.Player)
rocket.ay = 40
forever(function () {
    if (controller.anyButton.isPressed() != true) {
        rocket.setImage(img`
            . . . . . . b 1 1 1 c . . . . . 
            . . . . b b 1 1 1 1 1 c c c . . 
            . . . b 1 1 1 1 1 1 1 1 1 c c . 
            . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
            . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
            . . b 1 1 1 1 b b b 1 1 1 1 c . 
            . . b 1 1 1 b c c c d 1 1 1 c . 
            . . b 1 1 1 b c c c d 1 1 1 c . 
            . . b 1 1 1 b c c c d 1 1 1 c . 
            . . b 1 1 1 1 d d d 1 1 1 1 c . 
            . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
            . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
            . . b 1 1 1 1 1 1 1 1 1 1 1 c . 
            . . . b 1 1 1 1 1 1 1 1 1 c . . 
            . b 1 1 1 1 1 1 1 1 1 1 1 1 c . 
            b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
            `)
    }
})
