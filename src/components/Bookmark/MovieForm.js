function MovieForm(props) {
    const { dataChange, submitAction } = props;
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                submitAction();
            }}
        >
            <label htmlFor="nome">Nome do comprador</label>
            <input
                id="nome"
                type="text"
                placeholder="Digite seu nome..."
                required
                onChange={(event) => dataChange("name", event.target.value)}
            />
            <label htmlFor="cpf">CPF do comprador</label>
            <input
                type="number"
                id="cpf"
                placeholder="Digite seu CPF"
                required
                onChange={(event) => dataChange("cpf", event.target.value)}
            />
            <input className="btn" type="submit" value="Reservar assento(s)" />
        </form>
    );
}

export default MovieForm;
