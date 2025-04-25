import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-audio-viewer',
  templateUrl: 'audio-viewer.component.html',
  styleUrls: ['audio-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class AudioViewerComponent {
  _src: string | null = null;

  @Input()
  set src(fileSrc: string | null) {
    if (fileSrc) {
      this._src = 'assets/files/' + fileSrc;
    }
  }

  get src() {
    return this._src;
  }
}
