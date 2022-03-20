export function toRna(cytosine: string): string {
  if (!/^[gcat]+$/gi.test(cytosine)) throw new Error("Invalid input DNA.");
  return cytosine
    .split("")
    .map((element) => {
      element = element.toUpperCase();
      if (element === "C") return element.replace(/c/gi, "G");
      if (element === "G") return element.replace(/g/gi, "C");
      return element.replace(/a/gi, "U").replace(/t/gi, "A");
    })
    .join("");
}

console.log(toRna("cgat"));
