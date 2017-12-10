import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

    quiz = {}

    constructor(private api: ApiService){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

}