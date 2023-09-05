const sendJsonToHtml = async () => {
    // const query = await fetch('assets/pessoas.json');
    // const json = await query.json();

    const query = await axios('assets/pessoas.json');

    const json = await query.data;

    for(let p of json) {
        document.querySelector('.resultado').innerHTML += `<br>${p.nome}`;
    }
}



sendJsonToHtml();