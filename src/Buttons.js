import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FlagIcon from '@mui/icons-material/Flag';
import CheckIcon from '@mui/icons-material/Check';

function Buttons() {
    return (
        <div className="Buttons-page-container">
            <h1>Buttons</h1>
            <ButtonsCard />

        </div>
    );
}


function ButtonsCard() {
    const data = {
        heading: "Development Approach",
        content: `SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.`,
        type: "split_buttons_with_icon"
    };

    const { heading, content, type } = data;

    const render_circle_buttons = (
        <div>
            <div>
                <p style={{ fontSize: 20, color: "var(--clr-danger)" }}>.btn-circle .btn-sm</p>
                <FacebookRoundedIcon sx={{ fontSize: 25, color: `var(--clr-primary)` }} />
                <CheckCircleRoundedIcon sx={{ fontSize: 25, color: `var(--clr-success)` }} />
                <InfoRoundedIcon sx={{ fontSize: 25, color: `var(--clr-info)` }} />
                <ErrorRoundedIcon sx={{ fontSize: 25, color: `var(--clr-warning)` }} />
                <DeleteRoundedIcon sx={{ fontSize: 25, color: `var(--clr-danger)` }} />
            </div>
            <div>
                <p style={{ fontSize: 20, color: "var(--clr-danger)" }}>.btn-circle</p>
                <FacebookRoundedIcon sx={{ fontSize: 35, color: `var(--clr-primary)` }} />
                <CheckCircleRoundedIcon sx={{ fontSize: 35, color: `var(--clr-success)` }} />
                <InfoRoundedIcon sx={{ fontSize: 35, color: `var(--clr-info)` }} />
                <ErrorRoundedIcon sx={{ fontSize: 35, color: `var(--clr-warning)` }} />
                <DeleteRoundedIcon sx={{ fontSize: 35, color: `var(--clr-danger)` }} />
            </div>
            <div>
                <p style={{ fontSize: 20, color: "var(--clr-danger)" }}>.btn-circle .btn-lg</p>
                <FacebookRoundedIcon sx={{ fontSize: 50, color: `var(--clr-primary)` }} />
                <CheckCircleRoundedIcon sx={{ fontSize: 50, color: `var(--clr-success)` }} />
                <InfoRoundedIcon sx={{ fontSize: 50, color: `var(--clr-info)` }} />
                <ErrorRoundedIcon sx={{ fontSize: 50, color: `var(--clr-warning)` }} />
                <DeleteRoundedIcon sx={{ fontSize: 50, color: `var(--clr-danger)` }} />
            </div>
        </div>
    );

    const render_split_buttons_with_icon = (
        <div>
            <Button sx={{ backgroundColor: `var(--clr-primary)` }} variant="contained" startIcon={<FlagIcon />}>
                Split Button Primary
            </Button>
            <Button sx={{ backgroundColor: `var(--clr-success)` }} variant="contained" startIcon={<CheckIcon />}>
                Split Button Success
            </Button>

            <Button sx={{ backgroundColor: `var(--clr-info)` }} variant="contained" startIcon={<InfoRoundedIcon />}>
                Split Button Info
            </Button>
            <Button sx={{ backgroundColor: `var(--clr-warning)` }} variant="contained" startIcon={<ErrorRoundedIcon />}>
                Split Button Warning
            </Button>
            <Button sx={{ backgroundColor: `var(--clr-danger)` }} variant="contained" startIcon={<DeleteRoundedIcon />}>
                Split Button Danger
            </Button>
            <Button sx={{ backgroundColor: `var(--clr-secondary)` }} variant="contained" startIcon={<SendIcon />}>
                Split Button Secondary
            </Button>
            <Button sx={{ backgroundColor: `var(--clr-light), color:"red" ` }} variant="contained" startIcon={<SendIcon sx={{ color: "black" }} />}>
                Split Button Light
            </Button>
        </div>);

    return (<>
        <div className="card-head-container">
            <h3 className="card-head">{heading}</h3>
        </div>
        <div className="card-body">
            < p > {content}</p>
            {type === "circle_buttons" ? render_circle_buttons : null}
            {type === "split_buttons_with_icon" ? render_split_buttons_with_icon : null}

        </div>
    </>)
}


export { Buttons }