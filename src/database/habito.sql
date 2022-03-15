-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: habito
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS `habito`;
CREATE DATABASE `habito`;
USE `habito`;

--
-- Table structure for table `cartproducts`
--

DROP TABLE IF EXISTS `cartproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `cartId` (`cartId`),
  CONSTRAINT `cartProducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `cartProducts_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartproducts`
--

LOCK TABLES `cartproducts` WRITE;
/*!40000 ALTER TABLE `cartproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `cartproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Remeras',NULL,NULL,NULL,'category_1',null),(2,'Pantalones',NULL,NULL,NULL,'category_2',null),(3,'Camisas',NULL,NULL,NULL,'category_3',null),(4,'Shorts',NULL,NULL,NULL,'category_4',null),(5,'Buzos',NULL,NULL,NULL,'category_5',null);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#FF0000'),(2,' #00FFD8'),(3,'#000CFF'),(4,' #FFFF00'),(5,'#000000'),(6,'#FFFFFF'),(7,'#8700FF'),(8,' #906000'),(9,' #F0D9AB');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colorsproducts`
--

DROP TABLE IF EXISTS `colorsproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colorsproducts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `colorId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `colorId` (`colorId`),
  KEY `productId` (`productId`),
  CONSTRAINT `colorsProducts_ibfk_1` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  CONSTRAINT `colorsProducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colorsproducts`
--

LOCK TABLES `colorsproducts` WRITE;
/*!40000 ALTER TABLE `colorsproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `colorsproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(1000) NOT NULL,
  `quantity` int(11) NOT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Musculosa',2000.00,0,'convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',8,'http://dummyimage.com/171x100.png/ff4444/ffffff','http://dummyimage.com/221x100.png/cc0000/ffffff','http://dummyimage.com/142x100.png/5fa2dd/ffffff','http://dummyimage.com/175x100.png/cc0000/ffffff',NULL,NULL,NULL,1),(2,'Polo',3550.00,0,'vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel',10,'http://dummyimage.com/169x100.png/cc0000/ffffff','http://dummyimage.com/119x100.png/ff4444/ffffff','http://dummyimage.com/218x100.png/5fa2dd/ffffff','http://dummyimage.com/183x100.png/dddddd/000000',NULL,NULL,NULL,1),(3,'Remera',2500.00,0,'iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean',7,'http://dummyimage.com/223x100.png/dddddd/000000','http://dummyimage.com/155x100.png/5fa2dd/ffffff','http://dummyimage.com/184x100.png/5fa2dd/ffffff','http://dummyimage.com/165x100.png/cc0000/ffffff',NULL,NULL,NULL,1),(4,'Jean',7000.00,0,'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet',8,'http://dummyimage.com/227x100.png/ff4444/ffffff','http://dummyimage.com/138x100.png/cc0000/ffffff','http://dummyimage.com/121x100.png/ff4444/ffffff','http://dummyimage.com/184x100.png/ff4444/ffffff',NULL,NULL,NULL,2),(5,'Joggin',4150.00,0,'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id',11,'http://dummyimage.com/143x100.png/dddddd/000000','http://dummyimage.com/239x100.png/dddddd/000000','http://dummyimage.com/205x100.png/dddddd/000000','http://dummyimage.com/166x100.png/ff4444/ffffff',NULL,NULL,NULL,2),(6,'Pantalon Formal',6000.00,0,'congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam',7,'http://dummyimage.com/147x100.png/5fa2dd/ffffff','http://dummyimage.com/143x100.png/cc0000/ffffff','http://dummyimage.com/109x100.png/cc0000/ffffff','http://dummyimage.com/117x100.png/dddddd/000000',NULL,NULL,NULL,2),(7,'Bermuda',4300.00,0,'vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices',1,'http://dummyimage.com/210x100.png/dddddd/000000','http://dummyimage.com/100x100.png/5fa2dd/ffffff','http://dummyimage.com/198x100.png/cc0000/ffffff','http://dummyimage.com/179x100.png/ff4444/ffffff',NULL,NULL,NULL,4),(8,'Malla',3500.00,0,'rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id',8,'http://dummyimage.com/146x100.png/dddddd/000000','http://dummyimage.com/230x100.png/ff4444/ffffff','http://dummyimage.com/148x100.png/5fa2dd/ffffff','http://dummyimage.com/104x100.png/ff4444/ffffff',NULL,NULL,NULL,4),(9,'Biker',3000.00,0,'rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus',9,'http://dummyimage.com/213x100.png/ff4444/ffffff','http://dummyimage.com/151x100.png/5fa2dd/ffffff','http://dummyimage.com/208x100.png/5fa2dd/ffffff','http://dummyimage.com/162x100.png/5fa2dd/ffffff',NULL,NULL,NULL,4),(10,'Camisa manga larga',6250.00,0,'tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat',6,'http://dummyimage.com/118x100.png/dddddd/000000','http://dummyimage.com/193x100.png/5fa2dd/ffffff','http://dummyimage.com/200x100.png/ff4444/ffffff','http://dummyimage.com/246x100.png/dddddd/000000',NULL,NULL,NULL,3),(11,'Camisa manga corta',5000.00,0,'risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis',7,'http://dummyimage.com/194x100.png/dddddd/000000','http://dummyimage.com/163x100.png/ff4444/ffffff','http://dummyimage.com/187x100.png/dddddd/000000','http://dummyimage.com/193x100.png/ff4444/ffffff',NULL,NULL,NULL,3),(12,'Camisa de vestir',7500.00,0,'eu magna vulputate luctus cum sociis natoque penatibus et magnis',10,'http://dummyimage.com/200x100.png/cc0000/ffffff','http://dummyimage.com/211x100.png/5fa2dd/ffffff','http://dummyimage.com/154x100.png/dddddd/000000','http://dummyimage.com/226x100.png/cc0000/ffffff',NULL,NULL,NULL,3),(13,'Buzo Canguro',5300.00,0,'ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat',6,'http://dummyimage.com/210x100.png/cc0000/ffffff','http://dummyimage.com/223x100.png/5fa2dd/ffffff','http://dummyimage.com/136x100.png/cc0000/ffffff','http://dummyimage.com/147x100.png/dddddd/000000',NULL,NULL,NULL,5),(14,'Hoddie',5500.00,0,'a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum',4,'http://dummyimage.com/156x100.png/ff4444/ffffff','http://dummyimage.com/125x100.png/5fa2dd/ffffff','http://dummyimage.com/235x100.png/cc0000/ffffff','http://dummyimage.com/241x100.png/dddddd/000000',NULL,NULL,NULL,5),(15,'Buzo',4000.00,0,'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra',6,'http://dummyimage.com/126x100.png/ff4444/ffffff','http://dummyimage.com/238x100.png/5fa2dd/ffffff','http://dummyimage.com/242x100.png/dddddd/000000','http://dummyimage.com/179x100.png/5fa2dd/ffffff',NULL,NULL,NULL,5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productssize`
--

DROP TABLE IF EXISTS `productssize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productssize` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `sizeId` (`sizeId`),
  CONSTRAINT `productssize_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `productssize_ibfk_2` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productssize`
--

LOCK TABLES `productssize` WRITE;
/*!40000 ALTER TABLE `productssize` DISABLE KEYS */;
/*!40000 ALTER TABLE `productssize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,1,NULL,NULL,NULL),(2,0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(500) DEFAULT NULL,
  `password` varchar(500) NOT NULL,
  `statusId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `statusId` (`statusId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Raul','raul@habito.ac.uk','http://dummyimage.com/116x100.png/ff4444/ffffff','habito123',1,NULL,NULL,NULL),(2,'Mary Swamson','swillett0@gmail.com','http://dummyimage.com/116x100.png/ff4444/ffffff','Mary321',2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'habito'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-10 22:10:46
