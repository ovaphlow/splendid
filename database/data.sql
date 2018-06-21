-- --------------------------------------------------------
-- 主机:                           192.168.1.161
-- 服务器版本:                        10.2.14-MariaDB - MariaDB Server
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 正在导出表  splendid.customer 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` (`id`, `uuid`, `user_uuid`, `name`, `mobile`, `province`, `city`, `district`, `address`, `postage`) VALUES
	(1, '6bd717df-7441-11e8-8fcf-da2d521367cf', '672b74b1-7429-11e8-8fcf-da2d521367cf', '姓名', '12313123', '230000', '230100', '230109', '世茂大道100号', 1),
	(2, 'cb807dec-7441-11e8-8fcf-da2d521367cf', '672b74b1-7429-11e8-8fcf-da2d521367cf', '姓名', '12313123', '230000', '230100', '230109', '世茂大道100号', 1),
	(3, 'c021b9f8-7441-11e8-8fcf-da2d521367cf', '672b74b1-7429-11e8-8fcf-da2d521367cf', '姓名', '12313123', '230000', '230100', '230109', '世茂大道100号', 1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;

-- 正在导出表  splendid.user 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `uuid`, `account`, `password`, `name`, `create_time`, `valid`) VALUES
	(1, 'fa8d568c-7428-11e8-8fcf-da2d521367cf', 'ovaph', 'ecd46538a0f71face9ae2df3a49c177f', 'ovaph', '2018-06-21 06:10:29', 1),
	(2, '4f0fb3f7-7429-11e8-8fcf-da2d521367cf', 'admin', '5058f1af8388633f609cadb75a75dc9d', '管理员', '2018-06-21 06:12:51', 0),
	(3, '672b74b1-7429-11e8-8fcf-da2d521367cf', 'test', '5058f1af8388633f609cadb75a75dc9d', '测试', '2018-06-21 06:13:32', 1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
