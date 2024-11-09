-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: globostudio
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `size` int DEFAULT NULL,
  `color` int DEFAULT NULL,
  `id_category` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `size` (`size`),
  KEY `color` (`color`),
  KEY `id_category` (`id_category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`size`) REFERENCES `size` (`id_size`) ON DELETE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`color`) REFERENCES `color` (`id_color`) ON DELETE CASCADE,
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'link-o-loon',3.50,'2024-10-25 19:30:00',1,2,1),(2,'redondo',3.00,'2024-10-25 19:30:00',2,4,1),(3,'globo 1-60',4.00,'2024-10-25 19:30:00',4,7,1),(4,'globo 2-60',4.50,'2024-10-25 19:30:00',6,6,1),(5,'globo metalizado corazon',5.00,'2024-10-25 19:30:00',6,9,2),(6,'globo metalizado estrella',5.50,'2024-10-25 19:30:00',5,8,2),(7,'globo metalizado numero uno',6.00,'2024-10-25 19:30:00',4,9,2),(8,'globo metalizado cara feliz',7.00,'2024-10-25 19:30:00',1,10,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-07 17:45:44
