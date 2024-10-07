-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2024 at 12:50 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iutest`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `id` int(11) NOT NULL,
  `district_id` int(11) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`id`, `district_id`, `name`) VALUES
(1, 185, 'Primary');

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `id` int(11) NOT NULL,
  `region_id` int(11) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`id`, `region_id`, `name`) VALUES
(15, 1, 'Амударё тумани'),
(16, 1, 'Беруний тумани'),
(17, 1, 'Кегайли тумани'),
(18, 1, 'Қонликўл тумани'),
(19, 1, 'Қораўзак тумани'),
(20, 1, 'Қўнғирот тумани'),
(21, 1, 'Мўйноқ тумани'),
(22, 1, 'Нукус тумани'),
(23, 1, 'Нукус шаҳри'),
(24, 1, 'Тахтакўпир тумани'),
(25, 1, 'Тўрткўл тумани'),
(26, 1, 'Хўжайли тумани'),
(27, 1, 'Чимбой тумани'),
(28, 1, 'Шуманай тумани'),
(29, 1, 'Элликқалъа тумани'),
(30, 2, 'Андижон шаҳри'),
(31, 2, 'Андижон тумани'),
(32, 2, 'Асака тумани'),
(33, 2, 'Балиқчи тумани'),
(34, 2, 'Булоқбоши тумани'),
(35, 2, 'Бўз тумани'),
(36, 2, 'Жалақудуқ тумани'),
(37, 2, 'Избосган тумани'),
(38, 2, 'Қорасув шаҳри'),
(39, 2, 'Қўрғонтепа тумани'),
(40, 2, 'Марҳамат тумани'),
(41, 2, 'Олтинкўл тумани'),
(42, 2, 'Пахтаобод тумани'),
(43, 2, 'Улуғнор тумани'),
(44, 2, 'Хонабод тумани'),
(45, 2, 'Хўжаобод тумани'),
(46, 2, 'Шахрихон тумани'),
(47, 3, 'Бухоро шаҳри'),
(48, 3, 'Бухоро тумани'),
(49, 3, 'Вобкент тумани'),
(50, 3, 'Ғиждувон тумани'),
(51, 3, 'Жондор тумани'),
(52, 3, 'Когон тумани'),
(53, 3, 'Когон шаҳри'),
(54, 3, 'Қоракўл тумани'),
(55, 3, 'Қоровулбозор тумани'),
(56, 3, 'Олот тумани'),
(57, 3, 'Пешку тумани'),
(58, 3, 'Ромитан тумани'),
(59, 3, 'Шофиркон тумани'),
(60, 4, 'Арнасой тумани'),
(61, 4, 'Бахмал тумани'),
(62, 4, 'Ғаллаорол тумани'),
(63, 4, 'Дўстлик тумани'),
(64, 4, 'Ш.Рашидов тумани'),
(65, 4, 'Жиззах шаҳри'),
(66, 4, 'Зарбдор тумани'),
(67, 4, 'Зафаробод тумани'),
(68, 4, 'Зомин тумани'),
(69, 4, 'Мирзачўл тумани'),
(70, 4, 'Пахтакор тумани'),
(71, 4, 'Фориш тумани'),
(72, 4, 'Янгиобод тумани'),
(73, 5, 'Ғузор тумани'),
(74, 5, 'Деҳқонобод тумани'),
(75, 5, 'Қамаши тумани'),
(76, 5, 'Қарши тумани'),
(77, 5, 'Қарши шаҳри'),
(78, 5, 'Касби тумани'),
(79, 5, 'Китоб тумани'),
(80, 5, 'Косон тумани'),
(81, 5, 'Миришкор тумани'),
(82, 5, 'Муборак тумани'),
(83, 5, 'Нишон тумани'),
(84, 5, 'Чироқчи тумани'),
(85, 5, 'Шаҳрисабз тумани'),
(86, 5, 'Яккабоғ тумани'),
(87, 6, 'Зарафшон шаҳри'),
(88, 6, 'Карман тумани'),
(89, 6, 'Қизилтепа тумани'),
(90, 6, 'Конимех тумани'),
(91, 6, 'Навбаҳор тумани'),
(92, 6, 'Навоий шаҳри'),
(93, 6, 'Нурота тумани'),
(94, 6, 'Томди тумани'),
(95, 6, 'Учқудуқ тумани'),
(96, 6, 'Хатирчи тумани'),
(97, 7, 'Косонсой тумани'),
(98, 7, 'Мингбулоқ тумани'),
(99, 7, 'Наманган тумани'),
(100, 7, 'Наманган шаҳри'),
(101, 7, 'Норин тумани'),
(102, 7, 'Поп тумани'),
(103, 7, 'Тўрақўрғон тумани'),
(104, 7, 'Уйчи тумани'),
(105, 7, 'Учқўрғон тумани'),
(106, 7, 'Чортоқ тумани'),
(107, 7, 'Чуст тумани'),
(108, 7, 'Янгиқўрғон тумани'),
(109, 8, 'Булунғур тумани'),
(110, 8, 'Жомбой тумани'),
(111, 8, 'Иштихон тумани'),
(112, 8, 'Каттақўрғон тумани'),
(113, 8, 'Каттақўрғон шаҳри'),
(114, 8, 'Қўшработ тумани'),
(115, 8, 'Нарпай тумани'),
(116, 8, 'Нурабод тумани'),
(117, 8, 'Оқдарё тумани'),
(118, 8, 'Паяриқ тумани'),
(119, 8, 'Пастарғом тумани'),
(120, 8, 'Пахтачи тумани'),
(121, 8, 'Самарқанд тумани'),
(122, 8, 'Самарқанд шаҳри'),
(123, 8, 'Тойлоқ тумани'),
(124, 8, 'Ургут тумани'),
(125, 9, 'Ангор тумани'),
(126, 9, 'Бойсун тумани'),
(127, 9, 'Денов тумани'),
(128, 9, 'Жарқўрғон тумани'),
(129, 9, 'Қизириқ тумани'),
(130, 9, 'Қўмқўрғон тумани'),
(131, 9, 'Музработ тумани'),
(132, 9, 'Олтинсой тумани'),
(133, 9, 'Сариосий тумани'),
(134, 9, 'Термиз тумани'),
(135, 9, 'Термиз шаҳри'),
(136, 9, 'Узун тумани'),
(137, 9, 'Шеробод тумани'),
(138, 9, 'Шўрчи тумани'),
(139, 10, 'Боёвут тумани'),
(140, 10, 'Гулистон тумани'),
(141, 10, 'Гулистон шаҳри'),
(142, 10, 'Мирзаобод тумани'),
(143, 10, 'Оқолтин тумани'),
(144, 10, 'Сайхунобод тумани'),
(145, 10, 'Сардоба тумани'),
(146, 10, 'Сирдарё тумани'),
(147, 10, 'Хавос тумани'),
(148, 10, 'Ширин шаҳри'),
(149, 10, 'Янгиер шаҳри'),
(150, 11, 'Ангирен шаҳри'),
(151, 11, 'Бекабод тумани'),
(152, 11, 'Бекабод шаҳри'),
(153, 11, 'Бўка тумани'),
(154, 11, 'Бўстонлиқ тумани'),
(155, 11, 'Зангиота тумани'),
(156, 11, 'Қибрай тумани'),
(157, 11, 'Қуйичирчиқ тумани'),
(158, 11, 'Оққўрғон тумани'),
(159, 11, 'Олмалиқ шаҳри'),
(160, 11, 'Оҳангарон тумани'),
(161, 11, 'Паркент тумани'),
(162, 11, 'Пискент тумани'),
(163, 11, 'Ўртачирчиқ тумани'),
(164, 11, 'Чиноз тумани'),
(165, 11, 'Чирчиқ шаҳри'),
(166, 11, 'Юқоричирчиқ тумани'),
(167, 11, 'Янгийўл тумани'),
(168, 12, 'Бешариқ тумани'),
(169, 12, 'Боғдод тумани'),
(170, 12, 'Бувайда тумани'),
(171, 12, 'Данғара тумани'),
(172, 12, 'Ёзёвон тумани'),
(173, 12, 'Қува тумани'),
(174, 12, 'Қувасой шаҳри'),
(175, 12, 'Қўқон шаҳри'),
(176, 12, 'Қўштепа тумани'),
(177, 12, 'Марғилон шаҳри'),
(178, 12, 'Олтиариқ тумани'),
(179, 12, 'Риштон тумани'),
(180, 12, 'Сўх тумани'),
(181, 12, 'Тошлоқ тумани'),
(182, 12, 'Учкўприк тумани'),
(183, 12, 'Ўзбекистон тумани'),
(184, 12, 'Фарғона тумани'),
(185, 12, 'Фарғона шаҳри'),
(186, 12, 'Фурқат тумани'),
(187, 13, 'Боғот тумани'),
(188, 13, 'Гурлан тумани'),
(189, 13, 'Қўшкўпир тумани'),
(190, 13, 'Урганч тумани'),
(191, 13, 'Урганч шаҳри'),
(192, 13, 'Хива тумани'),
(193, 13, 'Хазарасп тумани'),
(194, 13, 'Хонқа тумани'),
(195, 13, 'Шавот тумани'),
(196, 13, 'Янгиариқ тумани'),
(197, 13, 'Янгибозор тумани'),
(198, 14, 'Бектимер тумани'),
(199, 14, 'Мирзо-Улугбек'),
(200, 14, 'Миробод тумани'),
(201, 14, 'Олмазор тумани'),
(202, 14, 'Сиргали тумани'),
(203, 14, 'Учтепа тумани'),
(204, 14, 'Яшнобод тумани'),
(205, 14, 'Чилонзор тумани'),
(206, 14, 'Шайхонтоҳур тумани'),
(207, 14, 'Юнусобод тумани'),
(208, 14, 'Яккасарой тумани'),
(209, 1, 'Тахиатош шаҳри'),
(210, 2, 'Асака шаҳри'),
(211, 9, 'Бандихон тумани'),
(212, 11, 'Оҳангарон шаҳри'),
(213, 11, 'Янгийўл шаҳри'),
(215, 11, 'Тошкент тумани'),
(216, 13, 'Хива шаҳри'),
(217, 13, 'Дўстлик шаҳри'),
(218, 14, 'Янгиҳаёт тумани'),
(219, 13, 'Тупроққалъа тумани'),
(220, 7, 'Давлатобод тумани'),
(221, 6, 'Ғозғон шаҳри'),
(222, 1, 'Бўзатов тумани'),
(223, 9, 'Бандихон тумани'),
(224, 5, 'Шаҳрисабз шаҳри');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_category`
--

CREATE TABLE `doctor_category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `price` decimal(12,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_template`
--

CREATE TABLE `doctor_template` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `medical_history` varchar(255) DEFAULT NULL,
  `objective_vision` varchar(255) DEFAULT NULL,
  `instrumental` varchar(255) DEFAULT NULL,
  `diagnos` varchar(255) DEFAULT NULL,
  `procedure` varchar(255) DEFAULT NULL,
  `recommended` varchar(255) DEFAULT NULL,
  `concomitant` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `inspection`
--

CREATE TABLE `inspection` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` decimal(17,2) DEFAULT NULL,
  `type` tinyint(1) DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `percent_bonus` decimal(5,2) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `inspection_category`
--

CREATE TABLE `inspection_category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `inspection_child`
--

CREATE TABLE `inspection_child` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `norm` varchar(20) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `price` decimal(17,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `inspection_folder`
--

CREATE TABLE `inspection_folder` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `run_on` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `name`, `run_on`) VALUES
(1, '/20220127052228-region', '2022-02-22 13:50:34'),
(2, '/20220127052640-district', '2022-02-22 13:50:35'),
(3, '/20220127053023-branch', '2022-02-22 13:50:36'),
(4, '/20220127053355-user', '2022-02-22 13:50:37'),
(5, '/20220127092439-registration', '2022-02-22 13:50:39'),
(7, '/20220131060855-registration-inspection-child', '2022-02-22 13:50:40'),
(8, '/20220131064131-registration-doctor', '2022-02-22 13:50:41'),
(9, '/20220131064701-registration-recipe', '2022-02-22 13:50:41'),
(10, '/20220131065332-patient', '2022-02-22 13:50:41'),
(11, '/20220131083409-neighboarhood', '2022-02-22 13:50:42'),
(12, '/20220131083613-inspection-folder', '2022-02-22 13:50:42'),
(13, '/20220131083828-inspection-category', '2022-02-22 13:50:42'),
(14, '/20220131083911-inspection', '2022-02-22 13:50:43'),
(15, '/20220131092240-room', '2022-02-22 13:50:43'),
(16, '/20220131092432-doctor-category', '2022-02-22 13:50:43'),
(17, '/20220131092521-doctor', '2022-02-22 13:50:44'),
(18, '/20220131092655-sickness', '2022-02-22 13:50:44'),
(19, '/20220131092723-pill', '2022-02-22 13:50:44'),
(20, '/20220131092758-queue', '2022-02-22 13:50:45'),
(21, '/20220131095332-register-sickness', '2022-02-22 13:50:45'),
(22, '/20220131095608-register-mkb', '2022-02-22 13:50:45'),
(23, '/20220131100213-mkb', '2022-02-22 13:50:46'),
(25, '/20220131115046-inspection-child', '2022-02-22 13:50:47'),
(29, '/20220209101216-add-column-neighboarhood', '2022-02-22 13:50:53'),
(30, '/20220209102036-add-column-inspection-category', '2022-02-22 13:50:55'),
(31, '/20220214122841-registration-files', '2022-02-22 13:50:56'),
(32, '/20220221050246-add-register-doctor', '2022-02-22 13:50:58'),
(33, '/20220221112353-add-regionlist', '2022-02-22 13:50:58'),
(34, '/20220221122743-add-districlist', '2022-02-22 13:50:58'),
(35, '/20220222050021-add-neighboarhoodlist', '2022-02-22 13:50:59'),
(36, '/20220131054757-registration-inspection', '2022-02-23 15:40:28'),
(37, '/20220319095626-test', '2022-04-11 15:10:17'),
(38, '/20220411090729-add-column-xamrox-reg-doctor', '2022-04-11 15:10:18'),
(39, '/20220413105012-doctor-template', '2022-04-13 17:29:49'),
(40, '/20220413105508-register-doctor-diagnos', '2022-04-13 17:29:50'),
(41, '/20220413110141-change-column-type', '2022-04-13 17:29:51'),
(42, '/20220414112046-add-column-name', '2022-04-14 16:29:43');

-- --------------------------------------------------------

--
-- Table structure for table `mkb`
--

CREATE TABLE `mkb` (
  `id` int(11) NOT NULL,
  `name` varchar(512) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `parent_code` varchar(20) DEFAULT NULL,
  `node_count` int(11) DEFAULT '0',
  `additional_info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `neighboarhood`
--

CREATE TABLE `neighboarhood` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `neighboarhood`
--

INSERT INTO `neighboarhood` (`id`, `name`, `district_id`) VALUES
(8265, 'Azimobod SHFY', 178),
(8266, 'Beglar MFY', 178),
(8267, 'Beruniy MFY', 178),
(8268, 'Beshkovok MFY', 178),
(8269, 'Birlashgan MFY', 178),
(8270, 'Bozorboshi MFY', 178),
(8271, 'Bugdoychi MFY', 178),
(8272, 'Bunyodkor MFY', 178),
(8273, 'Burbonlik SHFY', 178),
(8274, 'Buston MFY', 178),
(8275, 'Butabekov MFY', 178),
(8276, 'Chinor SHFY', 178),
(8277, 'Chinortagi MFY', 178),
(8278, 'Dostlik MFY', 178),
(8279, 'Eskiarab SHFY', 178),
(8280, 'Farovon MFY', 178),
(8281, 'Fayziobod QFY', 178),
(8282, 'Gayrat-1 MFY', 178),
(8283, 'Gulobod MFY', 178),
(8284, 'Ibn Sino MFY', 178),
(8285, 'Jararik MFY', 178),
(8286, 'Jarkurgon MFY', 178),
(8287, 'Jonibek MFY', 178),
(8288, 'Jurak SHFY', 178),
(8289, 'Kapchugay QFY', 178),
(8290, 'Katput SHFY', 178),
(8291, 'Kaxramon MFY', 178),
(8292, 'Kiziltepa QFY', 178),
(8293, 'Kokir MFY', 178),
(8294, 'Kulbuyi MFY', 178),
(8295, 'Kumirchi MFY', 178),
(8296, 'Kurgoncha MFY', 178),
(8297, 'Kuvirboshi MFY', 178),
(8298, 'Maorif MFY', 178),
(8299, 'Mirfozil MFY', 178),
(8300, 'Mukimiy MFY', 178),
(8301, 'Mustakillik MFY', 178),
(8302, 'Navkuron MFY', 178),
(8303, 'Navoiy MFY', 178),
(8304, 'Obod MFY', 178),
(8305, 'Okbuyra SHFY', 178),
(8306, 'Olmazor MFY', 178),
(8307, 'Oltiarik SHFY', 178),
(8308, 'Pavulgon SHFY', 178),
(8309, 'Poloson SHFY', 178),
(8310, 'Sertut MFY', 178),
(8311, 'Shalola MFY', 178),
(8312, 'Shark MFY', 178),
(8313, 'Sodiyona MFY', 178),
(8314, 'Shodlik MFY', 178),
(8315, 'Tegirmonboshi MFY', 178),
(8316, 'Tinchlik MFY', 178),
(8317, 'Tinchlik SHFY', 178),
(8318, 'Tolkucha MFY', 178),
(8319, 'Toshkent MFY', 178),
(8320, 'Toshobod MFY', 178),
(8321, 'Usmonobod MFY', 178),
(8322, 'Ustoz MFY', 178),
(8323, 'Uzbekiston MFY', 178),
(8324, 'Uzumchi MFY', 178),
(8325, 'X.Olimjon MFY', 178),
(8326, 'Yangi Fargona MFY', 178),
(8327, 'Yangiarab MFY', 178),
(8328, 'Yangiarab SHFY', 178),
(8329, 'Yangiarik MFY', 178),
(8330, 'Yangichek MFY', 178),
(8331, 'Yangikurgon SHFY', 178),
(8332, 'Yangiturmush MFY', 178),
(8333, 'Yangixayot MFY', 178),
(8334, 'Yoshlik MFY', 178),
(8335, 'Yuksalish MFY', 178),
(8336, 'Zarxal MFY', 178),
(8337, 'Zilxa SHFY', 178);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `fullname` varchar(100) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `patronymic` varchar(40) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `district_id` int(11) DEFAULT NULL,
  `neighboarhood_id` int(11) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `passport` varchar(9) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `birthday` int(11) DEFAULT NULL,
  `disability` tinyint(1) DEFAULT '0',
  `d_control` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pill`
--

CREATE TABLE `pill` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `queue`
--

CREATE TABLE `queue` (
  `id` int(11) NOT NULL,
  `room_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `datetime` int(11) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `id` int(11) NOT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`id`, `name`) VALUES
(1, 'Қорақалпоғистон Республикаси'),
(2, 'Андижон вилояти'),
(3, 'Бухоро вилояти'),
(4, 'Жиззах вилояти'),
(5, 'Қашқадарё вилояти'),
(6, 'Навоий вилояти'),
(7, 'Наманган вилояти'),
(8, 'Самарқанд вилояти'),
(9, 'Сурхандарё вилояти'),
(10, 'Сирдарё вилояти'),
(11, 'Тошкент вилояти'),
(12, 'Фарғона вилояти'),
(13, 'Хоразм вилояти'),
(14, 'Тошкент шаҳри');

-- --------------------------------------------------------

--
-- Table structure for table `register_doctor_diagnos`
--

CREATE TABLE `register_doctor_diagnos` (
  `id` int(11) NOT NULL,
  `diagnos_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `register_doctor_diagnos_history`
--

CREATE TABLE `register_doctor_diagnos_history` (
  `id` int(11) NOT NULL,
  `diagnos_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `register_mkb`
--

CREATE TABLE `register_mkb` (
  `id` int(11) NOT NULL,
  `mkb_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `doc_id` int(11) DEFAULT NULL,
  `datetime` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `register_sickness`
--

CREATE TABLE `register_sickness` (
  `id` int(11) NOT NULL,
  `sickness_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `doc_id` int(11) DEFAULT NULL,
  `datetime` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `type_service` varchar(20) DEFAULT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `height` decimal(17,2) DEFAULT NULL,
  `weight` decimal(17,2) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_doctor`
--

CREATE TABLE `registration_doctor` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `price` decimal(17,2) DEFAULT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `medical_history` varchar(255) DEFAULT NULL,
  `objective_vision` varchar(255) DEFAULT NULL,
  `instrumental` varchar(255) DEFAULT NULL,
  `diagnos` varchar(255) DEFAULT NULL,
  `procedure` varchar(255) DEFAULT NULL,
  `recommended` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `concomitant` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_doctor_history`
--

CREATE TABLE `registration_doctor_history` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `price` decimal(17,2) DEFAULT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `medical_history` varchar(255) DEFAULT NULL,
  `objective_vision` varchar(255) DEFAULT NULL,
  `instrumental` varchar(255) DEFAULT NULL,
  `diagnos` varchar(255) DEFAULT NULL,
  `procedure` varchar(255) DEFAULT NULL,
  `recommended` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `concomitant` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_files`
--

CREATE TABLE `registration_files` (
  `id` int(11) NOT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `href` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_files_history`
--

CREATE TABLE `registration_files_history` (
  `id` int(11) NOT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `href` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_history`
--

CREATE TABLE `registration_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `type_service` varchar(20) DEFAULT NULL,
  `complaint` varchar(255) DEFAULT NULL,
  `height` decimal(17,2) DEFAULT NULL,
  `weight` decimal(17,2) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_inspection`
--

CREATE TABLE `registration_inspection` (
  `id` int(11) NOT NULL,
  `inspection_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `type` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_inspection_child`
--

CREATE TABLE `registration_inspection_child` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `norm` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `price` decimal(17,2) DEFAULT NULL,
  `checked` tinyint(1) DEFAULT '0',
  `file` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_inspection_child_history`
--

CREATE TABLE `registration_inspection_child_history` (
  `id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `norm` varchar(60) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `price` decimal(17,2) DEFAULT NULL,
  `checked` tinyint(1) DEFAULT '0',
  `file` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_inspection_history`
--

CREATE TABLE `registration_inspection_history` (
  `id` int(11) NOT NULL,
  `inspection_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `type` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_recipe`
--

CREATE TABLE `registration_recipe` (
  `id` int(11) NOT NULL,
  `doc_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `pill_id` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `registration_recipe_history`
--

CREATE TABLE `registration_recipe_history` (
  `id` int(11) NOT NULL,
  `doc_id` int(11) DEFAULT NULL,
  `registration_id` int(11) DEFAULT NULL,
  `pill_id` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sickness`
--

CREATE TABLE `sickness` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `inspection_category_id` int(11) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `salary` decimal(17,3) DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `room_id`, `doctor_id`, `inspection_category_id`, `type`, `salary`, `branch_id`) VALUES
(6, 'Superadmin', '$2a$08$jpWi7W9bdKgrx4DuYSRXzOmrH6Ay1gO2TeGC8ymMma0Z4EVxRyFXy', 'Administrator', NULL, NULL, NULL, NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_category`
--
ALTER TABLE `doctor_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_template`
--
ALTER TABLE `doctor_template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inspection`
--
ALTER TABLE `inspection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inspection_category`
--
ALTER TABLE `inspection_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inspection_child`
--
ALTER TABLE `inspection_child`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inspection_folder`
--
ALTER TABLE `inspection_folder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mkb`
--
ALTER TABLE `mkb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `neighboarhood`
--
ALTER TABLE `neighboarhood`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pill`
--
ALTER TABLE `pill`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register_doctor_diagnos`
--
ALTER TABLE `register_doctor_diagnos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register_doctor_diagnos_history`
--
ALTER TABLE `register_doctor_diagnos_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register_mkb`
--
ALTER TABLE `register_mkb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register_sickness`
--
ALTER TABLE `register_sickness`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_doctor`
--
ALTER TABLE `registration_doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_doctor_history`
--
ALTER TABLE `registration_doctor_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_files`
--
ALTER TABLE `registration_files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_files_history`
--
ALTER TABLE `registration_files_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_history`
--
ALTER TABLE `registration_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_inspection`
--
ALTER TABLE `registration_inspection`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_inspection_child`
--
ALTER TABLE `registration_inspection_child`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_inspection_child_history`
--
ALTER TABLE `registration_inspection_child_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_inspection_history`
--
ALTER TABLE `registration_inspection_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_recipe`
--
ALTER TABLE `registration_recipe`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_recipe_history`
--
ALTER TABLE `registration_recipe_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sickness`
--
ALTER TABLE `sickness`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_category`
--
ALTER TABLE `doctor_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_template`
--
ALTER TABLE `doctor_template`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inspection`
--
ALTER TABLE `inspection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inspection_category`
--
ALTER TABLE `inspection_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inspection_child`
--
ALTER TABLE `inspection_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inspection_folder`
--
ALTER TABLE `inspection_folder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `mkb`
--
ALTER TABLE `mkb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `neighboarhood`
--
ALTER TABLE `neighboarhood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8338;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pill`
--
ALTER TABLE `pill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queue`
--
ALTER TABLE `queue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `region`
--
ALTER TABLE `region`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `register_doctor_diagnos`
--
ALTER TABLE `register_doctor_diagnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `register_doctor_diagnos_history`
--
ALTER TABLE `register_doctor_diagnos_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `register_mkb`
--
ALTER TABLE `register_mkb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `register_sickness`
--
ALTER TABLE `register_sickness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_doctor`
--
ALTER TABLE `registration_doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_doctor_history`
--
ALTER TABLE `registration_doctor_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_files`
--
ALTER TABLE `registration_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_files_history`
--
ALTER TABLE `registration_files_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_history`
--
ALTER TABLE `registration_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_inspection`
--
ALTER TABLE `registration_inspection`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_inspection_child`
--
ALTER TABLE `registration_inspection_child`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_inspection_child_history`
--
ALTER TABLE `registration_inspection_child_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_inspection_history`
--
ALTER TABLE `registration_inspection_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_recipe`
--
ALTER TABLE `registration_recipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_recipe_history`
--
ALTER TABLE `registration_recipe_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sickness`
--
ALTER TABLE `sickness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
