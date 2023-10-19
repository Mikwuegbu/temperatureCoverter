let tempConvert = (tempValueCelcius) => {
    let TempEnteriesFah = [];

    for (let i = 0; i < tempValueCelcius.length; i++) {
        let Fah = (tempValueCelcius[i] * 9 / 5) + 32;
        TempEnteriesFah.push(Fah);

    }

    return TempEnteriesFah;
}



