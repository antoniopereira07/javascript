// boolean
// string
// tuple
var title;
title: ["1", "Título"];
// enum - É um tipo de numeração
// enum  { chave: valor}
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["red"] = "#f00";
    Color["blue"] = "#00f";
})(Color || (Color = {}));
