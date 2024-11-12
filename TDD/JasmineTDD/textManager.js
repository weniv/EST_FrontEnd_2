class TextManager {
    constructor() {
        this.value = { data: 'hello Ormis' };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
}