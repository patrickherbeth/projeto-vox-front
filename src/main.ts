import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // Certifique-se de que o caminho está correto
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err));
