export class ComponenteCatalogo {
  ID: number;
  name: string = "";
  // html: string
  variables: ComponenteCatalogoVariables[] = [];
  constructor(_ID: number, _name: string, _html: string = "") {
    this.name = _name;
    // this.html = _html;
    this.ID = _ID;

    switch (this.name) {
      case 'Imagem':
        this.variables.push(new ComponenteCatalogoVariables());
        break;
      case 'Uma partição':
        this.variables.push(new ComponenteCatalogoVariables());
        break;
      case 'Duas partições':
        this.variables.push(new ComponenteCatalogoVariables());
        this.variables.push(new ComponenteCatalogoVariables());
        break;
      case 'Três partições':
        this.variables.push(new ComponenteCatalogoVariables());
        this.variables.push(new ComponenteCatalogoVariables());
        this.variables.push(new ComponenteCatalogoVariables());
        break;
      case 'Quatro partições':
        this.variables.push(new ComponenteCatalogoVariables());
        this.variables.push(new ComponenteCatalogoVariables());
        this.variables.push(new ComponenteCatalogoVariables());
        this.variables.push(new ComponenteCatalogoVariables());
        break;
      default:
        break;
    }


  }
}

export class ComponenteCatalogoVariables {
  file?: File;
  preco?: number;
  precoDesconto?: number;
  unidadeMedida?: string;
  descricaoProduto?: string;
}
