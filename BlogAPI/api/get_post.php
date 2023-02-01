<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    include_once '../config/database.php';
    include_once '../class/blog.php';
    $database = new Database();
    $db = $database->getConnection();
    $item = new Blog($db);
    $item->id = isset($_GET['id']) ? $_GET['id'] : die();
  
    $item->getPostDetails();
    if($item->id != null){
        // create array
        $post = array(
            "id" => $item->id,
            "title" => $item->title,
            "content" => $item->content,
            "display_image" => $item->display_image
        );
      
        http_response_code(200);
        echo json_encode($post);
    }
      
    else{
        http_response_code(404);
        echo json_encode("Post details not found.");
    }
?>