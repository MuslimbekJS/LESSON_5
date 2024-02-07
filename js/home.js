const tabs = document.querySelectorAll(".ap-tab-link");
const tabs_content = document.querySelectorAll(".ap-tab-content");

function getActiveTab(i) {
    tabs.forEach((tab) => {
        tab.classList.remove("active-tab");
    });
    tabs_content.forEach((tabContent) => {
        tabContent.classList.remove("active-tab");
        tabContent.style.display = "none";
    });

    const selectedTab = tabs[i];
    const selectedTabContent = tabs_content[i];

    selectedTab.classList.add("active-tab");
    selectedTabContent.classList.add("active-tab");
    selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (e) {
        e.preventDefault();
        getActiveTab(i);
    });
}



// const btn1 = document.querySelector('.btn-1');
// const toogle = document.getElementsByClassName("toogle")

// btn1.addEventListener('onclick', function (e) {
//   toogle.classList.toogle('open')  
// })









function search() {
    var searchTerm = document.getElementById("searchInput").value;
    var searchResultsContainer = document.getElementById("searchResults");

    // Arama işlemini burada yapabilirsiniz, örneğin:
    var searchResults = performSearch(searchTerm);

    // Arama sonuçlarını gösterme
    displaySearchResults(searchResults, searchResultsContainer);
}

function performSearch(term) {
    // Gerçek arama işlemini yapın ve sonuçları döndürün
    // Örnek olarak bir dizi şeklinde döndürdüm
    return ["Sonuç 1", "Sonuç 2", "Sonuç 3"];
}

function displaySearchResults(results, container) {
    // Sonuçları göstermek için bir döngü
    container.innerHTML = ""; // Önceki sonuçları temizle
    for (var i = 0; i < results.length; i++) {
        var resultItem = document.createElement("div");
        resultItem.textContent = results[i];
        container.appendChild(resultItem);
    }
}
