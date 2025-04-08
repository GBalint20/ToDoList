export default class TodoInput { /*Ez az osztály a teendők hozzáadását kezeli egy inputmező és egy "Ok" gombbal*/


    constructor( pElem) { 
      this.pElem = pElem; /*HTML elem, amihez beszútjuk az inputmezőt és gombot*/
      this.view(); /*View metódus meghívása*/
      this.textElem = document.querySelector("#inp"); /*Elmenti az input mezőt*/
      this.OKElem = document.querySelector("#OK"); /*Elmenti az input mezőt*/
      console.log(this.OKElem);   
      this.OKeventListener(); 
    
    }
    view() { /*Az egyedi input mezőt az "id="inp"-be/ba írja a felhasználó a teendőt*/
      let html = `<input type="text" id="inp" placeholder="add todo">
                     <button id="OK">OK</button>   `; /*Egy gomb amivel lehet hozzáadni*/
      this.pElem.insertAdjacentHTML("beforeend", html); /*Hozzáfűzi a megadott pElemhez*/
    }
    OKeventListener() { /*Eseményfigyelőt állít be az "Ok" gombra. */
      this.OKElem.addEventListener("click", () => { /
        console.log(this.textElem.value ); /*Kiírja a konzolra, hogy mit írt be a felhszáló*/
        const e = new CustomEvent("add", { detail: this.textElem.value }); /*Létrehoz egy "add" nevű egyedi esekményt, aminek értéke az inputmező tartalma*/
        window.dispatchEvent(e); /*Az eseméynt elkűldi az ablakra*/
      });   
    }
 
  }
  