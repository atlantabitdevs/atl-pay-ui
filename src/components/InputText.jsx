export const InputText = (props) => {
    return(
        <div className="flex flex-col space-y w-full">
            <label className="text-lg pl-4 uppercase">{props.label}</label>
            
            <input
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                value={props.value}
                className="p-4 border-4 border-black border-solid text-2xl w-full"
                onChange={props.onChange}
            />
        </div>
        
    )
}