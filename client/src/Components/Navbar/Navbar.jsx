import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExploreIcon from "@mui/icons-material/Explore";
import Paper from "@mui/material/Paper";
import FloatingActionButton from "../Fab/Fab";

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <FloatingActionButton type="add" />
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}>
                <BottomNavigation
                    // showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}>
                    <BottomNavigationAction
                        label="Saved"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Explore"
                        icon={<ExploreIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
