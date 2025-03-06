def on_overlap_tile(sprite, location):
    sprites.destroy(sprite)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_south_west,
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    sprites.destroy(sprite2)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_west1,
    on_overlap_tile2)

def on_up_pressed():
    pass
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile3(sprite3, location3):
    sprites.destroy(sprite3)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_east0,
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    sprites.destroy(sprite4)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_north0,
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    sprites.destroy(sprite5)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_north_west,
    on_overlap_tile5)

def on_left_pressed():
    pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile6(sprite6, location6):
    sprites.destroy(sprite6)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_north_east,
    on_overlap_tile6)

def on_right_pressed():
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile7(sprite7, location7):
    sprites.destroy(sprite7)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_south0,
    on_overlap_tile7)

def on_down_pressed():
    pass
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

game.show_long_text("Welcome to my game!", DialogLayout.CENTER)
pause(100)
game.show_long_text("An explorer is exploring a jungle and stumbles across a maze in order to reach his final destination. If the explorer hits a wall during his time in the maze while on his adventure, he is eliminated. The explorer must beat the maze in order to reach civilization. There may be traps set in the maze in which the explorer needs to surpass.",
    DialogLayout.FULL)
pause(100)
game.show_long_text("Are you ready? Click A.", DialogLayout.CENTER)
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
Explorer.set_position(16, 54)
Explorer.set_bounce_on_wall(True)
scene.camera_follow_sprite(Explorer)
Explorer.x = 1
Explorer.y = 1
Explorer.scale = 0.75