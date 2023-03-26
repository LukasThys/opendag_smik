input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    start = 1
})
let Plot_Y = 0
let Plot_X = 0
let start = 0
start = 0
basic.forever(function () {
    if (start == 1) {
        basic.showString("Hallo, dit is een microbit.")
        start = 0
    }
    Plot_X = randint(0, 4)
    Plot_Y = randint(0, 4)
    led.toggle(Plot_X, Plot_Y)
})
