#ifndef ARQUIVOS
#define ARQUIVOS

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define tam 90
#define linhas 80 // Cada usuário possui duas linhas

// Função para escrever dados em um arquivo de texto (sobrescreve o arquivo)
void escreveArquivo(char *nomeArquivo, char *dados)
{
    FILE *arquivo = fopen(nomeArquivo, "a");
    if (arquivo == NULL) {
        perror("Erro ao abrir o arquivo para escrita");
        return;
    }
    fprintf(arquivo, "%s\n", dados);
    fclose(arquivo);
}

// Função para ler dados de um arquivo de texto
int leArquivo(char *nomeArquivo, char buffer[linhas][tam])
{
    int qtd = 0;
    FILE *arquivo = fopen(nomeArquivo, "r");
    if (arquivo == NULL) {
        perror("Erro ao abrir o arquivo para leitura");
        return 0;
    }

    int i = 0;
    while (fgets(buffer[i], sizeof(buffer[i]), arquivo) != NULL) {
        // Remover '\n' ou '\r' manualmente
        int j = 0;
        while (buffer[i][j] != '\0') {
            if (buffer[i][j] == '\n' || buffer[i][j] == '\r') {
                buffer[i][j] = '\0';  // Substitui '\n' ou '\r' por fim de string
                break;
            }
            j++;
        }

        if (buffer[i][0] >= 'A' && buffer[i][0] <= 'z') {
            i++;  // Apenas incrementa se houver uma linha válida
            qtd++;
        }
    }

    fclose(arquivo);
    return qtd;
}

// Função para ordenar os dados de alunos por ordem alfabética
void ordenarDados(char buffer[linhas][tam], int qtd)
{
    char temp[tam];
    for (int i = 0; i < qtd - 1; i++) {
        for (int j = i + 1; j < qtd; j++) {
            if (strcmp(buffer[i], buffer[j]) > 0) {
                // Trocar os registros
                strcpy(temp, buffer[i]);
                strcpy(buffer[i], buffer[j]);
                strcpy(buffer[j], temp);
            }
        }
    }
}

#endif
