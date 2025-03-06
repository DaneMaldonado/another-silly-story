scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthWest, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest1, function (sprite, location) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthWest, function (sprite, location) {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthEast, function (sprite, location) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthEast, function (sprite, location) {
    game.gameOver(false)
})
game.showLongText("Welcome to my game!", DialogLayout.Center)
pause(100)
game.showLongText("An explorer is exploring a jungle and stumbles across a maze in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass.", DialogLayout.Full)
pause(100)
game.showLongText("Are you ready? Click A.", DialogLayout.Center)
tiles.setCurrentTilemap(tilemap`level2`)
let Explorer = sprites.create(img`
    . f f f . f f f f f . . . . 
    f f f f f c c c c f f . . . 
    f f f f b c c c c c c f . . 
    f f f c 3 c c c c c c f . . 
    . f 3 3 c c c c c c c c f . 
    . f f f c c c c c 4 c c f . 
    . f f f f c c c 4 4 e f f . 
    . f f 4 4 f b f 4 4 e f f . 
    . . f 4 d 4 1 f d d f f . . 
    . . f f f 4 d d d d f . . . 
    . . . f e e 4 4 4 e f . . . 
    . . . 4 d d e 3 3 3 f . . . 
    . . . e d d e 3 3 3 f . . . 
    . . . f e e f 6 6 6 f . . . 
    . . . . f f f f f f . . . . 
    . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Explorer)
Explorer.setPosition(16, 54)
Explorer.setBounceOnWall(true)
scene.cameraFollowSprite(Explorer)
Explorer.x = 1
Explorer.y = 1
Explorer.scale = 0.75
