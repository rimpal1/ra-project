-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: job_portal
-- ------------------------------------------------------
-- Server version	8.0.0-dmr-log

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

--
-- Table structure for table `job_interview_assignment`
--

DROP TABLE IF EXISTS `job_interview_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_interview_assignment` (
  `dx_esrd` decimal(43,0) DEFAULT NULL,
  `dx_mi` bigint(21) unsigned DEFAULT NULL,
  `dx_stroke` bigint(21) unsigned DEFAULT NULL,
  `dx_htn` bigint(21) unsigned DEFAULT NULL,
  `dx_lpd` bigint(21) unsigned DEFAULT NULL,
  `dx_obe` bigint(21) unsigned DEFAULT NULL,
  `dx_dneu` bigint(21) unsigned DEFAULT NULL,
  `dx_cad` bigint(21) unsigned DEFAULT NULL,
  `dx_pvd` bigint(21) unsigned DEFAULT NULL,
  `dx_anm` bigint(21) unsigned DEFAULT NULL,
  `POP` varchar(4) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_interview_assignment`
--

LOCK TABLES `job_interview_assignment` WRITE;
/*!40000 ALTER TABLE `job_interview_assignment` DISABLE KEYS */;
INSERT INTO `job_interview_assignment` VALUES (1,1,3,39,38,19,8,12,6,4,'both'),(2,1,2,37,35,15,5,17,4,13,'ckd'),(2,2,8,71,62,30,16,22,9,16,'diab');
/*!40000 ALTER TABLE `job_interview_assignment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24  2:39:50
