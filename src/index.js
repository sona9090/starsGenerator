import "./styles.css";

const repeatChar = (arr, char) => {
  return arr.map((item) => char).join("");
};

const NASA = (q) => {
  let figure = [];
  let charsCount = 2 * q - 1;
  let m = (charsCount - 1) / 2;
  for (let i = 0; i < q; i += 2) {
    let arrM = Array.from({ length: m });
    let arrI = Array.from({ length: i - 1 });
    let isFirstStep = i === 0;

    let edgeSpaces = repeatChar(arrM, "&nbsp");
    let middle = isFirstStep ? "" : `${repeatChar(arrI, "&nbsp")}*`;
    figure.push(`${edgeSpaces}*${middle}${edgeSpaces}`);
    m--;
  }

  return figure.join("<br>") + "<br>" + figure.reverse().join("<br>");
};

let content = NASA(12);

document.getElementById("app").innerHTML = content;
