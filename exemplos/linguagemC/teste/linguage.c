#include <stdio.h>
#include <locale.h>
int main()
{
   setlocale(LC_ALL, "Portuguese");
   int num = 0;
   printf("\nDigite um número: ");
   scanf("%d", &num);
   printf("O número é: %d", num);
   printf("\nOlaaaa, oiiii");
}