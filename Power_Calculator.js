class Calculators {
    constructor(voltage, current) {
        this.voltage = voltage;
        this.current = current;
    }
    power(voltage, current) {
        const power = voltage * current;
        return power;
    }
}
const instance_power1 = new Calculators(40,30);
console.log(instance_power1.power(40,30));