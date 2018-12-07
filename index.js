function patates(event) {
    let response = document.getElementById("potatoes").value;
    if(event.which == 13)
    if (response.length == 3) {
        if (response == 'oui') {
            for (let i = 1; i <= 7; i++) {
                let variable = '#';
                let number = variable.repeat(i);
                console.log(number);
            }
        } else if (response == 'non') {
            window.alert('Je suis triste...');
        } else {
            window.alert('Je vous sens comme tiraillé');
        }
    }
}