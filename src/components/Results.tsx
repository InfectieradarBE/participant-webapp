import React, { useState } from 'react';
import MapChart from './plots/map/mapChart';
import MapLegend from './plots/map/mapLegend';
import MapSlider from './plots/map/mapSlider';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const labels = ['01/2021', '02/2021', '03/2021'];

const Results = () => {
  const [content, setContent] = useState("");
  const [timestamp, setTimestamp] = useState(labels[0]);

  const handleChange = (event: Event, newValue: number) => {
    setTimestamp(labels[newValue]);
  };

  return (
    <div>
      <code >Deze pagina is voor het laatst aangepast op 08.feb.2023 09:30.</code>


      <p style={{ marginTop: '0.5vw' }}>Op deze pagina vindt u de actuele resultaten van Infectieradar.</p>


      <h2 style={{ marginTop: '1vw' }}>COVID-19</h2>
      <p>De onderstaande grafiek toont de incidentie per 1000 deelnemers met COVID-19-achtige symptomen doorheen de tijd. Dit zijn deelnemers die de afgelopen week minimaal één van de volgende symptomen hebben gemeld: koorts, hoesten, kortademigheid, reuk- of smaakverlies. </p>

      <i>98.5% van de deelnemers is volledig gevaccineerd voor COVID-19</i>




      <Tooltip anchorId='mapchart' float content={content} style={{ zIndex: 10000 }}></Tooltip>
      <div id="mapchart" style={{ position: 'relative', width: '90%', margin: 'auto' }}>
        <MapLegend></MapLegend>
        <MapChart setTooltipContent={setContent} timestamp={timestamp}></MapChart>
      </div>
      <MapSlider handleChange={handleChange}></MapSlider>

      <h2>Wekelijkse Symptomen</h2>
      <p>In de afgelopen week hadden we 688 ingevulde symptomen vragenlijsten. In 85.9% van de vragenlijsten werd gerapporteerd dat er <i>geen symptomen</i> waren. Onderstaande grafiek toont de incidentie per 1000 deelnemers met griepachtige symptomen. </p>

      <h2>Achtergrond Informatie</h2>
      <p>Op 8 feburari 2023 hadden we 1831 deelnemers. 59.3% van de deelnemers is vrouw, en 40.5% is man. De kaart toont het totaal aantal deelnemers per 100.000 inwoners in iedere provincie.</p>

      <h4>Geografische verdeling</h4>

      <h4>Leeftijd- en geslachtsverdeling</h4>

    </div>
  );
};

export default Results;

