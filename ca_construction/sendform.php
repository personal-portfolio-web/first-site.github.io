<?php 
$name = trim($_POST['name']); 
// $phone = trim($_POST['tel']); 
$email = trim($_POST['email']); 
$hidden = trim($_POST['title']); 
$message = trim($_POST['message']);
$fromMail = 'devis@ca-construct.fr'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'CONTACT FORM'; //Заголовок письма
$emailTo = 'devis@ca-construct.fr'; //Ваша почта
$subject = 'Demande de devis ( www.ca-construct.fr)'; 
$subject = '=?utf-8?b?'.base64_encode($subject).'?='; 
$headers = "Content-type: text/html; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "<strong>CONTACT FORM : www.ca-construct.fr</strong> <br> <strong>Title:</strong> $hidden <br> <strong>Nom:</strong> $name <br> <strong>Mail:</strong> $email <br> <strong>Message:</strong> $message"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($email) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>