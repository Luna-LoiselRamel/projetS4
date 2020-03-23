<?php
class Conf {
  static private $databases = array(
    'hostname' => 'webinfo.iutmontp.univ-montp2.fr',  // nom de l'hôte
    'database' => 'ponsr',   // nom de la base de données
    'login' => 'ponsr',        // identifiant
    'password' => 'rh7bb8123'         // mot de passe
  );

  static public function getData($data) {
    return self::$databases[$data];
  }
}

?>
