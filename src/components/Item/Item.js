const Item = ({ nome, quantidade }) => {
    return (
        <li className="lista-item">
            {nome} - {quantidade} unidade(s)
        </li>       
    );
}

export default Item;