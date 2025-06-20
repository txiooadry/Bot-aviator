exports.detect = function (history) {
  const last5 = history.slice(0, 5);

  if (last5.length < 5) return null;

  // Exemplo de padrão simples:
  if (last5.every(x => x < 2)) {
    return '⚠️ 5 jogadas seguidas abaixo de 2x';
  }

  // Aqui depois você pode adicionar os outros 16 padrões que quiser
  return null;
};
