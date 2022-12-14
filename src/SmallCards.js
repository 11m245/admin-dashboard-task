import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { CustomizedProgressBars } from './CustomizedProgressBars';

export function SmallCards() {

    const cardDataList = [{ label: "EARNINGS (MONTHLY)", labelColor: `var(--clr-primary)`, number: 40000, type: "money", progressbar: false, icon: <CalendarMonthIcon sx={{ fontSize: 40, color: `var(--dull-clr)` }} /> },
    { label: "EARNINGS (ANNUAL)", labelColor: `var(--clr-success)`, number: 215000, type: "money", progressbar: false, icon: <AttachMoneyIcon sx={{ fontSize: 40, color: `var(--dull-clr)` }} /> },
    { label: "TASKS", labelColor: `var(--clr-info)`, number: 50, type: "percent", progressbar: true, icon: <AssignmentIcon sx={{ fontSize: 40, color: `var(--dull-clr)` }} /> },
    { label: "PENDING REQUESTS", labelColor: `var(--clr-warning)`, number: 18, type: "count", progressbar: false, icon: <MarkChatUnreadIcon sx={{ fontSize: 40, color: `var(--dull-clr)` }} /> }
    ];

    return (<div className='small-cards-container'>
        {cardDataList.map((obj) => <SmallCard data={obj} />)}
    </div>);

}
function SmallCard({ data }) {
    return (<div style={{ borderLeft: `5px solid ${data.labelColor}` }} className="small-card-container shadow">
        <div>
            <p style={{ color: data.labelColor }} className='small-card-label'> {data.label}</p>
            <div className="number-container">
                <h3 style={{ color: `var(--clr-secondary)` }} className='small-card-number'>
                    {data.type === "money" ? `$${data.number}` : null}
                    {data.type === "count" ? `${data.number}` : null}
                    {data.type === "percent" ? `${data.number}% ` : null}
                </h3>
                {data.type === "percent" ? <CustomizedProgressBars height={7} barColor={data.labelColor} value={data.number} /> : null}
            </div>
        </div>
        {data.icon}
        {/* <CalendarMonthIcon sx={{ fontSize: 40, color: `var(--dull-clr)` }} /> */}
    </div>);
}
