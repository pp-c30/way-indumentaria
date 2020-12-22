-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-12-2020 a las 01:56:27
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `way`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `descripcion`, `estado`) VALUES
(1, 'Pantalones', 1),
(3, 'Medias', 1),
(4, 'Gorras', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_gasto`
--

CREATE TABLE `categoria_gasto` (
  `id_categoria_gasto` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `categoria_gasto`
--

INSERT INTO `categoria_gasto` (`id_categoria_gasto`, `descripcion`) VALUES
(1, 'Camperas'),
(3, 'Medias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gasto`
--

CREATE TABLE `gasto` (
  `id_gasto` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `importe` int(11) NOT NULL,
  `categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `gasto`
--

INSERT INTO `gasto` (`id_gasto`, `descripcion`, `importe`, `categoria`) VALUES
(2, 'internet', 3499, 1),
(4, 'luz', 1000, 1),
(5, 'gas', 2000, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `id_localidad` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `provincia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `localidad`
--

INSERT INTO `localidad` (`id_localidad`, `descripcion`, `provincia`) VALUES
(1, 'Cipolletti', 1),
(2, 'Neuquén', 2),
(3, 'Viedma', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `codigo` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio_compra` decimal(10,0) NOT NULL,
  `precio_way` decimal(10,0) NOT NULL,
  `precio_final` decimal(10,0) NOT NULL,
  `categoria` int(10) NOT NULL,
  `estado` tinyint(3) NOT NULL,
  `descuento` decimal(10,0) NOT NULL,
  `categoria_sexo` tinyint(1) NOT NULL,
  `fecha_carga` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `codigo`, `descripcion`, `precio_compra`, `precio_way`, `precio_final`, `categoria`, `estado`, `descuento`, `categoria_sexo`, `fecha_carga`) VALUES
(1, '2000', 'rip curl ', '200', '400', '600', 1, 1, '10', 0, '2020-12-23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id_provincia` int(11) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id_provincia`, `descripcion`) VALUES
(1, 'Rio Negro'),
(2, 'Neuquén'),
(3, 'La Pampa'),
(4, 'BS AS'),
(5, 'Mendoza'),
(6, 'Cordoba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `email`) VALUES
(20, 'lautaro', '$2a$10$WpCIx6zNHQAoSpiF7jDwRejmH8KcdctgnOj8Eqfp5PJ/8KZOsjA9K', 'lautaroramirez@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `id_vendedor` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dni` int(8) NOT NULL,
  `domicilio` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(200) COLLATE utf8mb4_spanish_ci NOT NULL,
  `localidad` int(11) NOT NULL,
  `adjunto` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nom_garante` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ape_garante` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email_garante` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dni_garante` int(8) NOT NULL,
  `domicilio_garante` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono_garante` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`id_vendedor`, `nombre`, `apellido`, `dni`, `domicilio`, `email`, `localidad`, `adjunto`, `telefono`, `nom_garante`, `ape_garante`, `email_garante`, `dni_garante`, `domicilio_garante`, `telefono_garante`, `estado`) VALUES
(4, 'julian', 'martinez', 43475627, 'roca 322', 'mj@gmail.com', 1, 'skdbfkbskhgbjksdc', '15487564', 'raul', 'gimenez', 'rg@gmail.com', 26473585, 'roca 153', '15463854', 0),
(15, 'msi', 'asus', 65747384, 'nvidia 123', 'nv@gmail.com', 2, 'kñshgbwjkef', '2994875062', 'logitech', 'asrok', 'as@gmail.com', 64758394, 'ryzen 54345', '2995647324', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id_venta` int(10) NOT NULL,
  `producto` int(10) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `importe` int(10) NOT NULL,
  `fecha_venta` date NOT NULL,
  `importe_unitario` varchar(45) COLLATE utf8mb4_spanish_ci NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `forma_pago` tinyint(1) NOT NULL,
  `descuento_aplicado` int(10) NOT NULL,
  `planilla` int(11) NOT NULL,
  `vendedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id_venta`, `producto`, `cantidad`, `importe`, `fecha_venta`, `importe_unitario`, `estado`, `forma_pago`, `descuento_aplicado`, `planilla`, `vendedor`) VALUES
(4, 1, 4, 7000, '2020-12-19', '6000', 1, 0, 50, 8, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_impaga_paga`
--

CREATE TABLE `venta_impaga_paga` (
  `id_impaga_paga` int(11) NOT NULL,
  `fecha_carga` date NOT NULL,
  `vendedor` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `debe` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `venta_impaga_paga`
--

INSERT INTO `venta_impaga_paga` (`id_impaga_paga`, `fecha_carga`, `vendedor`, `total`, `debe`, `estado`) VALUES
(8, '2020-12-15', 4, 3455, 876867, 1),
(9, '2020-12-17', 4, 455, 755, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `categoria_gasto`
--
ALTER TABLE `categoria_gasto`
  ADD PRIMARY KEY (`id_categoria_gasto`);

--
-- Indices de la tabla `gasto`
--
ALTER TABLE `gasto`
  ADD PRIMARY KEY (`id_gasto`),
  ADD KEY `fk_gasto_categoria` (`categoria`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`id_localidad`),
  ADD KEY `fk_localidad_provincia` (`provincia`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_producto_categoria` (`categoria`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id_provincia`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id_vendedor`),
  ADD KEY `fk_vendedor_localidad` (`localidad`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id_venta`),
  ADD KEY `fk_venta_vendedor` (`vendedor`),
  ADD KEY `fk_venta_producto` (`producto`),
  ADD KEY `fk_venta_impagapaga` (`planilla`);

--
-- Indices de la tabla `venta_impaga_paga`
--
ALTER TABLE `venta_impaga_paga`
  ADD PRIMARY KEY (`id_impaga_paga`),
  ADD KEY `vendedor` (`vendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categoria_gasto`
--
ALTER TABLE `categoria_gasto`
  MODIFY `id_categoria_gasto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `gasto`
--
ALTER TABLE `gasto`
  MODIFY `id_gasto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `id_localidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id_provincia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `id_vendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id_venta` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `venta_impaga_paga`
--
ALTER TABLE `venta_impaga_paga`
  MODIFY `id_impaga_paga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `gasto`
--
ALTER TABLE `gasto`
  ADD CONSTRAINT `fk_gasto_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria_gasto` (`id_categoria_gasto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD CONSTRAINT `fk_localidad_provincia` FOREIGN KEY (`provincia`) REFERENCES `provincia` (`id_provincia`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_categoria` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`id_categoria`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD CONSTRAINT `fk_vendedor_localidad` FOREIGN KEY (`localidad`) REFERENCES `localidad` (`id_localidad`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `fk_venta_impagapaga` FOREIGN KEY (`planilla`) REFERENCES `venta_impaga_paga` (`id_impaga_paga`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_venta_producto` FOREIGN KEY (`producto`) REFERENCES `producto` (`id_producto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_venta_vendedor` FOREIGN KEY (`vendedor`) REFERENCES `vendedor` (`id_vendedor`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `venta_impaga_paga`
--
ALTER TABLE `venta_impaga_paga`
  ADD CONSTRAINT `venta_impaga_paga_ibfk_1` FOREIGN KEY (`vendedor`) REFERENCES `vendedor` (`id_vendedor`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
