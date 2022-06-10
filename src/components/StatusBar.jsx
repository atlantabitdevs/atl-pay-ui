export const StatusBar = (props) => {
    const progress = [
        {
            name: "Membership Type",
            path: 'deals'
        },
        {
            name: "About You",
            path: 'form'
        },
        {
            name: "Payment schedule",
            path: 'schedule'
        },
        {
            name: "Checkout",
            path: 'invoice'
        },
    ];

    const DisplayProgress = () => {
        return progress.map((step) => (
            <li className={props.current === step.name ? "current" : null}>
                <a href={'/' + step.path}>{step.name}</a>
            </li>
        ));
    };

    return (
        <div className="status-bar flex flex-row space-x-16 items-center justify-center">
            <a href="/" className="uppercase tracking-widest font-bold text-lg text-term-gray">Terminus</a>
            
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
