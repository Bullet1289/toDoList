import './Form.scss'

export const Form = () => {
    let createText = ''

    const fromSubmit = () => {
        console.log('submit');
    }

    const changeText = (even: React.ChangeEvent<HTMLInputElement>) => {
        console.log();
    }
    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={fromSubmit}>
                <label>
                    <input type="text" onInput={changeText}/>
                    <button></button>
                </label>
            </form>
        </div>
    )
}