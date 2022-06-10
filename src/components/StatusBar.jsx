import {BitcoinCircleIcon} from "@bitcoin-design/bitcoin-icons-react/outline";

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
            <a href="/" className="uppercase tracking-widest font-bold text-lg text-term-gray flex flex-row space-x-2 items-center">
                <BitcoinCircleIcon className="w-8 h-8" />
                <span>Terminus</span>
            </a>
            
            <ol className="flex flex-row space-x-12 text-lg text-term-gray list-decimal">
                <DisplayProgress />
            </ol>
        </div>
    );
};
