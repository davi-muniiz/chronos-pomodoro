type DefaultInputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<"input">;


export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps) {
    return (<>
        {labelText ? <label htmlFor={id} >{labelText}</label>: 'Label Text'}
        <input type={type} id={id} {...rest} />
    </>);
}

