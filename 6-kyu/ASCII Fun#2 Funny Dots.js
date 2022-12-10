/* 

Examples

                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+            
             +---+                          | o | o | o |
                                            +---+---+---+


*/

function dot(n, m) {
  let arr = new Array(m);
  arr = arr
    .fill(" ".repeat(n).split(""))
    .map((x) => x.map((e) => "o"))
    .map((x) => `| ${x.join(" | ")} |`);

  return (
    `${"+---".repeat(n)}+\n` +
    arr.join(`\n${"+---".repeat(n)}+\n`) +
    `\n${"+---".repeat(n)}+`
  );
}
