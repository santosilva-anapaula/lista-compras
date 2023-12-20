import {useState} from 'react';

const FormLista = ({ onAddItem}) => {
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddItem({nome, quantidade});
        setNome('');
        setQuantidade('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className='item-nome item-label'>
                Nome do item:
                <input
                    type='text'
                    value={nome}
                    onChange={(e) => handleChange(e, setNome)}
                    className='item-input'
                />
            </label>
            <label  className='item-quantidade item-label'>
                Quantidade:
                <input
                    type='text'
                    value={quantidade}
                    onChange={(e) => handleChange(e, setQuantidade)}
                    className='item-input'
                />
            </label>

            <button type='submit' className='btn-adicionar'>Adicionar</button>
        </form>
    );
}

export default FormLista;