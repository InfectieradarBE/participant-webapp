import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";

export async function loadData(path) {
    const data = await csv(path);
    
    const labels = data[0].keys().slice(1);
    let marks = [];

    labels.forEach((label, index) => {
        marks.push({
            value: index,
            label: label,
        });
    });

    return [labels, marks];
}

export function mapColorScale() {
    return scaleLinear().domain([0, 100]).range(["#D6DEF4", "#4063CE"]);
}
