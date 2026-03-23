# Spec: Padrões de Arquitetura e Estrutura de Domínio

### Requirement: Isolamento de Serviços (ACL)
O sistema DEVE possuir uma camada de abstração para todos os serviços de infraestrutura (Supabase/Axios).
- **WHEN**: Um componente precisa de dados do banco.
- **THEN**: Ele deve injetar um serviço (`inject('financeService')`) em vez de importar o cliente Supabase diretamente.

### Requirement: Densidade de Código (SRP)
Todos os arquivos `.ts` e scripts dentro de `.vue` DEVEM respeitar o limite máximo de 150 linhas.
- **WHEN**: A lógica de um componente cresce além de 150 linhas.
- **THEN**: O desenvolvedor deve extrair a lógica para um Composable ou subcomponente (Molecule).

### Requirement: Atomic Design Strictness
Novos componentes DEVEM ser classificados como Atoms, Molecules ou Organisms.
- **WHEN**: Um desenvolvedor cria um novo componente de UI.
- **THEN**: Ele deve salvá-lo na pasta correspondente (`components/atoms`, etc.) sob pena de reprovação no lint de arquitetura.

### Requirement: Boas Práticas de TDD (Contrato Primeiro)
O contrato (Interface) de cada serviço deve ser escrito antes da implementação concreta.
- **WHEN**: Implementando uma nova funcionalidade de domínio.
- **THEN**: A interface em `src/core/services` deve ser o primeiro arquivo criado.
