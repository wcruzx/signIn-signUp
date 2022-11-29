let option
let userName = []
let userPsswd = []


while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada:
    
    1. Cadastrar um usuário
    2. Fazer login
    3. Sair do programa
  `))

  switch(option) {
    case 1:
      let userName = prompt("Digite o nome do usuário")
      let userPsswd = prompt("Digita uma senha (mínimo 8 caracteres)")
      break
    case 2:
    prompt("Digite seu usuário")
    prompt("Digite sua senha")
    alert("Logado com sucesso")
      break
    case 3: 
      alert("Obrigado por acessar nosso sistema!")
      break
    default:
      alert("Opção inválida. Tente novamente")
  }

}