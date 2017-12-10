import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    question = {}
    questions

    constructor(private api: ApiService){

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.api.getQuestions().subscribe(res => {
            this.questions = res
        })
    }

    post(question){
        this.api.postQuestion(question)
    }
}