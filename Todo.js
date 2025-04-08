export default class Todo {
  #text; 
  #index;
  constructor(text, pElem, index) { /*Konstruktor létrehozása amiben beállítjuk a privát adattokat*/
    this.#index = index; /*Egyedi index azonosító minden teendőhöz*/
    this.#text = text; /*Szöveg megadása*/
    this.pElem = pElem; /*HTML elem, amihez hozzá kell adni teendőt*/
    this.view(); /*View metódus meghívása*/
    this.textElem = document.querySelector(".text:last-child"); /*Kiválasztja a legutolsó "text" elemet, amin belűl megtalálj a "pipa" és a "delete" gombot*/
    this.OKElem = this.textElem.querySelector(".ready"); /*"pipa" gomb*/
    console.log(this.OKElem); /*Kiírja az OkElemet a konzolra*/
    this.deleteElem = this.textElem.querySelector(".delete:last-child"); /*"delete" gomb*/
    this.OKeventListener();  /*OKeventListener metódus meghívása*/
    this.remEventListener(); /*remEventListener metódus meghívása*/
  }
  view() { /*Egy új HTML <p> elemet hoz létre. Benne van a teendő szövege. A színe zöld, ha kész, egyébbként fekete. Két gomb van benne */
    let html = `<p class="text" style="color:${this.#text.state?"green":"black"}">${this.#text.todoText}
            <button class="ready">✔</button>
            <button class="delete">🗑</button>
            </p>
            `;
    this.pElem.insertAdjacentHTML("beforeend", html); /*Ezt a HTML kódot hozzáfűzi a megadott pElem-hez*/
  }
  OKeventListener() { /*Esemény figyelőt tesz a pipa gomra. Kattintás után egy "done" nevű egyedi (CustomEvent) eseményt küld ki az ablrakra (window), az adott teendő indexével (detail)*/
    this.OKElem.addEventListener("click", () => {
      const e = new CustomEvent("done", { detail: this.#index });
      window.dispatchEvent(e);
    });   
  }
  remEventListener() { /*Esemény figyelőt tesz a kuka gombra. Kattintás után egy "remove" nevű eseményt küld ki az ablakra, az adott teendő indexével*/
    this.deleteElem.addEventListener("click", () => {
      console.log("delete"); /*Kiírj a konzolra*/
      const e = new CustomEvent("remove", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
