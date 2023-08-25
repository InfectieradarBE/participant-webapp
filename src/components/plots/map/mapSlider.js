import { useState } from "react";
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import Stack from '@mui/material/Stack';

const theme = createTheme({
    palette: {
        primary: {
            main: '#20367B',
        },
        secondary: {
            main: '#20367B',
        },
    },
});

const labels = ['01/2021', '02/2021', '03/2021'];

const marks = [{ value: 0, label: labels[0] }, { value: labels.length - 1, label: labels[labels.length - 1] }];

function valuetext(value) {
    return `${labels[value]}`;
}

function RunningButton(props) {
    const running = props.running;

    if (running) {
        return <PauseRoundedIcon fontSize="medium" />
    } else {
        return <PlayArrowRoundedIcon fontSize="medium" />
    }
}

const MapSlider = ({ handleChange }) => {
    const [sliderValue, setSliderValue] = useState(0);
    const [running, setRunningState] = useState(false);

    const handleCommittedChange = (event, newValue) => {
        setSliderValue(newValue);
        handleChange(event, newValue);
    };

    return (
        <ThemeProvider theme={theme}>

            <Stack direction="row" spacing={3} style={{ width: '85%', marginBottom: '3vw' }}>

                <IconButton style={{marginRight: '0.5vw'}} color="primary" aria-label="start date simulation"
                    onClick={() => {
                        if (running) {
                            setRunningState(false);
                            
                        } else {
                            setRunningState(true);
                            setSliderValue(0);
                            handleChange(null, 0);
                            labels.forEach((element, index) => {
                                setTimeout(() => {
                                    console.log(index)
                                    setSliderValue(index);
                                    handleChange(null, index);
                                    if (index == labels.length - 1) {
                                        setRunningState(false);
                                    };
                                }, index * 1000);

                            });
                        }
                    }}>
                    <RunningButton running={running} />
                </IconButton>
                <Slider
                    valueLabelFormat={valuetext}
                    valueLabelDisplay="on"
                    step={1}
                    marks={marks}
                    min={0}
                    max={2}
                    onChange={handleCommittedChange}
                    onChangeCommitted={handleChange}
                    color="secondary"
                    value={sliderValue}
                />

            </Stack>

        </ThemeProvider>

    );
}

export default MapSlider;