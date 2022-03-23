if ((!empty($data['message']['text'])) and ($data['message']['text'] == '/start')){
$parameters = 
    array(
        'chat_id' => $data['message']['chat']['id'], 
        'text' => 'Здравствуйте!'
    );
send('sendMessage', $parameters); 
};

function send($method, $data)
{
    $url = "https://api.telegram.org/bot11111111111111111111111111111. "/" . $method;

    if (!$curld = curl_init()) {
        exit;
    }
    curl_setopt($curld, CURLOPT_POST, true);
    curl_setopt($curld, CURLOPT_POSTFIELDS, $data);
    curl_setopt($curld, CURLOPT_URL, $url);
    curl_setopt($curld, CURLOPT_RETURNTRANSFER, true);
    $output = curl_exec($curld);
    curl_close($curld);
    return $output;
}
