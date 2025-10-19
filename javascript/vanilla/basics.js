// Variaveis
const a = "This is an constant";
var b = "This is a variable";
let c = "Prefer use this type of variables";

// Primitive Types: Numbers, Strings, Booleans, Null and Undefined, Symbol.
// Any other type is Object!


// Tipos primitivos
// Numbers
// Javascript don't differ float and integers
// Operations:
const sum = 1 + 1;
const sub = 1 - 1;
const div = 1 / 1;
const mult = 1 * 1;
const module = 1 % 2;
const potentiation = 2 ** 3;

Math.pow(2,53); // => 9007199254740992: 2 elevado à potência 53
Math.round(.6); // => 1.0: arredonda para o inteiro mais próximo
Math.ceil(.6); // => 1.0: arredonda para cima para um inteiro
Math.floor(.6); // => 0.0: arredonda para baixo para um inteiro
Math.abs(-5); // => 5: valor absoluto
Math.max(x,y,z); // Retorna o maior argumento
Math.min(x,y,z); // Retorna o menor argumento
Math.random(); // Número pseudoaleatório x, onde 0 <= x < 1.0
Math.PI; // π: circunferência de um círculo / diâmetro
Math.E; // e: A base do logaritmo natural
Math.sqrt(3); // A raiz quadrada de 3
Math.pow(3, 1/3); // A raiz cúbica de 3
Math.sin(0); // Trigonometria: também Math.cos, Math.atan, etc.
Math.log(10); // Logaritmo natural de 10
Math.log(100)/Math.LN10; // Logaritmo de base 10 de 100
Math.log(512)/Math.LN2; // Logaritmo de base 2 de 512
Math.exp(3); // Math.E ao cubo

let infinity = Infinity; // Uma variável de leitura/gravação inicializada como
 // Infinity.
let posInfinity = Number.POSITIVE_INFINITY; // O mesmo valor, somente para leitura.
let posInfinity2 = 1/0; // Este também é o mesmo valor.
let posInfinity3 = Number.MAX_VALUE + 1; // Isso também é avaliado como Infinity.
let negInfinity = Number.NEGATIVE_INFINITY; // Essas expressões são infinito negativo.
let negInfinity2 = -Infinity;
let negInfinity3 = -1/0;
let negInfinity4 = -Number.MAX_VALUE - 1;
let notANumber = NaN; // Uma variável de leitura/gravação inicializada como NaN.
let stringNotANumber = Number.NaN; // Uma propriedade somente para leitura contendo o mesmo
 // valor.
let anotherNaN = 0/0; // Avaliado como NaN.
let negZero = Number.MIN_VALUE/2; // Estouro negativo: avaliado como 0
let negZero2 = -Number.MIN_VALUE/2; // Zero negativo
let negZero3 = -1/Infinity;
let negZero4 = -0;

// Date
var then = new Date(2010, 0, 1); // O 1º dia do 1º mês de 2010
var later = new Date(2010, 0, 1,17, 10, 30); // O mesmo dia, às 5:10:30 da tarde, hora local
var now = new Date(); // A data e hora atuais
var elapsed = now - then; // Subtração de data: intervalo em milissegundos
later.getFullYear(); // => 2010
later.getMonth(); // => 0: meses com base em zero
later.getDate(); // => 1: dias com base em um
later.getDay(); // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
later.getHours(); // => 17: 5 da tarde, hora local
later.getUTCHours(); // Horas em UTC; depende do fuso horário
later.toString(); // => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800 (PST)"
later.toUTCString(); // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
later.toLocaleDateString(); // => "01/01/2010"
later.toLocaleTimeString(); // => "05:10:30 PM"
later.toISOString(); // => "2010-01-02T01:10:30.000Z"

