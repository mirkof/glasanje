import { Injectable } from '@angular/core';
const robotoUrl = 'assets/Roboto-Regular.ttf';
const documentUrl = 'assets/Zahtev-za-glasanje-u-inostranstvu-2022.pdf';

/** Eagerly loads resources on app init. */
export function eagerLoaderServiceFactory(service: EagerLoaderService) {
  return () => service.load();
}

/** Eagerly loads form resources to allow offline work. */
@Injectable({
  providedIn: 'root'
})
export class EagerLoaderService {
  robotoFontBytes: ArrayBuffer
  pdfFormBytes: ArrayBuffer;

  load() {
    fetch(robotoUrl).then((res) => res.arrayBuffer()).then((res) => {
      this.robotoFontBytes = res;
    });
    fetch(documentUrl).then(res => res.arrayBuffer()).then((res) => {
      this.pdfFormBytes = res;
    });

  }
}
