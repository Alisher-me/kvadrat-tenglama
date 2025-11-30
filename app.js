function solve() {
    const a = Number(getelementbyid("a").value);
    const b = Number(getelementbyid("b").value);
    const c = Number(getelementbyid("c").value);
    const d = b * b - 4 * a * c;
    if (a === 0) {
        alert("a nolga teng bo'lmasligi kerak");
        return;
    }
    else if (b === 0) {
        if ((-c / a) > 0) {
            let x1 = Math.sqrt(-c / a);
            let x2 = -Math.sqrt(-c / a);
            alert(`x1=${x1}, x2=${x2}`);
            return;
        }
        else if ((-c / a) === 0) {
            alert(`x1 ham x2 ham ${0}`);
            return;
        }
        else {
            alert("tenglamani ildizi yo'q");
            return;
        }
    }
    else if (c === 0) {
        let x1 = 0;
        let x2 = (-b / a);
        alert(`x1=${x1}, x2=${x2}`);
        return;
    }

    if (d < 0) {
        alert("Tenglama ildizga ega emas");
        return;
    }
    else if (d === 0) {
        let x = (-b) / (2 * a);
        alert(`yangona yechim bor x=${x}`);
        return;
    }
    else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert(`x1=${x1}, x2=${x2}`);
    }

}