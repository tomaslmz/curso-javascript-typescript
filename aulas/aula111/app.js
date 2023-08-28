const ajax = (obj) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                message: xhr.statusText
            });
        }
    }
}

document.addEventListener("click", (e) => {
    const el = e.target;
    
    if(el.tagName.toLowerCase() === 'a') {
        e.preventDefault();
        console.log(el.getAttribute('href'));
        ajax({
            method: 'GET',
            url: el.getAttribute('href'),
            success(response) {
                document.querySelector(".resultado").innerHTML = response;
            },
            error(e) {
                console.log(e);
            }
        });
    }

})