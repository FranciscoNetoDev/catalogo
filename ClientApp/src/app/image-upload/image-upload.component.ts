import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-upload',
  template: `
    <div [hidden]="selectedFile">
      <label style="align-items: center; display: flex; justify-content: space-evenly;" [style.height]="height"   class="btn element-Partition">
        <fa-icon [icon]="faImage"></fa-icon>
        <input #fileInput  hidden type="file" accept="image" (change)="onFileSelected($event)">
      </label>
    </div>

    <div [hidden]="!selectedFile">
      <img style="width:100%" [style.max-height]="maxHeight"  [src]="selectedFile" alt="Selected Image" (click)="openFileInput()">
    </div>
  `,
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent {
  faImage = faImage;
  @Input() index!: number;
  @Input() maxHeight?: string;
  @Input() height?: string;
  @Output() fileSelected: EventEmitter<{ id: number, file: File }> = new EventEmitter();
  selectedFile: string | null = null;

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

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
          this.fileSelected.emit({ id: this.index, file: fileOutput });
        }

      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  openFileInput(): void {
    if (this.fileInput) this.fileInput.nativeElement.click();
  }
}
