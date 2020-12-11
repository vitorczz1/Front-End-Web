 <?php

 $Cor = array('A' => 'Azul', 
              'B' => 'Verde', 
              'c' => 'Vermelho'
 );
 
 $Cor = array_map ('strtoupper', $Cor);

 print_r ($Cor);

 /* Exemplo */
 echo "<br /> <br /> Exemplo de que funciona com qualquer outro vetor: <br />";

 $pessoa = array('g' => 'GUIlherme', 
                 'p' => 'PalERMO', 
                 'c' => 'CoElHo'
 );

 $pessoa = array_map ('strtoupper', $pessoa);

 print_r ($pessoa);

 ?> 