 <?php

 $palavras = array("abcd",
              "abc",
              "de",
              "hjjj",
              "g",
              "wer"
 );

  $palavras = array_map ('strlen', $palavras);

  $menor = min($palavras);
  $maior = max($palavras);

  echo "O menor comprimento é $menor. <br />";
  echo "O maior comprimento é $maior.";

  /*Exemplo*/
  echo "<br /> <br /> Exemplo de que funciona com qualquer outro vetor: <br />";

  $pessoa = array("gui",
              "gu",
              "lherme",
              "gui",
              "guilh",
              "guilherme"
 );

  $pessoa = array_map ('strlen', $pessoa);

  $menor2 = min($pessoa);
  $maior2 = max($pessoa);

  echo "O menor comprimento é $menor2. <br />";
  echo "O maior comprimento é $maior2.";

 ?> 