input.onButtonPressed(Button.A, function () {
    counter = 0
    flag = 0
    TM1650.showNumber(counter)
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    counter = 0
    flag = 0
    TM1650.showNumber(counter)
    basic.showIcon(IconNames.SmallDiamond)
})
let flag = 0
let counter = 0
counter = 0
flag = 0
TM1650.showNumber(counter)
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && flag == 0) {
        counter += 1
        TM1650.showNumber(counter)
        basic.showIcon(IconNames.Diamond)
        flag = 1
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        flag = 0
    }
    basic.showIcon(IconNames.SmallDiamond)
})
