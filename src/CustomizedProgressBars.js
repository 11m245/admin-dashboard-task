import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme, barColor }) => ({
    height: 14,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "hsl(231deg 26 % 89 %)"
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: barColor,
    },
}));



function CustomizedProgressBars({ barColor, value }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <BorderLinearProgress barColor={barColor} variant="determinate" value={value} />
        </Box>
    );
}

export { CustomizedProgressBars }