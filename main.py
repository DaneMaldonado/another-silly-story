def on_up_pressed():
    pass
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    pass
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

game.show_long_text("Welcome to my game!", DialogLayout.BOTTOM)
pause(100)
game.show_long_text("An explorer is exploring a jungle and stumbles across a maze in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass.",
    DialogLayout.BOTTOM)
tiles.set_current_tilemap(tilemap("""
    level2
"""))
Explorer = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Explorer)
Explorer.set_bounce_on_wall(True)
scene.camera_follow_sprite(Explorer)
Explorer.x = 1
Explorer.y = 1
Explorer.scale = 0.75