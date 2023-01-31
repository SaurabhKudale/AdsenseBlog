<?php 
    class Database {
        // PROD
        // host: "sql878.main-hosting.eu",
        // user: "u722086253_site_user",
        // password: "v1AV?X65@W",
        // database: "u722086253_blogdb",
        
        //Dev/Local
        // private $host = "127.0.0.1";
        // private $database_name = "phpapidb";
        // private $username = "root";
        // private $password = "xxxxxxxx";

        private $host = "sql878.main-hosting.eu";
        private $database_name = "u722086253_blogdb";
        private $username = "u722086253_site_user";
        private $password = "v1AV?X65@W";
        public $conn;
        public function getConnection(){
            $this->conn = null;
            try{
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database_name, $this->username, $this->password);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Database could not be connected: " . $exception->getMessage();
            }
            return $this->conn;
        }
    }  
?>