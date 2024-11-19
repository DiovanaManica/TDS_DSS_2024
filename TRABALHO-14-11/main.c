#include <stdio.h>
#include <stdbool.h>
#include "dadosSistema.h"
#include "arquivos.h"

int main()
{
    int qtd = 0, op;
    char dados[linhas][tam];
    
    for (int i = 0; i < linhas; i++)
        limpaVetor(dados[i], tam);

    qtd = leArquivo("teste.txt", dados);  // Leitura do arquivo "teste.txt"
    
    printf("\nForam encontrados %d cadastros", qtd);

    do
    {
        printf("\nDigite qual opcao deseja: \n");
        printf("\n1 - Adicionar Pessoa");
        printf("\n2 - Mostrar Todos Dados");
        printf("\n3 - Gerar HTML");
        printf("\n0 - Fechar e atualizar o banco de dados");
        scanf("%d", &op);
        getchar();

        switch (op)
        {
            case 1:
                adicionarClienteAleatorio(dados, &qtd); // Adiciona cliente aleatório
                break;
            case 2:
                mostraTodosClientes(dados, qtd);  // Exibe todos os clientes
                break;
            case 3:
                ordenarDados(dados, qtd); // Ordena os dados
                escreveArquivo("Resultado.html", "<html><body>\n<h1>Clientes</h1>\n<table border='1'>\n<tr><th>Nome</th><th>Telefone</th><th>Curso</th><th>Endereço</th></tr>\n");
                mostraTodosClientes(dados, qtd);  // Exibe todos os clientes no formato HTML
                escreveArquivo("Resultado.html", "</table>\n</body></html>");
                printf("\nHTML gerado com sucesso em 'Resultado.html'.\n");
                break;
            case 0:
                printf("\nSaindo");
                break;
            default:
                printf("\nOpcao Invalida");
                break;
        }
    } while (op != 0);

    // Atualiza o arquivo com todos os dados
    for (int i = 0; i < qtd; i++) {
        escreveArquivo("teste.txt", dados[i]);
    }

    return 0;
}
