/* 
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
  return [...`${num}`]
    .map((s, i) => `${s}${"0".repeat(`${num}`.slice(i, -1).length)}`)
    .filter((s) => !s.startsWith`0`).join` + `;
}
