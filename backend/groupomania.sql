-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 02, 2021 at 04:22 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `david`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL,
  `PostId` int(11) NOT NULL,
  KEY `UserId` (`UserId`),
  KEY `PostId` (`PostId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `content`, `createdAt`, `updatedAt`, `UserId`, `PostId`) VALUES
(22, 'I can smell the good music from here, when is it due?', '2021-10-26 14:20:30', '2021-10-26 14:20:30', 22, 68),
(23, 'Thank you Patrick, I\'ll keep you updated!', '2021-10-27 14:20:30', '2021-10-27 14:20:30', 23, 68),
(32, 'Wow, cheers Austyn!', '2021-10-28 19:31:42', '2021-10-28 19:31:42', 22, 85),
(33, 'Gnarly trick from Josh!', '2021-10-29 14:50:09', '2021-10-29 14:50:09', 23, 6),
(35, 'nice pic', '2021-10-29 19:31:42', '2021-10-29 19:31:42', 23, 85),
(36, 'Nice one!', '2021-10-30 20:29:06', '2021-10-30 20:29:06', 24, 68),
(37, 'He is so good, he only tried a few times...', '2021-10-30 20:30:18', '2021-10-30 20:30:18', 24, 6),
(39, 'Aight, it was actually three blocks from my crib guys!', '2021-10-31 02:49:50', '2021-10-31 02:49:50', 27, 85),
(40, 'Love park forever!', '2021-10-31 02:50:28', '2021-10-31 02:50:28', 27, 6),
(41, 'It was a nice show!', '2021-10-31 02:52:07', '2021-10-31 02:52:07', 26, 87),
(42, 'Please, send me the promo dude, it will be played in my forthcoming radio show!', '2021-10-31 02:52:53', '2021-10-31 02:52:53', 26, 68),
(43, 'Yeeeeah mate!', '2021-10-31 16:44:18', '2021-10-31 16:44:18', 23, 88);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PostId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  KEY `PostId` (`PostId`),
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `createdAt`, `updatedAt`, `PostId`, `UserId`) VALUES
(3, '2021-10-06 17:30:22', '2021-10-06 17:30:22', 6, 22),
(202, '2021-10-29 11:37:54', '2021-10-29 11:37:54', 68, 23),
(203, '2021-10-29 14:49:33', '2021-10-29 14:49:33', 6, 23),
(204, '2021-10-30 20:28:55', '2021-10-30 20:28:55', 85, 24),
(206, '2021-10-31 02:49:29', '2021-10-31 02:49:29', 85, 27),
(207, '2021-10-31 02:52:08', '2021-10-31 02:52:08', 87, 26),
(208, '2021-10-31 16:43:22', '2021-10-31 16:43:22', 88, 23);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `imagUrl` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `content`, `imagUrl`, `createdAt`, `updatedAt`, `userId`) VALUES
(6, 'Josh Kalis\' frontside noseblunt slide, shot by Mike Blabac back in \'04 at Love Park, Philly (PA).', 'https://skatenewswire.com/wp-content/uploads/2019/07/josh-kalis-love-park.jpg', '2021-10-06 14:24:28', '2021-10-06 14:24:28', 22),
(68, 'About to put and end to this album I\'ve been working on this year.', 'https://x3h7a3q5.stackpathcdn.com/wp-content/uploads/2019/06/interview-frits-wentink.jpg', '2021-10-27 19:52:19', '2021-10-31 01:06:13', 23),
(85, 'Austyn Gillette rippin\' the streets of Detroit with the whole Habitat team last spring!', 'http://a.espncdn.com/photo/2012/0305/as_skate_gillette_austyn_576.jpg', '2021-10-29 16:35:17', '2021-10-30 21:54:04', 23),
(87, 'Yo guys, last friday I have played a bunch of records for the Boiler Room showcase at Moma in NYC, check the link in bio for more info!', 'https://i.ytimg.com/vi/RGcwh17_6Cc/maxresdefault.jpg', '2021-10-31 02:49:12', '2021-10-31 02:49:12', 27),
(88, 'Byron the Aquarius is recording as we speak in the Apron Records Studios in London, more info pretty soon!', 'https://thevinylfactory.com/wp-content/uploads/2020/08/Byron-the-Aquarius-new-ep-apron-vinyl-462x280.jpg', '2021-10-31 02:51:48', '2021-10-31 16:44:10', 26);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bio` text COLLATE utf8_unicode_ci NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '1',
  `createAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `picture`, `bio`, `isAdmin`, `createAt`, `updateAt`) VALUES
(22, 'Patrick Pablo', 'patrickpablo@gmail.io', '$2b$10$zBj3hLyPgTt7Elv2EHLZN.UkoFFM2LHjNEYtDk5TV.6usebEjtdJW', 'https://www.beyeah.net/wp-content/uploads/2018/05/project-pablo-interview-beyeah-750x500.jpg', 'Patrick Holland is a Canadian musician based out of Montreal, Quebec. Over the years he\'s released music under a variety of aliases, most notably Project Pablo & Jump Source, while also running a string of labels.', 0, '2021-10-05 15:00:00', '2021-10-30 18:00:00'),
(23, 'David Cabanne', 'davo@devmail.com', '$2b$10$4GQPvRvHYA/CWRtxQ4FFKuSVmZIKYz1ImuLFlsjqGfxpuAgzNb4ta', 'https://i1.sndcdn.com/avatars-It3w6QzXkHXAy6e0-ihcz4g-t240x240.jpg', 'This is my new bio, Davo, future web developer!', 1, '2021-10-12 16:00:00', '2021-10-27 20:00:00'),
(24, 'Frits Wentink', 'fritswentink@gmail.com', '$2b$10$rT2jNA5ZMV4YFvO5bOl3hesfxT0KKFsYCZct0.mYPjZWSVvo/a3F6', 'https://whenwedip.com/wp-content/uploads/2015/09/frits452996170671659834_n.png', 'DJ and producer based in Amsterdam, Netherlands. Head honcho of Will & Ink and Bobby Donny records.', 0, '2021-10-30 20:00:00', '2021-10-30 20:00:00'),
(25, 'Henry Wu', 'henry@gmail.com', '$2b$10$JQ244cIruyBtyfEsOdcgN.xbyPdO7GzxLWq1QZgWzsLzvoCkQZXMS', 'https://www.tsugi.fr/wp-content/uploads/2020/07/0020192420_10.jpg', 'Kamaal Williams (born Henry Wu, 1989) is a British musician and record producer. Williams rose to prominence alongside drummer Yussef Dayes in 2016 as one half of the short-lived London-based jazz group Yussef Kamaal', 0, '2021-10-31 02:00:00', '2021-10-31 02:00:00'),
(26, 'Steven Julien', 'steven@gmail.com', '$2b$10$7nnYwU8G1l2ZzlS9UIY7m.dO5jICQRYyubLNuOY4U9K19V8zgcU7W', 'https://factmag-images.s3.amazonaws.com/wp-content/uploads/2016/06/StevenJulien-CarysHuws-FACTmagazine4-1200.jpg', '', 0, '2021-10-31 02:00:00', '2021-10-31 02:00:00'),
(27, 'Kyle Hall', 'kmfh@gmail.com', '$2b$10$KY6WXx5HRnjy.q4J8fA0heUi9W43tV0Y1yLN3O7BSWwoobysQvepW', 'http://www.phonographecorp.com/wp-content/uploads/2013/06/Kyle-Hall.jpg', '', 0, '2021-10-31 02:00:00', '2021-10-31 02:00:00');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`);

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
