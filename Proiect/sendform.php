<?php 
$name = trim($_POST['name']); 
$phone = trim($_POST['tel']); 
$email = trim($_POST['email']); 
$hidden = trim($_POST['title']); 
$fromMail = 'info@hostiman.ru'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'colia-b13@mail.ru'; //Ваша почта
$subject = 'Форма обратной связи site.com'; 
$subject = '=?utf-8?b?'. base64_encode($subject) .'?='; 
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n"; 
$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n"; 

// Содержимое письма 
$body = "Получено письмо с сайта \n Имя: $name\nТелефон: $phone\Почта: $email \n$hidden"; 

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) { 
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail ); 
return;
} 

?>