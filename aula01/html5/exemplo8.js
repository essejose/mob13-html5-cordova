var n1=0;
var n2=0;
var nC=0;

function calculaFibonacci()
{
      if ((n1 != 0) && (n2 != 0))
      {
            nC = n1+n2;
            n1 = n2;
            n2 = nC;
      } else {
            if (n1 == 0) {
                  n1 = 1;
                  nC = n1;
                           } else {
                                 n2 = 1;
                                 nC = n2;
                           }
                     }
                     postMessage(nC);
                     //chama calculaFibonacci() recursivamente a cada 1 segundo;
                     setTimeout("calculaFibonacci()",1000);
               }

               calculaFibonacci();
