let Adım_sayisi = 0
input.onGesture(Gesture.Shake, function () {
    Adım_sayisi += 1
    basic.showNumber(Adım_sayisi)
})
