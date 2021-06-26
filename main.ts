let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (Distance < 5) {
        pins.servoWritePin(AnalogPin.P12, 180)
    } else {
        pins.servoWritePin(AnalogPin.P12, 0)
    }
})
