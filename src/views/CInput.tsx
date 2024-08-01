interface CInputProps {
    type: string,
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CInput = ({type, value, onChange}: CInputProps) => { 

    return <input type={type} value={value} onChange={onChange} />
}