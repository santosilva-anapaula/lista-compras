import { useState } from "react";
import Item from '../Item/Item';
import FormLista from "../FormLista/FormLista";
import './Lista.css'

const Lista = ({children}) => {
    const [itens, setItens] = useState([]);

    const addItem = (novoItem) => {
        setItens([...itens, novoItem]);
    }

    return (
        <section className='lista'>
            <div className="lista-titulo">{children}</div>
            <FormLista onAddItem={addItem}/>
            <ul className="lista-itens">
                {itens.map((item, index) => (
                    <Item key={index} nome={item.nome} quantidade={item.quantidade} />
                ))}
            </ul>
        </section>
    );
}

export default Lista;