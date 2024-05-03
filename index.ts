/*
* This program creates different types of vehicles
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-01
*/


import { Truck } from "./Truck"
import { Bike } from "./Bike"

const bmx = new Bike('Red', 40)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadence to 10\n')
bmx.cadence = 10
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accelerate(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()


const bigTruck = new Truck('Grey', 200, 'HGC-3456F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking of power 10, for 2 sec, Air pressure of 2:')
bigTruck.break(10, 2, 2)
console.log('New speed: ' + bigTruck.speed)

console.log('\nDone.')
