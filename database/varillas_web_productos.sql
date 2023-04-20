-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: varillas_web
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `nombre_producto` varchar(60) NOT NULL,
  `cantidad_disponible` int NOT NULL,
  `precio_orientativo` decimal(4,2) DEFAULT NULL,
  `es_personalizable` tinyint(1) NOT NULL,
  `grupo_producto` varchar(20) DEFAULT NULL,
  `unidad_medida` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`nombre_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES ('Chorizo bodega',4500,13.78,0,'embutido','gr'),('Chorizo cantimpalo',18,2.38,0,'embutido','uds'),('Chuletas',449,3.50,0,'cerdo','gr'),('Chuletas cordero',2500,13.50,0,'cordero','gr'),('Cinta de lomo adobada',4000,4.40,0,'cerdo','gr'),('Cinta de lomo ajillo',6000,4.00,0,'cerdo','gr'),('Cordero entero',10,32.00,0,'cordero','uds'),('Falda',7400,5.76,0,'ternera','gr'),('Filetes',60,7.89,0,'ternera','gr'),('Jamón bodega',5000,16.87,0,'embutido','gr'),('Jamón de York',5000,4.70,0,'embutido','gr'),('Jamón ibérico',1000,56.70,0,'embutido','gr'),('Lomo ibérico',2800,35.42,0,'embutido','gr'),('Mortadela aceitunas',3000,5.65,0,'embutido','gr'),('Pierna',4687,16.99,0,'cordero','uds'),('Queso curado',2450,49.90,0,'embutido','gr'),('Queso semi curado',4000,46.60,0,'embutido','gr'),('Torreznos de Soria',50,3.50,0,'cerdo','uds');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 21:27:17
