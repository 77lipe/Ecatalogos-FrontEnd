interface Props{
    onPrev: () => void
    onNext: () => void
}

export function NavigateButtons({onPrev, onNext}: Props){
    return(
        <>
        <button onClick={onPrev}> ← </button>
        <button onClick={onNext}> → </button>
        </>
    )
}