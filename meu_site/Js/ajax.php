<?php

//TEMPO
sleep(1);
//PRINT DA MINHA POSTAGEM

$post = filter_input_array(INPUT_POST, FILTER_DEFAULT);
//print_r($post);
echo json_encode($post);