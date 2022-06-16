-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 16. Jun 2022 um 13:06
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `device-database`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_buildings`
--

CREATE TABLE `tbl_buildings` (
  `ID` int(11) NOT NULL,
  `Building` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_devices`
--

CREATE TABLE `tbl_devices` (
  `ID` int(11) NOT NULL,
  `Typ` text NOT NULL,
  `Manufactor` text NOT NULL,
  `Model` text NOT NULL,
  `Delivery_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_manufactor`
--

CREATE TABLE `tbl_manufactor` (
  `ID` int(11) NOT NULL,
  `Manufactor` text NOT NULL,
  `Model` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_personal`
--

CREATE TABLE `tbl_personal` (
  `ID` int(11) NOT NULL,
  `Firstname` text NOT NULL,
  `Lastname` text NOT NULL,
  `PersonalID` text NOT NULL,
  `Building` text NOT NULL,
  `Room` text NOT NULL,
  `Telephone` int(11) NOT NULL,
  `Device` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tbl_types`
--

CREATE TABLE `tbl_types` (
  `ID` int(11) NOT NULL,
  `Typ` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tbl_buildings`
--
ALTER TABLE `tbl_buildings`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `tbl_devices`
--
ALTER TABLE `tbl_devices`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `tbl_manufactor`
--
ALTER TABLE `tbl_manufactor`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `tbl_personal`
--
ALTER TABLE `tbl_personal`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `tbl_types`
--
ALTER TABLE `tbl_types`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tbl_buildings`
--
ALTER TABLE `tbl_buildings`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `tbl_devices`
--
ALTER TABLE `tbl_devices`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `tbl_manufactor`
--
ALTER TABLE `tbl_manufactor`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `tbl_personal`
--
ALTER TABLE `tbl_personal`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `tbl_types`
--
ALTER TABLE `tbl_types`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
