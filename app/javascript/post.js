function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
       e.preventDefault();
       const formData = new FormData(form);
       const XHR = new XMLHttpRequest();
       XHR.open("POST", "/articles", true)
       XHR.responseType = "json";
       XHR.send(formData);
       XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        };
        const contents_area = document.getElementById("contents_area");
        const articleText =document.getElementById("article_text");
        const item = XHR.response.article;
        const html = `
          <div class="article">
            ${item.text}
          </div>`;
          contents_area.insertAdjacentHTML("afterbegin", HTML);
          articleText.value = "";
       };
  });
};

window.addEventListener('turbo:load', post);