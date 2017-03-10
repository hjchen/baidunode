-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-01-23 06:51:29
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(100) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` varchar(200) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`, `status`) VALUES
(6, '精选', 'GFGFkiki', 'img/2.jpg', '2017-01-07 00:00:00', 'GFG', 0),
(7, '娱乐', 'dfdfd', 'img/3.jpeg', '2017-01-12 00:00:00', 'dfdf', 0),
(8, '娱乐', 'dfdfd', 'img/3.jpeg', '2017-01-12 00:00:00', 'dfdf', 0),
(10, '百家', 'dfdf', 'img/1.jpeg', '2017-01-03 00:00:00', 'dff', 0),
(11, '图片', 'dfdfdfd', 'img/2.jpg', '2017-01-14 00:00:00', '来源', 0),
(12, '百家', '嘎嘎嘎嘎', 'img/2.jpg', '2017-01-20 00:00:00', '哈哈哈', 0),
(13, '精选', '尼尔森', 'img/3.jpeg', '2017-01-06 00:00:00', 'ddddggg', 0),
(14, '娱乐', '厉害了', 'img/3.jpeg', '2017-01-08 00:00:00', 'ijijiFFFFhhhf', 1),
(15, '精选', 'jjjj', 'img/1.jpeg', '2017-01-05 00:00:00', 'jdojodGGGG', 1),
(16, '社会', 'JJJJ', 'img/2.jpg', '2017-01-13 00:00:00', 'dddd', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
