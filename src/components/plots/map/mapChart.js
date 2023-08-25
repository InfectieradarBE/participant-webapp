import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { csv } from "d3-fetch";
import { loadData, mapColorScale } from './mapDataLoader';

const geoUrl = "/assets/data/map/be_provs.json";
const dataUrl = "/assets/data/map/mock_data.csv";

const colorScale = mapColorScale();

const MapChart = ({ setTooltipContent, timestamp }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(dataUrl).then((data) => {
      setData(data);
    });
  }, []);


  return (
    <div data-tip="">


      <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        center: [4.5, 50.5],
        scale: 15000
      }}
      >

      <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.NAME === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d[timestamp]) : "#F5F4F6"}
                  stroke="#FFFFFF"
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}: ${d[timestamp]}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />
              );
            })
          }
        </Geographies>
    </ComposableMap>

    </div>

  );
};

export default MapChart;

