import { Component } from '@angular/core';

@Component({
    template: `
       <div class="centered-container">
        <img src="./images/404.jpg">
        <h2>OOOPS...</h2>
        <h5>The page your're looking for can't be found</h5>
       </div>
    `,
    styles: [`
        .centered-container {
            text-align:  center;
            height: 72vh;
            width: 100%;
            margin-top: 70px;
        }

        .centered-container > img { width: 50vh; }

    `]
})

export class PageNotFoundComponent  {
}
