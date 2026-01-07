let cache = [];

function put() {
    let page = Number(document.getElementById("page").value);
    let size = Number(document.getElementById("cacheSize").value);
    let result = document.getElementById("result");

    let index = cache.indexOf(page);

    if (index !== -1) {
        cache.splice(index, 1);
        cache.unshift(page);
        result.innerText = "Cache Hit!";
        result.className = "hit";
    } else {
        if (cache.length === size) {
            cache.pop();
        }
        cache.unshift(page);
        result.innerText = "Cache Miss!";
        result.className = "miss";
    }

    renderCache();
}

function get() {
    let page = Number(document.getElementById("page").value);
    let result = document.getElementById("result");

    let index = cache.indexOf(page);

    if (index !== -1) {
        cache.splice(index, 1);
        cache.unshift(page);
        result.innerText = "Cache Hit!";
        result.className = "hit";
    } else {
        result.innerText = "Cache Miss!";
        result.className = "miss";
    }

    renderCache();
    document.getElementById("page").value = "";
}

function renderCache() {
    let div = document.getElementById("cache");
    div.innerHTML = "";

    cache.forEach((p, index) => {
        let item = document.createElement("div");
        item.className = "cache-item";
        item.innerText = p;
        div.appendChild(item);

        // Add arrow except after last element
        if (index < cache.length - 1) {
            let arrow = document.createElement("div");
            arrow.className = "arrow";
            arrow.innerText = "→";
            div.appendChild(arrow);
        }
    });
     document.getElementById("page").value = "";
}
