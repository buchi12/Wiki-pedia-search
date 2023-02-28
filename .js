let inputval = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function create(results) {
    let {
        link,
        title,
        description
    } = results;

    let container = document.createElement("div");
    container.classList.add("result-item");

    let link1 = document.createElement("a");
    link1.classList.add("result-title");
    link1.href = link;
    link1.textContent = title;
    container.appendChild(link1);

    let break1 = document.createElement("br");
    container.appendChild(break1);


    let title1 = document.createElement("a");
    title1.classList.add("result-url");
    title1.href = link;
    title1.textContent = link;
    container.appendChild(title1);

    let break2 = document.createElement("br");
    container.appendChild(break2);


    let para1 = document.createElement("a");
    para1.classList.add("link-description");
    para1.href = description;
    para1.textContent = description;
    container.appendChild(para1);


    searchResultsEl.appendChild(container);


}

function displayresults(serachresults) {
    spinnerEl.classList.add("d-none");
    for (let results of serachresults) {
        create(results);
    }
}

function code(event) {

    let valueinput = inputval.value;

    let url = "https://apis.ccbp.in/wiki-search?search=" + valueinput;
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayresults(search_results);
            })
    }
}

inputval.addEventListener("keydown", code);
