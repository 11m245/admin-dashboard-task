import "./Buttons.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FlagIcon from '@mui/icons-material/Flag';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

function Buttons() {
    const cardsList = [{
        heading: "Circle Buttons",
        content: `Use Material Icons  along with the circle buttons as shown in the examples below!`,
        type: "circle_buttons"
    }, {
        heading: "Split Buttons with Icon",
        content: `Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.`,
        type: "split_buttons_with_icon"
    }, {
        heading: "Brand Buttons",
        content: `Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.

        You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.`,
        type: "brand_buttons"
    }
    ];
    return (
        <div className="buttons-page-container">
            <h1 className="heading">Buttons</h1>
            <div className="cards-container">
                {cardsList.map((cardData) => <ButtonsCard data={cardData} />)}
            </div>
        </div>
    );
}


function ButtonsCard({ data }) {
    // const data = {
    //     heading: "Development Approach",
    //     content: `SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance.Custom CSS classes are used to create custom components and custom utility classes.
    //             Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.`,
    //     type: "brand_buttons"
    // };

    const { heading, content, type } = data;

    const render_circle_buttons = (
        <div className="circle-buttons-container">
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
        <div className="split-buttons-with-icon">
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
            <Button sx={{ color: "black", backgroundColor: `var(--clr-secondary)` }} variant="contained" startIcon={<SendIcon />}>
                Split Button Secondary
            </Button>
            <Button sx={{ color: "black", backgroundColor: `var(--clr-light)` }} variant="contained" startIcon={<SendIcon sx={{ color: "black" }} />}>
                Split Button Light
            </Button>
            <div className="extra-content">
                <p className="mb">Also works with small and large button classes!</p>
                <Button sx={{ fontSize: 10, backgroundColor: `var(--clr-primary)` }} variant="contained" startIcon={<FlagIcon />}>
                    Split Button Primary
                </Button>
                <br /> <br />
                <Button sx={{ fontSize: 20, backgroundColor: `var(--clr-primary)` }} variant="contained" startIcon={<FlagIcon />}>
                    Split Button Primary
                </Button>
            </div>
        </div>);


    const render_brand_buttons = (<div className="brand-buttons">
        <div className="logo-button-w">
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <span>AlarmIcon Button</span>
        </div>
        <div className="logo-button-w">
            <IconButton sx={{ color: "red" }} aria-label="google">
                <GoogleIcon />
            </IconButton>
            <span>GoogleIcon Button</span>
        </div>
        <div className="logo-button-w">
            <IconButton sx={{ color: "#00acee" }} aria-label="twitter">
                <TwitterIcon />
            </IconButton>
            <span>Twitter Icon Button</span>
        </div>
    </div >);


    return (<div className="buttons-card-container ">
        <div className="card-head-container">
            <h3 className="card-head">{heading}</h3>
        </div>
        <div className="card-body">
            < p > {content}</p>
            {type === "circle_buttons" ? render_circle_buttons : null}
            {type === "split_buttons_with_icon" ? render_split_buttons_with_icon : null}
            {type === "brand_buttons" ? render_brand_buttons : null}

        </div>
    </div>)
}


export { Buttons }