
const setHtmlToPage = async (url) => {
    try {
        const query = await fetch(url);

        if(!query.ok) {
            throw new Error('Página não encontrada!');
        }

        const request = await query.text();

        document.querySelector('.resultado').innerHTML = request;
    } catch(e) {
        document.querySelector('.resultado').innerHTML = e;
    }
}

document.addEventListener("click", (e) => {
    const el = e.target;

    if(el.tagName.toLowerCase() === 'a') {
        e.preventDefault();
        setHtmlToPage(el.getAttribute('href'));
    }
})