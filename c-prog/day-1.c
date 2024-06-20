#include<stdio.h>

void main(){
    char x=128;
    printf("%c", x);

    char x1=129;
    // printf("%d", x1); //o/p = -127


   // ## Range of signed short cyclic :  +ve 0 to 32767  and  -ve -1 to -32768

    signed short int a=65539;
    printf("%d", a); // o/p=3

   
    signed short int a1=65534;
    printf("%d", a1); // o/p=-2

   // ## Range of unsigned short cyclic :   0 to 65535 [0 - 65535]

   unsigned short int a2=65536;
    printf("%d", a2); // o/p=0
}

