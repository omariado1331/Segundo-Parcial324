create table procesos(
codflujo varchar(3),
codproceso varchar(3),
codprocesosiguiente varchar(3),
pantalla varchar(25)
);

insert into procesos values('F1', 'P1', 'P3', 'inisesion.inc.php');
insert into procesos values('F1', 'P2', 'P3', 'cambiacontra.inc.php');
insert into procesos values('F1', 'P3', null, 'bandejaent.inc.php');
insert into procesos values('F1', 'P4', 'P3', 'consultdatos.inc.php');
insert into procesos values('F1', 'P5', 'P6', 'elegirmat.inc.php');
insert into procesos values('F1', 'P6', 'P3', 'verificarmat.inc.php');
insert into procesos values('F1', 'P7', null, 'consultarnotas.inc.php');


create table usuarios(
user varchar(10) primary key,
pass varchar(20) 
);

insert into usuarios values('123456', '123456');
insert into usuarios values('654321', '654321');
insert into usuarios values('6957465', '6957465');

create table alumnos(
ci varchar(10) primary key,
nombre varchar(30),
app varchar(20),
apm varchar(20),
fnac date,
semestre varchar(25)
);

insert into alumnos values('123456', 'Vanesa', 'Mendoza', 'Flores', '1996-10-22', 'primero');
insert into alumnos values('654321', 'Alex', 'Perez', 'Gonzales', '1994-05-10', 'tercero');
insert into alumnos values('6957465', 'Omar', 'Calle', 'Guachalla', '1995-09-28', 'septimo');

create table notas(
ci varchar(10),
codmateria varchar(10),
nota int
);

insert into notas values('654321', 'INF-111', 51);
insert into notas values('654321', 'LAB-122', 70);
insert into notas values('654321', 'MAT-114', 80);
insert into notas values('6957465', 'MAT-114', 90);
insert into notas values('6957465', 'LIN-116', 51);
insert into notas values('6957465', 'INF-131', 65);
insert into notas values('6957465', 'INF-154', 55);

create table materias(
codmateria varchar(10) primary key,
descripcion varchar(30),
semestre varchar(25)
);

insert into materias values('INF-111', 'Introducción a la Informática', 'primero');
insert into materias values('INF-113', 'Programación Web', 'primero');
insert into materias values('MAT-114', 'Cálculo I', 'primero');
insert into materias values('LIN-116', 'Gramática Española', 'primero');
insert into materias values('LAB-122', 'Laboratorio de Física I', 'segundo');
insert into materias values('INF-131', 'Estructuras de Datos', 'tercero');
insert into materias values('LAB-131', 'Laboratorio de INF-131', 'tercero');
insert into materias values('LAB-132', 'Laboratorio de Física II', 'tercero');
insert into materias values('FIS-132', 'Física II', 'tercero');
insert into materias values('INF-272', 'Taller de Base de Datos', 'septimo');
insert into materias values('INF-271', 'Teoría de Sistemas y Modelos', 'septimo');
insert into materias values('INF-273', 'Telemática', 'septimo');


create table registromat(
ci varchar(10),
sigla varchar(10),
materia varchar(30),
paralelo varchar(3)
);

