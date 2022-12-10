/*
*   Examples:
*
*   rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
*
* */

const rgb = (r, g, b) => {
    return [
        r <= 0 ? `00` : r >= 255 ? `ff` : r.toString(16).padStart(2,'0'),
        g <= 0 ? `00` : g >= 255 ? `ff` : g.toString(16).padStart(2,'0'),
        b <= 0 ? `00` : b >= 255 ? `ff` : b.toString(16).padStart(2,'0'),
    ].join``.toUpperCase()
};