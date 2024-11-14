function verificarParenteses(expressao) {
    const pilha = [];
    const aberturas = ['(', '[', '{'];
    const fechamentos = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of expressao) {
        if (aberturas.includes(char)) {
            pilha.push(char);
        } else if (fechamentos[char]) {
            if (pilha.length === 0 || pilha.pop() !== fechamentos[char]) {
                console.log(pilha)
                console.log(fechamentos[char])
                console.log(char)
                return "incorreto";
            }
        }
    }
    
    return pilha.length === 0 ? "correto" : "incorreto";
}

// Exemplos de uso
console.log(verificarParenteses("a+(b*c)-{2-[a]}"));      // Deve imprimir "correto"
console.log(verificarParenteses("{a+b*(2-c)-[2+a]*2}"));  // Deve imprimir "correto"
console.log(verificarParenteses("(a*b-[2+c)"));           // Deve imprimir "incorreto"
console.log(verificarParenteses("2*{3-a])"));             // Deve imprimir "incorreto"
console.log(verificarParenteses(")3+b*[2-c]{"));          // Deve imprimir "incorreto"
console.log(verificarParenteses("{[()]}"));               // Deve imprimir "correto"
console.log(verificarParenteses("{[(])}"));               // Deve imprimir "incorreto"
