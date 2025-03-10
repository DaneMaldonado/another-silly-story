scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthWest, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest1, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    text_input = 1
    game.showLongText("You have completed the maze and found civilization! Great job! Click A.", DialogLayout.Top)
    game.splash(game.askForNumber("Select 1 to stay win and click A!"))
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
})
function SpawnEnemy () {
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        EnemyPlayer1 = sprites.create(img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(EnemyPlayer1, value)
        EnemyPlayer1.scale = 0.65
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth0, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthWest, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthEast, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
function EnemyFollow () {
    EnemyFollower = sprites.create(img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `, SpriteKind.Enemy)
    EnemyFollower.scale = 1
    EnemyFollower.follow(Explorer, 60)
    EnemyFollower.setPosition(14, 87)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthEast, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let EnemyFollower: Sprite = null
let EnemyPlayer1: Sprite = null
let text_input = 0
let Explorer: Sprite = null
game.showLongText("Welcome to my game!", DialogLayout.Center)
pause(100)
game.showLongText("An explorer is exploring a jungle and stumbles across a maze in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass.", DialogLayout.Full)
pause(100)
game.showLongText("Are you ready? Click A.", DialogLayout.Center)
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level2`)
SpawnEnemy()
Explorer = sprites.create(img`
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
Explorer.setBounceOnWall(true)
scene.cameraFollowSprite(Explorer)
Explorer.x = 1
Explorer.y = 1
Explorer.scale = 0.75
Explorer.setPosition(96, 76)
EnemyFollow()
