<?php
print_r($_POST);


$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$form_phone = $_POST['form_phone'];
$form_mail = $_POST['form_mail'];
$couverture = $_POST['couverture'];
$isolation = $_POST['isolation'];
$maconnerie = $_POST['maconnerie'];
$peinture = $_POST['peinture'];
$ville = $_POST['ville'];
$description = $_POST['description'];
if($couverture == on){
    $couverture = 'Couverture';
}
if($isolation == on){
    $isolation = 'Isolation';
}
if($maconnerie == on){
    $maconnerie = 'Maconnerie';
}
if($peinture == on){
    $peinture = 'Peinture';
}
$fromMail = 'devis@ca-construct.fr'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'DEMANDE DE'; //Заголовок письма
$emailTo = 'devis@ca-construct.fr'; //Ваша почта
$subject = 'Demande de devis ( www.ca-construct.fr)'; 
$subject = '=?utf-8?b?'.base64_encode($subject).'?='; 
$headers = "Content-type: text/html; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "<strong>Demande de devis : www.ca-construct.fr</strong> <br> 
<strong>Nom: </strong> $first_name <br> 
<strong>Prenom: </strong> $last_name <br> 
<strong>Mail: </strong><a href='mailto:$form_mail'>$form_mail</a><br> 
<strong>Phone: </strong> <a href='tel:$form_phone'> $form_phone</a><br>
<strong>Type de travaux: </strong> $couverture / $isolation / $maconnerie / $peinture <br>
<strong>Ville d'intervention: </strong> $ville <br>
<strong>Message : </strong> $description <br>
"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($first_name) > 0) { 
     $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
 return;
} 
 ?>





