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

var p = "π"; // π é 1 caractere com posição de código de 16 bits 0x03c0
var e = "e"; // e é 1 caractere com posição de código de 17 bits 0x1d452
p.length; // => 1: p consiste em 1 elemento de 16 bits
e.length; // => 2: a codificação UTF-16 de e são 2 valores de 16 bits: "\ud835\  udc52"

'name="myform"';
"Wouldn't you prefer O'Reilly's book?";
"This string\nhas two lines";
"π is the ratio of a circle's circumference to its diameter";

"two\nlines"; // Uma string representando 2 linhas escritas em uma linha
"one\n long\n line"; // Uma string de uma linha escrita em 3 linhas. Somente ECMAScript 5.

'You\'re right, it can\'t be a quote';

'\0'; // O caractere NUL (\u0000)
'\b'; // Retrocesso (\u0008)
'\t'; // Tabulação horizontal (\u0009)
'\n'; // Nova linha (\u000A)
'\v'; // Tabulação vertical (\u000B)
'\f'; // Avanço de página (\u000C)
'\r'; // Retorno de carro (\u000D)
'\"'; // Aspas duplas (\u0022)
"\'"; // Apóstrofo ou aspas simples (\u0027)
'\\'; // Barra invertida (\u005C)
'\xf8'; // XX O caractere Latin-1 especificado pelos dois dígitos hexadecimais XX
'\uf8f8'; // XXXX O caractere Unicode especificado pelos quatro dígitos hexadecimais XXXX

let msg = "Hello, " + "world"; // Produz a string "Hello, world"
let name = "Developer";
let greeting = "Welcome to my blog," + " " + name;

msg.length

var s = "hello, world" // Começa com um texto.
s.charAt(0) // => "h": o primeiro caractere.
s.charAt(s.length-1) // => "d": o último caractere.
s.substring(1,4) // => "ell": o 2º, 3º e 4º caracteres.
s.slice(1,4) // => "ell": a mesma coisa
s.slice(-3) // => "rld": os últimos 3 caracteres
s.indexOf("l") // => 2: posição da primeira letra l.
s.lastIndexOf("l") // => 10: posição da última letra l.
s.indexOf("l", 3) // => 3: posição do primeiro "l" em ou após 3
s.split(", ") // => ["hello", "world"] divide em substrings
s.replace("h", "H") // => "Hello, world": substitui todas as instâncias
s.toUpperCase() // => "HELLO, WORLD"

s = "hello, world";
s[0] // => "h"
s[s.length-1] // => "d"


// REGEX

let exp = /^HTML/ // Corresponde às letras H T M L no início de uma string
let numbers = /[1-9][0-9]*/ // Corresponde a um dígito diferente de zero, seguido de qualquer
 // número de dígitos
let caseInsensitive = /\bjavascript\b/i // Corresponde a "javascript" como uma palavra, sem considerar letras
// maiúsculas e minúsculas

var text = "testing: 1, 2, 3"; // Exemplo de texto
var pattern = /\d+/g // Corresponde a todas as instâncias de um ou mais
 // dígitos
pattern.test(text) // => verdadeiro: existe uma correspondência
text.search(pattern) // => 9: posição da primeira correspondência
text.match(pattern) // => ["1", "2", "3"]: array de todas as correspondências
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/); // => ["","1","2","3"]: divide em não dígitos

// Boolean
false // 0, -0, "" (empty string), NaN, undefined, null
true // any else value
