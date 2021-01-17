<?php
    header('Content-Type: application/json');

      $studenti = [
          [
            'nome' => 'Chiara',
            'eta' => '28'
          ],
          [
            'nome' => 'Luigi',
            'eta' => '18'
          ],
          [
            'nome' => 'Anselmo',
            'eta' => '30'
          ],
          [
            'nome' => 'Tullio',
            'eta' => '17'
          ],
          [
            'nome' => 'Denis',
            'eta' => '44'
          ],
          [
            'nome' => 'Alessandro',
            'eta' => '12'
          ],
          [
            'nome' => 'Azzurra',
            'eta' => '28'
          ],
          [
            'nome' => 'Paolo',
            'eta' => '31'
          ]

          ];
    echo json_encode($studenti);
?>