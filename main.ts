basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showNumber(5)
    } else if (input.lightLevel() > 90) {
        basic.showNumber(4)
    } else if (input.lightLevel() > 80) {
        basic.showNumber(3)
    } else if (input.lightLevel() > 70) {
        basic.showNumber(2)
    } else {
        basic.showNumber(1)
    }
})
