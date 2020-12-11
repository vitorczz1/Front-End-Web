
<?php

if (isset ($_POST['nome'])){

  $arq = "alunos.txt"; 
        $file = fopen($arq, "a"); //Criar novo arquivo
    
        $atributos = array(
                       'Nome' => $_POST['nome'],
                       'RA' => $_POST['ra'],
                       'Idade' => $_POST['idade'],
                       'Sexo' => $_POST['sexo'],
                       'Telefone' => $_POST['telefone'],
                       'Endereco' => $_POST['endereco'],
                       'E-mail' => $_POST['email'],
        );

        if (($_POST['nome'] && $_POST['ra'] && $_POST['idade'] && $_POST['sexo'] && $_POST['telefone'] && $_POST['endereco'] && $_POST['email']) == ""){ //Se algum atributo não for preenchido
          echo '<script type="text/javascript">';
            echo 'alert("Há algum dado faltando no cadastro !")';
         echo '</script>';
        }

        else{
          echo '<script type="text/javascript">';
            echo 'alert("Os dados foram cadastrados com Sucesso !")';
         echo '</script>';
        
        //Salvar o vetor no arquivo

        asort($atributos);

        foreach($atributos as $chave => $valor){
            $atributos = $chave . ": " . $valor . ",";

            fwrite($file, $atributos);
        }
        fclose($file);
      }
}

?>

<!DOCTYPE html>

<html lang = "pt-br">

<head>
 
  <meta charset = "utf-8"/> 

  <link rel="stylesheet" href="style.css">

  <title> Cadastrados </title>
 
</head>

<body>
    <header id = "cabecalho2">
  
        <img src = "logo_ft.png" alt="Logo da FT" class = "ft">
        <img src = "logo_unicamp.png" alt="Logo da Unicamp" class = "unicamp">
        
    </header>

    <div id = "menu">
        <p> <a href = "index.html"><b> PÁGINA INICIAL </b></a> </p>
     </div>
 
    <div id="cadastrados">
        <h2> Aluno(s) Cadastrados:  </h2>
    </div>

<?php
if (isset ($_POST['nome'])){

 $file= fopen($arq, "r");

   while(($linha = fgets($file)) !== false) //lê linha a linha 
   { 
       $atributosarq = explode(",", $linha);  //Tira a virgula ao final da linha
   
       foreach($atributosarq as $chave)
       { 
           echo $chave . "<br />";

           if (strstr($chave, '@')){ //se a string conter @
            echo "<br />";
           }
       }
   }
   fclose($file);
  }
?>

</body>

</html>


