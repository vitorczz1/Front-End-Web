 <?php

  echo '<!DOCTYPE html> 
          <head>
           <style>
             table{
               border-collapse:collapse;
               border:1px solid black;
             }

             td.white{
               width:30px; 
               height:30px; 
               background-color: white;
             }

             td.black{
              width:30px; 
              height:30px; 
              background-color: black;
            }
           </style>
          </head>
          <body>
       <table>';

  $x = 0;

	for($i = 0; $i <= 8; $i++){
		echo '<tr>';
			for($k = 0; $k <= 8; $k++){

				if($x == 0){
						echo '<td class = "white"></td>';
            $x = 1;
        }

        else{
					  echo '<td class = "black"></td>';
						$x = 0;
        }	
			}
		echo '</tr>';
	  }

    echo '</table>
         </body>
        </html>';

 ?>