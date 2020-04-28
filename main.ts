function Animate__right () {
    Sausage.setImage(img`
. . . . . e e . . . . . 
. . . . e e e e . . . . 
. . . . e e e f . . . . 
. . . . e e e e . . . . 
. . . . e e e e . . . . 
. . . 2 e e e e 2 . . . 
. . . . 2 e e f . . . . 
. . . . 2 e e e . . . . 
. . . . e 2 e e . . . . 
. . . . e e 2 e . . . . 
. . . . e e e e . . . . 
. . . . f e e f . . . . 
. . . . f . . f . . . . 
. . . . f . . f . . . . 
. . . . f . . f . . . . 
`)
    pause(100)
    Sausage.setImage(img`
. . . . . e e . . . . . 
. . . . e e e e . . . . 
. . . . e e e f . . . . 
. . . . e e e e . . . . 
. . . . e e e e . . . . 
. . . 2 e e e e 2 . . . 
. . 2 . e e e f . 2 . . 
. . 2 . e e e e . 2 . . 
. 2 . . e e e e . . 2 . 
2 . . . e e e e . . . 2 
. . . . e e e e . . . . 
. . . . f e e f . . . . 
. . . . f . . f . . . . 
. . . . f . . f . . . . 
. . . . f . . f . . . . 
`)
}
let Sausage: Sprite = null
scene.setBackgroundColor(2)
Sausage = sprites.create(img`
. . . . . e e . . . . . 
. . . . e e e e . . . . 
. . . . f e e f . . . . 
. . . . e e e e . . . . 
. . . . e e e e . . . . 
. . . 2 e e e e 2 . . . 
. . 2 . f e e f . 2 . . 
. . 2 . e f f e . 2 . . 
. . 2 . e e e e . 2 . . 
. . 2 . e e e e . 2 . . 
. . 2 . e e e e . 2 . . 
. . 2 . f e e f . 2 . . 
. . 2 . f . . f . 2 . . 
. . . . f . . f . . . . 
. . . . f . . f . . . . 
`, SpriteKind.Player)
Animate__right()
