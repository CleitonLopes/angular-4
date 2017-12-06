import
{
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

import {Task} from './task';

@Directive({
  selector: '[myTask]'
})
export class MyTaskDirective {

  private _myTask: Task; // padrão variavel privada adiciona _ na frente

  constructor(private el:ElementRef) {

    this.el.nativeElement.innerHTML += 'conteudo inserido';
  }


  get myTask () {

    return this._myTask

  }

  // Digo que a variavel pode receber parametros vindo da view
  @Input()
  set myTask (value) {

    this._myTask = value;

    // chama a função no setter no valor, assim eu faço o encadeamento de processos
    this.changeColorTask();

  }

  // ao chamar o evento de click, chama uma função aqui chamada de onClick
  @HostListener('click')

    onClick () {

      alert(this.myTask);

    }

    changeColorTask () {

      this.el.nativeElement.style.color = this.myTask.value > 5 ? 'blue' : 'red';

    }

}
