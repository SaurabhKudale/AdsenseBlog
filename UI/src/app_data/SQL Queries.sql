select * from car_master;
select * from car_interior_images;
select * from car_colors;
select * from car_color_images;
select * from car_overview;
CREATE DATABASE `blogdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `car_color_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(450) NOT NULL,
  `alt` varchar(45) NOT NULL,
  `fk_cc_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `car_colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(250) NOT NULL,
  `fk_cm_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK CM ID_idx` (`fk_cm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `car_interior_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `alt` varchar(150) NOT NULL,
  `fk_cm_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK CM_idx` (`fk_cm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `car_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model` varchar(250) NOT NULL,
  `variant` varchar(150) NOT NULL,
  `price` varchar(150) NOT NULL,
  `fuelType` varchar(150) NOT NULL,
  `transmission` varchar(150) NOT NULL,
  `dieselEnginePower` varchar(150) NOT NULL,
  `petrolEnginePower` varchar(150) NOT NULL,
  `bootSpace` varchar(150) NOT NULL,
  `mileage` varchar(150) NOT NULL,
  `groundClearance` varchar(150) NOT NULL,
  `airbags` varchar(150) NOT NULL,
  `powerWindows` varchar(150) NOT NULL,
  `abs` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `car_overview` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tabheader` varchar(150) NOT NULL,
  `tabdescription` varchar(5000) NOT NULL,
  `fk_cm_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


