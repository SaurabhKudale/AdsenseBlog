<?php
    class Blog{
        // Connection
        private $conn;
        // Table
        private $db_table = "blog_master";
        // Columns
        public $id;
        public $title;
        public $content;
        public $display_image;
        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }
        // GET ALL
        public function getBlogs(){
            $sqlQuery = "SELECT id, title, content, display_image FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }
        // CREATE
        // public function createEmployee(){
        //     $sqlQuery = "INSERT INTO
        //                 ". $this->db_table ."
        //             SET
        //                 name = :name, 
        //                 email = :email, 
        //                 age = :age, 
        //                 designation = :designation, 
        //                 created = :created";
        
        //     $stmt = $this->conn->prepare($sqlQuery);
        
        //     // sanitize
        //     $this->name=htmlspecialchars(strip_tags($this->name));
        //     $this->email=htmlspecialchars(strip_tags($this->email));
        //     $this->age=htmlspecialchars(strip_tags($this->age));
        //     $this->designation=htmlspecialchars(strip_tags($this->designation));
        //     $this->created=htmlspecialchars(strip_tags($this->created));
        
        //     // bind data
        //     $stmt->bindParam(":name", $this->name);
        //     $stmt->bindParam(":email", $this->email);
        //     $stmt->bindParam(":age", $this->age);
        //     $stmt->bindParam(":designation", $this->designation);
        //     $stmt->bindParam(":created", $this->created);
        
        //     if($stmt->execute()){
        //        return true;
        //     }
        //     return false;
        // }
        // // READ single
        public function getPostDetails(){
            $sqlQuery = "SELECT
                        id, 
                        title, 
                        content, 
                        display_image
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(1, $this->id);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->id = $dataRow['id'];
            $this->title = $dataRow['title'];
            $this->content = $dataRow['content'];
            $this->display_image = $dataRow['display_image'];
        }        

        // // UPDATE
        // public function updateEmployee(){
        //     $sqlQuery = "UPDATE
        //                 ". $this->db_table ."
        //             SET
        //                 name = :name, 
        //                 email = :email, 
        //                 age = :age, 
        //                 designation = :designation, 
        //                 created = :created
        //             WHERE 
        //                 id = :id";
        
        //     $stmt = $this->conn->prepare($sqlQuery);
        
        //     $this->name=htmlspecialchars(strip_tags($this->name));
        //     $this->email=htmlspecialchars(strip_tags($this->email));
        //     $this->age=htmlspecialchars(strip_tags($this->age));
        //     $this->designation=htmlspecialchars(strip_tags($this->designation));
        //     $this->created=htmlspecialchars(strip_tags($this->created));
        //     $this->id=htmlspecialchars(strip_tags($this->id));
        
        //     // bind data
        //     $stmt->bindParam(":name", $this->name);
        //     $stmt->bindParam(":email", $this->email);
        //     $stmt->bindParam(":age", $this->age);
        //     $stmt->bindParam(":designation", $this->designation);
        //     $stmt->bindParam(":created", $this->created);
        //     $stmt->bindParam(":id", $this->id);
        
        //     if($stmt->execute()){
        //        return true;
        //     }
        //     return false;
        // }
        // // DELETE
        // function deleteEmployee(){
        //     $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
        //     $stmt = $this->conn->prepare($sqlQuery);
        
        //     $this->id=htmlspecialchars(strip_tags($this->id));
        
        //     $stmt->bindParam(1, $this->id);
        
        //     if($stmt->execute()){
        //         return true;
        //     }
        //     return false;
        // }
    }
?>