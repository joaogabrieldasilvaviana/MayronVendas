<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol em Tema Escuro</title>
    <style>
        body {
            background-color: #121212;
            color: #e0e0e0;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #ffcc00;
            font-size: 3em;
            margin-bottom: 0.5em;
        }
        p {
            font-size: 1.2em;
            margin: 0 0 1.5em 0;
        }
        .image-gallery {
            margin: 20px 0;
        }
        .image-gallery img {
            max-width: 100%;
            height: auto;
            border: 2px solid #ffcc00;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .image-gallery img:hover {
            transform: scale(1.05);
        }
        .goal-message {
            display: none;
            font-size: 2em;
            color: #ffcc00;
            margin-top: 20px;
        }
        .button {
            background-color: #ffcc00;
            border: none;
            color: #121212;
            padding: 15px 25px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 1.2em;
            border-radius: 5px;
            cursor: pointer;
            margin: 20px 0;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #e0a700;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo ao Mundo do Futebol!</h1>
        <p>Aqui você pode explorar imagens e GIFs relacionados ao futebol. Aproveite!</p>
        
        <div class="image-gallery">
            <!-- Imagem padrão do futebol -->
            <img id="goalImage" src="imagem-futebol.jpg" alt="Imagem de Futebol" onclick="makeGoal()">
        </div>

        <div class="goal-message" id="goalMessage">Goooooool!!!</div>

        <a href="https://www.exemplo.com" class="button" target="_blank">Visite nosso site parceiro</a>
    </div>

    <script>
        function makeGoal() {
            var image = document.getElementById('goalImage');
            var message = document.getElementById('goalMessage');

            // Mudar a imagem para a imagem de "gol"
            image.src = 'imagem-gol.jpg';

            // Mostrar a mensagem de "Goooooool!!!"
            message.style.display = 'block';
        }
    </script>
</body>
</html>
