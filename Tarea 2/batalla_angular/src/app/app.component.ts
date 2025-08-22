import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'batalla_angular';

  jugador1 = {
      nombre: prompt('Ingrese el nombre del jugador 1'),
      vida: 100
  }
  
  jugador2 = {
      nombre: prompt('Ingrese el nombre del jugador 2'),
      vida: 100
  }

  disparoj1 = 0
  disparoj2 = 0

  dispararj1(){            
      this.disparoj1 = Math.floor(Math.random() * 10)
      this.jugador2.vida = this.jugador2.vida - this.disparoj1
      if (this.jugador2.vida < 0) {
        this.jugador2.vida = 0
      }

      if (this.jugador2.vida == 0){
          alert(`${this.jugador1.nombre} ha ganado`)
          location.reload()
      }
  }

  dispararj2(){
      this.disparoj2 = Math.floor(Math.random() * 10)
      this.jugador1.vida = this.jugador1.vida - this.disparoj2
      if (this.jugador1.vida < 0) {
        this.jugador1.vida = 0
      }

      if (this.jugador1.vida <= 0){
          alert(`${this.jugador2.nombre} ha ganado`)
          location.reload()
      }
  }
}
