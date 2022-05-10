fetch("https://pokeapi.co/api/v2/pokemon")
    .then((respose) => {
        return response.json;
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });