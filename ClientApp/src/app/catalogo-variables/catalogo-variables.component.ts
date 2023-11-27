import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ComponenteCatalogoVariables } from '../../classes/ComponentesCatalogo';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-catalogo-variables',
  templateUrl: './catalogo-variables.component.html',
  styleUrls: ['./catalogo-variables.component.css']
})
export class CatalogoVariablesComponent implements AfterViewInit {
  faImage = faImage;
  @Input() index!: number;
  @Input() partitionCount!: number;
  @Input() padraoCor!: number;
  @Output() fileSelected: EventEmitter<{ variables: ComponenteCatalogoVariables }> = new EventEmitter();
  selectedFile: string | null = null;

  @ViewChild('cardValue') cardValue!: ElementRef<HTMLDivElement>;
  @ViewChild('header') header!: ElementRef<HTMLElement>;

  public variablesData: ComponenteCatalogoVariables = new ComponenteCatalogoVariables()
  public bigFontSize?: string
  public smallFontSize?: string
  public bigUnFontSize?: string
  public smallUnFontSize?: string
  public headerFontSize?: string = "24px"
  public heightCardValue?: string = "180px"
  public widthValuePromo?: string
  public widthUnPromo?: string
  public widthValue?: string
  public widthUn?: string
  public widthCard?: string
  public heightCard?: string
  public CorPrincipal?: string
  public CorComplementar?: string
  public CorBorda?: string

  ngAfterViewInit() {
    setTimeout(() => {
      switch (this.partitionCount) {
        case 1:
          this.headerFontSize = "22px";
          this.cardValue.nativeElement.style.width = "360px"
          this.smallFontSize = "24px";
          this.bigFontSize = "26px";
          this.smallUnFontSize = "150%";
          this.bigUnFontSize = "200%";
          this.heightCardValue = (this.cardValue.nativeElement.offsetHeight + 90) + "px";
          this.heightCard = (this.cardValue.nativeElement.offsetHeight + 40) + "px";
          break;
        case 2:
          this.headerFontSize = "20px";
          this.smallFontSize = "130%";
          this.bigFontSize = "160%";
          this.smallUnFontSize = "90%";
          this.bigUnFontSize = "120%";
          this.heightCardValue = this.cardValue.nativeElement.offsetHeight + "px";
          this.heightCard = (this.cardValue.nativeElement.offsetHeight - 20) + "px";
          break;
        case 3:
          this.headerFontSize = "18px";
          this.smallFontSize = "110%";
          this.bigFontSize = "127%";
          this.smallUnFontSize = "108%";
          this.bigUnFontSize = "110%";
          this.heightCardValue = (this.cardValue.nativeElement.offsetHeight - 50) + "px";
          this.widthValuePromo = "87px";
          this.widthUnPromo = "24px"
          this.widthValue = "76px";
          this.widthUn = "31px"
          this.heightCard = (this.cardValue.nativeElement.offsetHeight - 50) + "px";
          break;
        case 4:
          this.headerFontSize = "18px";
          this.smallFontSize = "104%";
          this.bigFontSize = "110%";
          this.smallUnFontSize = "95%";
          this.bigUnFontSize = "80%";
          this.heightCardValue = this.cardValue.nativeElement.offsetHeight + "px";
          this.widthValuePromo = "82px";
          this.widthUnPromo = "23px"
          this.widthValue = "76px";
          this.widthUn = "31px"
          this.widthCard = "135px"
          this.heightCard = (this.cardValue.nativeElement.offsetHeight - 80) + "px";
          break;
      }
      if ((this.padraoCor === undefined) || (this.padraoCor === null)) {
        this.CorPrincipal = "#82A1B3"
        this.CorBorda = "7px solid #82A1B3"
        this.CorComplementar = "#476576"
      } else {
        if (this.padraoCor === 1) {
          this.CorPrincipal = "#F15F22"
          this.CorBorda = "7px solid #F15F22"
          this.CorComplementar = "#000"

        } else {
          if (this.padraoCor === 2) {
            this.CorPrincipal = "#00B332"
            this.CorBorda = "7px solid #00B332"
            this.CorComplementar = "#FFE600"
          } else {
            this.CorPrincipal = "#82A1B3"
            this.CorBorda = "7px solid #82A1B3"
            this.CorComplementar = "#476576"
          }
        }
      }

    }, 0);

  }

  onFileSelected(event: any): void {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;

        const inputElement = event.target as HTMLInputElement;
        const files = inputElement.files;

        if (files && files.length > 0) {
          const fileOutput = files[0];
          this.fileSelected.emit({ variables: this.variablesData });
        }

      };

      reader.readAsDataURL(input.files[0]);
    }
  }
}
