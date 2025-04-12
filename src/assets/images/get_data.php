<?php
// Permitir acceso desde cualquier origen (CORS)
header("Access-Control-Allow-Origin: *");

// Especificar que la respuesta será en formato JSON
header("Content-Type: application/json");

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sensor_data"; // Asegúrate de que esta base exista

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(["error" => "❌ Conexión fallida: " . $conn->connect_error]));
}

// Consulta para obtener los últimos 10 registros de la tabla "sensores"
$sql = "SELECT * FROM sensores ORDER BY id DESC LIMIT 10";
$result = $conn->query($sql);

// Arreglo para guardar los datos
$data = [];

if ($result->num_rows > 0) {
    // Recorrer los resultados y guardarlos en el arreglo
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    // Enviar los datos en formato JSON
    echo json_encode($data);
} else {
    // Si no hay resultados
    echo json_encode(["message" => "No hay datos disponibles."]);
}

// Cerrar conexión
$conn->close();
?>
