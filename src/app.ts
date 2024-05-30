class Romb {
    //kötések (bind) pipe [pájp] AltGr + w = |
    sideInput?: HTMLInputElement | null;
    perimeterInput?: HTMLInputElement | null;
    areaInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;


    constructor() {
        this.bindHtml();
        this.handleEvent();
    }   

    bindHtml() {
        this.sideInput = document.querySelector("#side");
        this.perimeterInput = document.querySelector("#perimeter");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const side = Number(this.sideInput?.value);
        const perimeter = Number(this.perimeterInput?.value);
        const area = Number(this.areaInput?.value);
        this.rederResult(perimeter, area);

    }
    calcPerimeter(side: number): number {
        return side * 4;
    }
    calcArea(side: number, perimeter: number, area: number): number {
        const rad = 4/3 * Math.PI * 180 * side * perimeter * area;
        return Math.pow(side, 2) * Math.sin(rad);
    }
    rederResult(perimeter: number, area: number) {
        if(this.perimeterInput) {
        this.perimeterInput.value = String(perimeter);
        }
        if(this.areaInput) {
            this.areaInput.value = String(area);
        }
    
    }
}


new Romb();