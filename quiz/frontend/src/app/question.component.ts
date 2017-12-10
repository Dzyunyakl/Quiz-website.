import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {

    question = {}

    constructor(private api: ApiService){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.api.questionSelected.subscribe(question => this.question = question)
    }

    post(question){
        this.api.postQuestion(question)
    }
}