<?php
    header('Content-Type: application/json');

      $studenti = [
          [
            'nome' => 'Chiara',
            'cognome' => 'Petillo',
            'eta' => '28'
          ],
          [
            'nome' => 'Luigi',
            'cognome' => 'Surreno',
            'eta' => '18'
          ],
          [
            'nome' => 'Anselmo',
            'cognome' => 'Giavelli',
            'eta' => '30'
          ],
          [
            'nome' => 'Tullio',
            'cognome' => 'Tarci',
            'eta' => '17'
          ],
          [
            'nome' => 'Denis',
            'cognome' => 'Sassi',
            'eta' => '44'
          ],
          [
            'nome' => 'Alessandro',
            'cognome' => 'Tarrone',
            'eta' => '12'
          ],
          [
            'nome' => 'Azzurra',
            'cognome' => 'Massilio',
            'eta' => '28'
          ],
          [
            'nome' => 'Paolo',
            'cognome' => 'Vulvio',
            'eta' => '31'
          ]

          ];

        
    echo json_encode($studenti);
?>