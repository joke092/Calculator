
import { Calculator } from "./Calculator";
class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log(this.getName());
    }

    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
            let carryBit = numberX[i] + numberY[i] + result[i];
            if (carryBit > 9) {

                result[i] = carryBit % 100;
                result[i - 1] = Math.floor(carryBit/10);

            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr("contenteditable", true);
        activeElement.trigger("focus");
    }

    updateResult() {
         let root =  this.$calculatorDOMElement;
         let $resultNumber = root.children(".group-number").children(".result-bit").find("span");
         for(let i=$resultNumber.length-1,j=0;i>=0;i--,j++)
         	$($resultNumber[i]).text(this.resultNumberArray[j]);
    }

    initEvents() {
        super.initEvents();
        let plus = $(".dec-calculator .operator-bar").children().eq(0);
        plus.on("click", () => {
        	let root =  this.$calculatorDOMElement;
        	let activeElement = root.find('.active');
        	activeElement.attr("contenteditable", false);
        	this.checkNumber();
            this.updateResult(); });
    }
}

var span = $("span.display-number__value--zero");

console.log(span);

export { DecCalculator  };
