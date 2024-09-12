require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se personagem é a Wonder Woman', async () => {
    const result = await fetchCharacter('720');
    expect(result.name).toBe('Wonder Woman');
  });

  it('Verifica se retorna erro ao passar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'))
  })

  it('Verifica se retorna \'Invalid id\' ao executar a função com parametro inválido', async () => {
    const result = await fetchCharacter('parametro qualquer');
    expect(result).toBe('Invalid id');
  })

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});