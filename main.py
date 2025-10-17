def on_button_pressed_a():
    global _switch
    _switch = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global _switch
    _switch = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

_switch = 0
_switch = 0

def on_forever():
    if _switch == 0:
        basic.show_string("T")
        TM1650.show_number(ModuleWorld_Digital.dht11value(ModuleWorld_Digital.DHT11Type.DHT11_TEMPERATURE_C,
                ModuleWorld_Digital.mwDigitalNum.P0P1))
    else:
        basic.show_string("H")
        TM1650.show_number(ModuleWorld_Digital.dht11value(ModuleWorld_Digital.DHT11Type.DHT11_HUMIDITY,
                ModuleWorld_Digital.mwDigitalNum.P0P1))
    basic.pause(5000)
basic.forever(on_forever)
