import Card from "../../components/Card";

export default function Dashboard() {
  return (
    <>
      <div className="grid items-center min-h-full grid-cols-1 gap-6 justify-items-center lg:grid-cols-2 lg:justify-center lg:items-center">
        <Card
          title={"Visualizar Produtos"}
          desc={
            "Clique aqui caso deseje visualizar os produtos que estão no estoque."
          }
          buttonText={"Acessar estoque"}
          link={"/product/list"}
        />

        <Card
          title={"Gerenciar Produtos"}
          desc={
            "Clique aqui para adicionar um novo produto, atualizar um produto existente, ou deletar um produto que não está mais no estoque."
          }
          buttonText={"Gerenciar estoque"}
          link={"/product/form"}
        />

        <Card
          title={"Gerenciar Usuários"}
          desc={
            "Clique aqui para fazer o cadastro de novos usuários para ajudar no gerenciamento do estoque."
          }
          buttonText={"Cadastrar usuário"}
          link={"/user/list"}
        />

        <Card
          title={"Ler Relatórios"}
          desc={
            "Clique aqui para visualizar os relatórios relacionados às movimentações de produtos."
          }
          buttonText={"Abrir relatórios"}
          link={"/report"}
        />
      </div>
    </>
  );
}
