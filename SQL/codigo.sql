CREATE TABLE Producto (
codigo INT  AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(30) NOT NULL,
descripcion VARCHAR(30) NOT NULL,
codigo_categoria VARCHAR(50),
precio float(30) NOT NULL,
estado VARCHAR(30) NOT NULL
);

INSERT INTO Producto (nombre, descripcion, codigo_categoria, precio, estado) 
VALUES ('Patineta', 'Garantia 1 año',001, 177, 'Activo')