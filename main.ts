scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthWest, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest1, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile1
    `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    game.showLongText("You have completed the maze and found civilization! Great job! Click A.", DialogLayout.Top)
    pause(100)
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth0, function on_overlap_tile5(sprite5: Sprite, location5: tiles.Location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthWest, function on_overlap_tile6(sprite6: Sprite, location6: tiles.Location) {
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthEast, function on_overlap_tile7(sprite7: Sprite, location7: tiles.Location) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function on_overlap_tile8(sprite8: Sprite, location8: tiles.Location) {
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthEast, function on_overlap_tile9(sprite9: Sprite, location9: tiles.Location) {
    game.gameOver(false)
})
game.showLongText("Welcome to my game!", DialogLayout.Center)
pause(100)
game.showLongText("An explorer is exploring a jungle and stumbles across a maze in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass.", DialogLayout.Full)
pause(100)
game.showLongText("Are you ready? Click A.", DialogLayout.Center)
tiles.setCurrentTilemap(tilemap`
    level2
`)
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
tiles.placeOnTile(Explorer, tiles.getTileLocation(5, 5))
controller.moveSprite(Explorer)
Explorer.setBounceOnWall(true)
scene.cameraFollowSprite(Explorer)
Explorer.x = 1
Explorer.y = 1
Explorer.scale = 0.75
