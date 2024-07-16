'use server'

export async function adicionarCliente(props: string[]) {

  const res = await get(
    "http://localhost:3000/cliente/api/adicionar" +
    `?id=${props[0]}&nome=${props[1]}&email=${props[2]}`
  );

  if (res.mensagem) {
    return `Novo cliente adicionado: ${props[1]}`;
  }
  else {
    return `Não foi possível adicionar o cliente: ${props[1]}`;
  }
}

export async function editarCliente(props: string[]) {

  const res = await post(
    'http://localhost:3000/cliente/api/editar',
    `{"id":"${props[0]}", "nome":"${props[1]}", "email":"${props[2]}"}`
  );

  if (res.mensagem) {
    return `O cliente com ID: ${props[1]} foi editado.`;
  }
  else {
    return `Não foi possível editar o cliente com ID: ${props[0]}`;
  }
}

export async function removerCliente(id: number) {

  const res = await post(
    "http://localhost:3000/cliente/api/remover",
    `{"id":"${id}"}`
  );

  if (res.mensagem) {
    return `O cliente com ID: ${id} foi removido.`;
  }
  else {
    return `Não foi possível remover o cliente com ID: ${id}`;
  }
}

async function get(url: string) {
  const res = await fetch(url);
  return res.json();
}

async function post(url: string, obj: string) {

  const res = await fetch(url, { method: 'POST', body: obj });

  if (!res.ok) {
    throw new Error('Falha em executar a ação do formulário.');
  }
  return res.json();
}