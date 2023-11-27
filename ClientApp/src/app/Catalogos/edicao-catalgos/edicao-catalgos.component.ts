import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { faFilePdf, faImage, faSquare, faEraser, faUndo } from '@fortawesome/free-solid-svg-icons';
import { ComponenteCatalogo } from 'src/classes/ComponentesCatalogo';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-edicao-catalgos',
  templateUrl: './edicao-catalgos.component.html',
  styleUrls: ['./edicao-catalgos.component.css']
})
export class EdicaoCatalgosComponent {
  public padraoCorEscolhida!: number
  faSquare = faSquare;
  faImage = faImage;
  faFilePdf = faFilePdf;
  faEraser = faEraser;
  design_zone: ComponenteCatalogo[] = [];
  ultimoItemAdicionado: ComponenteCatalogo | null = null;
  constructor(private sanitizer: DomSanitizer) { };

  drop(event: CdkDragDrop<ComponenteCatalogo[]>) {

    var nextID = this.design_zone.length + 1;
    let newItem;

    switch (event.previousIndex) {
      case 0:
        newItem = new ComponenteCatalogo(nextID, 'Imagem');
        break;
      case 1:
        newItem = new ComponenteCatalogo(nextID, 'Uma partição');
        break;
      case 2:
        newItem = new ComponenteCatalogo(nextID, 'Duas partições');
        break;
      case 3:
        newItem = new ComponenteCatalogo(nextID, 'Três partições');
        break;
      case 4:
        newItem = new ComponenteCatalogo(nextID, 'Quatro partições');
        break;
      default:
        return
    }
    this.ultimoItemAdicionado = newItem;
    this.design_zone.splice(event.currentIndex, 0, newItem!);
  }



  //#region Componente de Imagem
  onFileSelected(event: { id: number, file: File }): void {
    console.log(`File selected with id ${event.id}:`, event.file);
    var ComponentIndex = this.design_zone.findIndex(obj => obj.ID === event.id);
    console.log(ComponentIndex)
    this.design_zone[ComponentIndex].variables[0].file = event.file
  }
  //#endregion
  private ordemDeAdicao: any[] = [];
  adicionarItem(item: any): void {
    this.design_zone.push(item);
    this.ordemDeAdicao.push(item);
}
  limparCampos() {
    this.design_zone = [];
    this.padraoCor(0);
  }
  limparUltimoCampo(): void {
    if (this.design_zone.length > 0) {
      const ultimoIndex = this.design_zone.length - 1;
      const ultimoItem = this.design_zone[ultimoIndex];

      this.design_zone.splice(ultimoIndex, 1);


      this.ultimoItemAdicionado = this.design_zone.length > 0 ? this.design_zone[this.design_zone.length - 1] : null;
    }
  }
  geraCatologo() {
    html2canvas(document.querySelector("#workspace-data")!).then(canvas => {

      const dataURL = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.href = dataURL;
      var dataAtual = new Date();
      downloadLink.download = "Catologo(" + dataAtual.getDay() + "-" + dataAtual.getMonth() + "-" + dataAtual.getFullYear() +
        " " + dataAtual.getHours() + "H" + dataAtual.getMinutes() + "Min)" + ".png";

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });

  }

  padraoCor(padrao: number): void {
    this.padraoCorEscolhida = padrao;
  }

}
