import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt-verbal',
  templateUrl: './attempt-verbal.component.html',
  styleUrls: ['./attempt-verbal.component.css']
})
export class AttemptVerbalComponent implements OnInit {
  [x: string]: any;

  constructor() { }
  questionsList = ['What is your name?', 'What is your favorite color?', 'Why you exist 🤔?'];
    recordings: { [key: string]: string } = {};
    recording: { [key: string]: boolean } = {};

  ngOnInit(): void {
  }
  recordAnswer(question: string) {
    this.recording[question] = true;
    //navigator.mediaDevices.getUserMedia he wala user ch audio ch access sathi
    //then created mediarecorder object is created
    //and audio beimg recorded
    //
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        const chunks: Blob[] = [];

        mediaRecorder.start();

        mediaRecorder.addEventListener('dataavailable', event => {
          chunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
          const blob = new Blob(chunks, { type: 'audio/mp3' });
          const reader = new FileReader();

          reader.addEventListener('loadend', () => {
            this.recordings[question] = reader.result as string;
          });

          reader.readAsDataURL(blob);
        });

        setTimeout(() => {
          mediaRecorder.stop();

          this.recording[question] = false;
        }, 5000);
      });
  }

  submitAnswers() {
    const answers = [];

    for (const question of this.questionsList) {
      answers.push({
        question: question,
        answer: this.recordings[question]
      });
    }

    console.log(answers)

    // Send answers to server or store in local storage
  }


}
