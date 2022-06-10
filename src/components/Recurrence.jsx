import { Button } from "./Button";

export const Recurrence = (props) => {
    let classes =
        "border-solid border-black border-4 p-8 w-xl flex flex-col space-y-8 items-center justify-between";
    let disabledClass =
        "recurrence border-solid border-black border-4 p-8 w-xl flex flex-col space-y-8 items-center justify-between disabled";

    return (
        <div className={props.disabled ? disabledClass : classes}>
            <p className="bg-term-gray text-white p-8 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl">
                {props.schedule.months}
            </p>

            <p className="text-4xl text-center">{props.schedule.description}</p>

            <p className="text-2xl text-center">
                {props.schedule.subdescription}
            </p>

            <Button
                onClick={() =>
                    props.selectSchedule(props.schedule, props.index)
                }
            >
                Select
            </Button>
        </div>
    );
};
