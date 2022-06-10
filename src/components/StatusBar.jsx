export const StatusBar = (props) => {
    const progress = [
        {
            name: "Membership Type",
        },
        {
            name: "About You",
        },
        {
            name: "Payment schedule",
        },
        {
            name: "Checkout",
        },
    ];

    const DisplayProgress = () => {
        return progress.map((step) => (
            <li className={props.current === step.name ? "current" : null}>
                <a href="#">{step.name}</a>
            </li>
        ));
    };

    return (
        <div className="status-bar">
            <ol className="flex flex-row space-x-12 text-lg text-term-gray list-decimal">
                <DisplayProgress />
                {/* <li className="current">
                    <a href="#">Membership Type</a>
                </li>
                <li>
                    <a href="#">About You</a>
                </li>
                <li>
                    <a href="#">Payment schedule</a>
                </li>
                <li>
                    <a href="#">Checkout</a>
                </li> */}
            </ol>
        </div>
    );
};
