<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root"; 
$password = "";  
$dbname = "sensor_data";  // Asegúrate de que el nombre de la BD sea correcto

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("❌ Conexión fallida: " . $conn->connect_error);
} 
echo "✅ Conexión exitosa a la base de datos.<br>";

// Verificar si se recibieron los datos
if (isset($_POST["temperature"]) && isset($_POST["humidity"])) {
    $temperature = $_POST["temperature"];
    $humidity = $_POST["humidity"];

    // Evitar inyección SQL
    $temperature = $conn->real_escape_string($temperature);
    $humidity = $conn->real_escape_string($humidity);

    // Insertar en la base de datos
    $sql = "INSERT INTO sensores (temperatura, humedad) VALUES ('$temperature', '$humidity')";

    if ($conn->query($sql) === TRUE) {
        echo "✅ Datos insertados correctamente.";
    } else {
        echo "❌ Error al insertar: " . $conn->error;
    }
} else {
    echo "⚠ No se recibieron datos.";
}

// Cerrar conexión
$conn->close();
?>
